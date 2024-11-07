import { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products") // Replace with your actual API endpoint
      .then((response) => {
        setProducts(response.data); // Assuming the response is an array of products
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <strong>Name:</strong> {product.name}
            <br />
            <strong>Price:</strong> {product.price}
            <br />
            <strong>Quantity:</strong> {product.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
