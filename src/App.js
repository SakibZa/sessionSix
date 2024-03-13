import React from "react";
import "./App.css";
import { useState, useEffect, useCallback } from "react";

export default function App() {
  const [url, setUrl] = useState("http://localhost:8000/products");
  const [products, setProducts] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await fetch(url);
    const result = await response.json();

    setProducts(result);
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="App">
      <h1>All Products</h1>
      <button
        className="btn"
        onClick={() => setUrl("http://localhost:8000/products?in_stock=1")}
      >
        Available
      </button>
      <button
        className="btn"
        onClick={() => setUrl("http://localhost:8000/products")}
      >
        AllProducts
      </button>

      <div className="productContainer">
        {products &&
          products.map((item) => (
            <div className="product">
              <h4>{item.name}</h4>
              <div className="spanContainer">
                <span> {item.in_stock ? "Available" : "Unavailable"}</span>

                <span>Price : ${item.price}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
