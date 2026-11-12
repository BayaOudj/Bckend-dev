import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";
import { findUserById } from "./modules/users/users.js";
import { findOrdersByUserId } from "./modules/orders/orders.js";

const prompt = createInterface({ input: stdin, output: stdout });

try {
  const answer = await prompt.question("Enter a user number: ");
  const userId = Number(answer);

  if (!Number.isSafeInteger(userId) || userId < 1) {
    console.log("Please enter a positive whole number.");
  } else {
    const user = findUserById(userId);

    if (!user) {
      console.log(`No user found with number ${userId}.`);
    } else {
      console.log(`\nUser: ${user.name}`);
      const orders = findOrdersByUserId(userId);

      if (orders.length === 0) {
        console.log("No orders found for this user.");
      } else {
        console.log("Orders:");
        for (const order of orders) {
          console.log(`- ${order.id}: ${order.item}`);
        }
      }
    }
  }
} finally {
  prompt.close();
}
