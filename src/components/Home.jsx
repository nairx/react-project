import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css"
export default function Home() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:8081/api/products");
    console.log(res.data)
    setProducts(res.data.products);
  };

  useEffect(() => {
    fetchProducts()
}, [])

  return (
    <div className="row">
      {products &&
        products.map((product) => (
          <div>
            <img src={product.imageUrl} width={300} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <h4>{product.price}</h4>
            <button>Add to Cart</button>
          </div>
        ))}
    </div>
  );
}
