import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Details</h2>
      <p>Product ID: {id}</p>
      <button onClick={() => navigate("/products")}>Back to Products</button>
    </div>
  );
}
