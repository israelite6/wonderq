import { Injectable } from '@nestjs/common';
import { Entity } from '../entity';
import { DbInterface } from './db.interface';
import { EntityToJsonInterface } from '../interface/entity.interface';
import { EXPIRE_DURATION_IN_MILLI_SECONDS } from '../config/constants';

@Injectable()
export class DbService implements DbInterface {
  db: Entity[] = [];
  cache = {};

  insert(message: string): Entity {
    const entity = new Entity(message);
    this.db.push(entity);
    return entity;
  }

  insertCache(entity: Entity): void {
    this.cache[entity.getId()] = entity;
  }

  getCacheByKey(id: string): Entity {
    return this.cache[id];
  }

  deleteCache(id: string): Entity {
    const entity = this.cache[id];
    delete this.cache[id];
    return entity;
  }

  first(): Entity | null {
    if (this.db.length === 0) {
      return null;
    }
    const entity = this.db.shift();
    entity.setIsProcessing(true);
    this.insertCache(entity);
    return entity;
  }

  reInsert(id: string): Entity {
    const entity = this.getCacheByKey(id);
    entity.setIsProcessing(false);
    this.db.push(entity);
    this.deleteCache(id);
    return entity;
  }

  all(): EntityToJsonInterface[] {
    return this.db
      .map((entity) => entity.toJson())
      .concat(Object.values(this.cache));
  }

  reQueueExpiredMessage(entity: Entity) {
    const presentTimeStamp = new Date().getTime();

    if (
      entity.getProcessingStartAt() > 1 &&
      entity.getProcessingStartAt() + EXPIRE_DURATION_IN_MILLI_SECONDS <
        presentTimeStamp
    ) {
      this.reInsert(entity.getId());
    }
  }
  reQueueExpiredMessages() {
    Object.keys(this.cache).map((key) =>
      this.reQueueExpiredMessage(this.cache[key]),
    );
  }
}
