export interface AddTableRequest {
    tableName: string; // required
}
  

export interface BaseTableResponse {
  id: string;
  tableName: string;
  isAvailable: boolean;
  qrCode?: string;
  accessCode?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type TableDetailResponse = Omit<BaseTableResponse, 'createdAt' | 'updatedAt'>;
