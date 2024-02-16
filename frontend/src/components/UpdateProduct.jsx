import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [ProductName, setProductName] = useState("");
  const [Price, setPrice] = useState("");
  const [Category, setCategory] = useState("");
  const [Company, setCompany] = useState("");
  const params = useParams();
  const navigate=useNavigate();

  useEffect(() => {
    findProd();
  }, []);
  const findProd = async () => {
    let result = await fetch(`http://localhost:3000/products/${params.id}`, {
      method: "get",
    });
    result = await result.json();
    setProductName(result.name);
    setPrice(result.price);
    setCompany(result.company);
    setCategory(result.category);
  };
  const productUpdate = async () => {
    let result = await fetch(`http://localhost:3000/products/${params.id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: ProductName,
        price: Price,
        category: Category,
        company: Company,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if(result) navigate('/')
    
  };
  return (
    <>
      <div style={{ marginLeft: "38.5%" }}>
        <h1>Update Product</h1>
        <input
          className="inputBox"
          type="text"
          placeholder="Enter Product Name"
          value={ProductName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          className="inputBox"
          type="text"
          placeholder="Enter Price"
          value={Price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className="inputBox"
          type="text"
          placeholder="Enter Category"
          value={Category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          className="inputBox"
          type="text"
          placeholder="Enter Company Name"
          value={Company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <button
          type="button"
          className="addProduct-btn"
          onClick={productUpdate}
        >
          Update Product
        </button>
      </div>
    </>
  );
};

export default UpdateProduct;
