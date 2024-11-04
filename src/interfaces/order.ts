export interface OrderItemResponse{
    id: string,
    orderID: string,
    menuID: string,
    quantity: number,
}

export interface OrderResponse {
    id: string,
    tableId: string,
    orderItem: OrderItemResponse[],
    status: OrderStatus,
    createAt: Date,
    updateAt: Date
}

export interface OrderItemRequest {
    menu_id: string;
    quantity: number;
}

export interface OrderRequest {
    order_item: OrderItemRequest[];
}

export interface UpdateOrderRequest{
    status: string;
    table_id: string;
}

export enum OrderStatus {
    Preparing = "preparing",
    Served = "served",
}