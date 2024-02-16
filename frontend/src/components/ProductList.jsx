import React, { useEffect } from "react";
import Product from "./Product";

const ProductList = ({data,setData}) => {
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let result = await fetch("http://localhost:3000/products");
    result = await result.json();
    setData(result);
  };

  const deleteProduct = async (objectId) => {
    let result = await fetch(`http://localhost:3000/products/${objectId}`, {
      method: "delete",
    });
    result = await result.json();
    if (result) {
      alert("Product deleted");
      fetchData();
    }
  };
  
  return (
    <>
      <h2 className="PList-head">Product List</h2>
      <div className="card-container">
        {data.map((item, index) => {
          return (
            <Product
              key={item._id}
              deleteProduct={deleteProduct}
              objectId={item._id}
              name={item.name}
              price={item.price}
              category={item.category}
              company={item.company}
            />
          );
        })}
      </div>
    </>
  );
};
export default ProductList;
