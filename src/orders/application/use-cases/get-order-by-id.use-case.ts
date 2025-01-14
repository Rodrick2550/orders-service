import { OrderEntity } from "../../domian/entities/order.entity";
import { OrderInterface } from "../../domian/interfaces/order.interface";
import signale from "signale";

export class GetOrderByIdUseCase {
    constructor(readonly repository: OrderInterface) { }

    async execute(id: string): Promise<OrderEntity | null> {
        const order = await this.repository.getOrderById(id);

        if (!order) {
            signale.error("Failed to get order by id");
            return null;
        }
        return order;
    }
}
