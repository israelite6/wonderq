import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';

@Injectable()
export class RequeueMessageGuard implements CanActivate {
  constructor(private dbService: DbService) {}
  canActivate(context: ExecutionContext): boolean {
    this.dbService.reQueueExpiredMessages();
    return true;
  }
}
