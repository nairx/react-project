import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Products() {
  const [products, setProducts] = useState();
  const [product, setProduct] = useState({});
  const API = import.meta.env.VITE_API_URL;
  const fetchProducts = async () => {
    const res = await axios.get(`${API}/products`);
    setProducts(res.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAdd = async () => {
    const res = await axios.post(`${API}/products`, product);
    fetchProducts();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API}/products/delete/${id}`);
    fetchProducts();
  };
  return (
    <div>
      Products
      <p>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Price"
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          onChange={(e) => setProduct({ ...product, imageUrl: e.target.value })}
        />
        <button onClick={handleAdd}>Add</button>
      </p>
      <ol>
        {products &&
          products.map((product) => (
            <li key={product.id}>
              {product.name}-{product.description}-{product.price}-
              <button onClick={() => handleDelete(product.id)}>Delete</button>
            </li>
          ))}
      </ol>
    </div>
  );
}
