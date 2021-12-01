export interface EntityToJsonInterface {
  id: string;
  isProcessing: boolean;
  message: string;
  timestamp: string;
}

export interface EntityInterface {
  toJson(): EntityToJsonInterface;
  setIsProcessing(isProcessing: boolean): void;
  getIsProcessing(): boolean;
}
