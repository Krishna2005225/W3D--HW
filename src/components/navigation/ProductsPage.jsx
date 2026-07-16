import { Link } from "react-router-dom";

export default function ProductsPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Products Page</h2>
      <nav>
        <Link to="/product/1">Product 1</Link> |{" "}
        <Link to="/product/2">Product 2</Link> |{" "}
        <Link to="/product/3">Product 3</Link>
      </nav>
    </div>
  );
}
