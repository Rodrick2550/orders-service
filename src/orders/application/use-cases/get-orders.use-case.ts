import { OrderEntity } from "../../domian/entities/order.entity";
import { OrderInterface } from "../../domian/interfaces/order.interface";

export class GetOrdersUseCase {
    constructor(readonly repository: OrderInterface) { }

    async execute(): Promise<OrderEntity[] | null> {
        const orders = await this.repository.getAllOrders();

        if (!orders) {
            return null;
        }
        return orders;
    }
}
