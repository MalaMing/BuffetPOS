export interface OrderItemResponse{
    id: string,
    orderId: string,
    menuId: string,
    quantity: number,
}

export interface OrderResponse {
    id: string,
    tableId: string,
    orderItem: OrderItemResponse[],
    status: string,
    createAt: Date,
    updateAt: Date
}
