import { BadRequestException, Injectable } from '@nestjs/common';
import { DbService } from './db/db.service';
import { PublishMessageResponseInterface } from './interface/publish-message-response.interface';
import { EntityToJsonInterface } from './interface/entity.interface';
import { ConsumeMessageResponseInterface } from './interface/consume-message-response.interface';
import { AcknowledgeMessageResponseInterface } from './interface/acknowledge-message-response.interface';

@Injectable()
export class QueueService {
  constructor(private dbService: DbService) {}
  create(message: string): PublishMessageResponseInterface {
    const entity = this.dbService.insert(message);
    return { id: entity.getId() };
  }

  all(): EntityToJsonInterface[] {
    return this.dbService.all();
  }

  consume(take: number): ConsumeMessageResponseInterface[] {
    const messages = [];
    for (let i = 0; i < parseInt(String(take)); i++) {
      const entity = this.dbService.first();
      if (!entity) {
        break;
      }
      messages.push({
        id: entity.getId(),
        message: entity.getMessage(),
        timestamp: entity.getTimestamp(),
      });
    }
    return messages;
  }

  acknowledge(id: string): AcknowledgeMessageResponseInterface {
    const entity = this.dbService.deleteCache(id);
    if (!entity) {
      throw new BadRequestException('Invalid id');
    }
    return { acknowledged: true, id: entity.getId() };
  }
}
