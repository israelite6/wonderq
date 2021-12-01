import { Entity } from './entity';

describe('Entity', () => {
  it('should be defined', () => {
    expect(new Entity('message')).toBeDefined();
  });
});
