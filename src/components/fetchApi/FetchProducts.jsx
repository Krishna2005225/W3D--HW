import { useState, useEffect } from "react";

export default function FetchProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task 4: Fetch Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <div key={product.id} style={{ width: "200px", border: "1px solid #ccc", padding: "10px" }}>
            <img src={product.image} alt={product.title} style={{ width: "100%", height: "150px", objectFit: "contain" }} />
            <h4>{product.title.substring(0, 30)}...</h4>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
