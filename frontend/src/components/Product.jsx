import React from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import UpdateProduct from "./UpdateProduct";

const Product = ({
  name,
  price,
  category,
  company,
  objectId,
  deleteProduct
}) => {
  const auth = localStorage.getItem("user");
  const userId = JSON.parse(auth)._id;

  return (
    <div className="card">
      <p className="card-content">Name: {name}</p>
      <p className="card-content">Brand: {company}</p>
      <p className="card-content">Price: {price}</p>
      <p className="card-content">Category: {category}</p>
      <div className="btn-div">
        <button
          className="delete-update-btn"
          onClick={() => deleteProduct(objectId)}
        >
          Delete
        </button>
        <button className="delete-update-btn">
          <Link to={`/update/${objectId}`} className="update-link">Update</Link>
        </button>
      </div>
    </div>
  );
};

export default Product;
