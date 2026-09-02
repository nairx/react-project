import React from "react";
import { AppContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  const { cart, setCart, currUser } = useContext(AppContext);
  const navigate = useNavigate();
  const increment = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };
  const orderValue =
    cart.length > 0 &&
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const decrement = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const placeOrder = () => {
    if (currUser?.email) {
      setCart({});
      navigate("/order");
    } else {
      navigate("/login");
    }
    console.log(currUser);
  };
  return (
    <div>
      <h2>My Cart</h2>

      {cart.length > 0 ? (
        <div>
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
          <p>
            <button onClick={placeOrder}>Place Order</button>
          </p>
        </div>
      ) : (
        <h3>You cart is empty</h3>
      )}
    </div>
  );
}
