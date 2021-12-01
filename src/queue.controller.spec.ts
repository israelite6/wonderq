import { Test, TestingModule } from '@nestjs/testing';
import { QueueController } from './queue.controller';
import { QueueService } from './queue.service';
import { DbService } from './db/db.service';

describe('AppController', () => {
  let appController: QueueController;
  let dbService: DbService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [QueueController],
      providers: [QueueService, DbService],
    }).compile();

    appController = app.get<QueueController>(QueueController);
    dbService = app.get<DbService>(DbService);
  });

  describe('Controller', () => {
    it('should return the id of the message', () => {
      expect(
        appController.publishMessages({ message: 'first message' }),
      ).toEqual({
        id: dbService.first().getId(),
      });
    });

    it('should return the array of all message', () => {
      appController.publishMessages({ message: 'first message' });
      const messages = appController.messages();
      expect(messages.length).toEqual(1);
      expect(messages[0].message).toEqual('first message');
      const firstMessage = dbService.first();
      expect(messages[0].id).toEqual(firstMessage.getId());
      expect(messages[0].timestamp).toEqual(firstMessage.getTimestamp());
    });

    it('consumer should return empty array when nothing is in the queue', () => {
      expect(appController.consume({ take: 1 })).toEqual([]);
    });

    it('consumer should return length of item selected', () => {
      appController.publishMessages({ message: 'first message' });
      appController.publishMessages({ message: 'second message' });
      appController.publishMessages({ message: 'third message' });
      const messages = appController.consume({ take: 2 });
      expect(messages.length).toEqual(2);

      //remaining items in the queue
      expect(dbService.db.length).toEqual(1);

      //the messages should be in the cache now
      expect(Object.keys(dbService.cache).length).toEqual(2);
    });

    it('Acknowledgement: the item should be removed from the cache', () => {
      appController.publishMessages({ message: 'first message' });
      appController.publishMessages({ message: 'second message' });
      appController.publishMessages({ message: 'third message' });
      const messages = appController.consume({ take: 2 });
      expect(messages.length).toEqual(2);

      appController.acknowledge({ id: messages[0].id });

      //remaining items in the queue
      expect(dbService.db.length).toEqual(1);
    });
  });
});
