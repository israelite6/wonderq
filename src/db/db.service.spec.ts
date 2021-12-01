import { Test, TestingModule } from '@nestjs/testing';
import { DbService } from './db.service';

describe('DbService', () => {
  let service: DbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbService],
    }).compile();

    service = module.get<DbService>(DbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should inset message and return the message', () => {
    expect(service.insert('message').getMessage()).toEqual('message');
  });
  it('should inset message and return number of messages in the db property', () => {
    service.insert('first message');
    expect(service.db.length).toEqual(1);
    service.insert('second message');
    expect(service.db.length).toEqual(2);
  });

  it('should pick the fist in the queue', () => {
    service.insert('first message');
    service.insert('another message');

    expect(service.first().getMessage()).toEqual('first message');
  });

  it('should pick the second in the queue', () => {
    service.insert('first message');
    service.insert('second message');
    service.first();

    expect(service.first().getMessage()).toEqual('second message');
  });
  it('should add message to the cache and get the count', () => {
    service.insert('first message');
    service.insert('second message');
    service.first();
    expect(Object.keys(service.cache).length).toEqual(1);
  });

  it('should acknowledge and empty cache', () => {
    service.insert('first message');
    service.insert('second message');
    const id = service.first().getId();
    service.deleteCache(id);
    expect(Object.keys(service.cache).length).toEqual(0);
  });
});
