import { useState } from "react";

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mobile" },
  { id: 3, name: "Keyboard" },
];

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task 5: Shopping Cart</h2>
      <div>
        {products.map((product) => (
          <button key={product.id} onClick={() => addToCart(product)} style={{ margin: "5px" }}>
            Add {product.name}
          </button>
        ))}
      </div>
      <h3>Total Items: {cart.length}</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
