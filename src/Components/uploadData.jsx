import { useState } from "react";
import axios from "axios";

export default function UploadData() {
  const [data, setData] = useState({
    name: "",
    quantity: "",
    price: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  function submitHandler(e) {
    e.preventDefault();

    const userData = {
      name: data.name,
      quantity: data.quantity,
      price: data.price,
    };

    axios
      .post("http://localhost:3000/api/products", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Response data:", response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log("Error Response:", error.response.data);
          console.log("Status Code:", error.response.status);
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.log("Error message:", error.message);
        }
      });
  }

  return (
    <>
      <form onSubmit={submitHandler} className="uploadDataForm">
        <label>
          Enter Product name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <label>
          Enter Product quantity:
          <input type="number" name="quantity" onChange={handleChange} />
        </label>
        <label>
          Enter Product Price:
          <input type="number" name="price" onChange={handleChange} />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
