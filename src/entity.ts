import {
  EntityInterface,
  EntityToJsonInterface,
} from './interface/entity.interface';

export class Entity implements EntityInterface {
  id: string;
  message: string;
  isProcessing = false as boolean;
  timestamp: string;
  processingStartAt: number;

  constructor(message) {
    this.message = message;
    this.id = String(new Date().getTime() + Math.floor(Math.random() * 1000));
    this.timestamp = String(new Date().getTime());
  }

  getId(): string {
    return this.id;
  }
  getMessage(): string {
    return this.message;
  }
  getTimestamp(): string {
    return this.timestamp;
  }
  setIsProcessing(isProcessing: boolean): void {
    this.isProcessing = isProcessing;
    if (isProcessing) {
      this.processingStartAt = new Date().getTime();
    }
  }
  getIsProcessing() {
    return this.isProcessing;
  }
  getProcessingStartAt(): number {
    return this.processingStartAt;
  }
  toJson(): EntityToJsonInterface {
    return {
      id: this.id,
      message: this.message,
      timestamp: this.timestamp,
      isProcessing: this.isProcessing,
    };
  }
}
