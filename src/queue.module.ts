import { Module } from '@nestjs/common';
import { QueueController } from './queue.controller';
import { QueueService } from './queue.service';
import { DbService } from './db/db.service';
import { APP_GUARD } from '@nestjs/core';
import { RequeueMessageGuard } from './guard/requeue-message.guard';

@Module({
  imports: [],
  controllers: [QueueController],
  providers: [
    QueueService,
    DbService,
    { provide: APP_GUARD, useClass: RequeueMessageGuard },
  ],
})
export class QueueModule {}
