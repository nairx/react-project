import React from "react";
import { useEffect, useState, useContext } from "react";
import { AppContext } from "../App";
import axios from "axios";
import "./Home.css";
export default function Home() {
  const [products, setProducts] = useState([]);
  const API = import.meta.env.VITE_API_URL;
  const { cart, setCart } = useContext(AppContext);
  const fetchProducts = async () => {
    const res = await axios.get(`${API}/products`);
    console.log(res.data);
    // setProducts(res.data.products);
    setProducts(res.data);
  };

  const addToCart = (product) => {
    const found = cart.find((item) => item.id === product.id);
    if (!found) {
      product.quantity = 1;
      setCart([...cart, product]);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="row">
      {products &&
        products.map((product) => (
          <div key={product.id}>
            <img src={product.imageUrl} width={300} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <h4>{product.price}</h4>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
    </div>
  );
}
