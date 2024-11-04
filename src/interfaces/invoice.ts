export interface BaseInvoiceResponse {
  id: string;
  peopleAmount: number;
  totalPrice: number;
  isPaid: boolean;
  tableId?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface InvoiceDetail extends BaseInvoiceResponse {}

export interface UpdateInvoiceStatusRequest {
  invoice_id: string;
}

export interface CancelInvoice{
  invoice_id: string;
}