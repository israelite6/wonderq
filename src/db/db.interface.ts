export interface InsertMessageInterface {
  id: string;
}
export interface DbInterface {
  insert(message: string): InsertMessageInterface;
}
