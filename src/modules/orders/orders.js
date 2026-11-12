import { users } from "../users/users.js";

const orders = [
  { id: 101, userId: 1, item: "Notebook" },
  { id: 102, userId: 2, item: "Pencil" },
];

export function findOrdersByUserId(userId) {
  return orders.filter((order) => order.userId === userId);
}

export function listOrders() {
  return orders.map((order) => {
    const user = users.find((item) => item.id === order.userId);

    return {
      id: order.id,
      item: order.item,
      userName: user ? user.name : "Unknown",
    };
  });
}
