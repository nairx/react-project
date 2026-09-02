import React from "react";
import { AppContext } from "../App";
import { useContext } from "react";
export default function Cart() {
  const { cart, setCart, currUser } = useContext(AppContext);
  const increment = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };
  const orderValue = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const decrement = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };
  return (
    <div>
      <h2>My Cart</h2>
      <ol>
        {cart &&
          cart.map((item) => (
            <li>
              {item.name}-{item.price}-
              <button onClick={() => decrement(item.id)}>-</button>
              {item.quantity}
              <button onClick={() => increment(item.id)}>+</button>-
              {item.price * item.quantity}
            </li>
          ))}
      </ol>
      <p>Order Value:{orderValue}</p>
    </div>
  );
}
