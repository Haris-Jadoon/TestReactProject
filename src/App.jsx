import { useState } from "react";
import "./App.css";
import UploadData from "./Components/uploadData";
import ProductList from "./Components/getData";
function App() {
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount(count + 1);
  }
  return (
    <>
      <button onClick={increaseCount}> Click me to Increase count </button>
      <h2 className="count">{count}</h2>
      <UploadData />
      <ProductList />
    </>
  );
}

export default App;
