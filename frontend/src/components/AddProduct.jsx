import React, { useState } from "react";

const AddProduct = () => {
  const [ProductName, setProductName] = useState("");
  const [Price, setPrice] = useState("");
  const [Category, setCategory] = useState("");
  const [Company, setCompany] = useState("");
  const [error, setError] = useState(false);
  const auth = localStorage.getItem("user");
  const addproduct = async () => {
    if (!ProductName || !Category || !Price || !Company) {
      setError(true);
      return false;
    }
    let result = await fetch("http://localhost:3000/add-product", {
      method: "post",
      body: JSON.stringify({
        name: ProductName,
        price: Price,
        category: Category,
        company: Company,
        userId: JSON.parse(auth)._id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    setProductName("");
    setPrice("");
    setCategory("");
    setCompany("");
  };
  return (
    <div style={{ marginLeft: "38.5%" }}>
      <h1>Add Product</h1>
      <input
        className="inputBox"
        type="text"
        value={ProductName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Enter Product Name"
      />
      {error && !ProductName && (
        <span className="invalid-input">Enter valid name</span>
      )}
      <input
        className="inputBox"
        type="text"
        value={Price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter Price"
      />
      {error && !Price && (
        <span className="invalid-input">Enter valid Price</span>
      )}
      <input
        className="inputBox"
        type="text"
        value={Category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter Category"
      />
      {error && !Category && (
        <span className="invalid-input">Enter valid category</span>
      )}
      <input
        className="inputBox"
        type="text"
        value={Company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Enter Company Name"
      />
      {error && !Company && (
        <span className="invalid-input">Enter valid company</span>
      )}
      
      <button onClick={addproduct} type="button" className="addProduct-btn">
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
