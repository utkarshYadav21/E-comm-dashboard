import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import PrivateComponent from "./components/PrivateComponent";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import UpdateProduct from "./components/UpdateProduct";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Nav setData={setData} />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<ProductList data={data} setData={setData} />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update/:id" element={<UpdateProduct />} />
            <Route path="/profile" element={<h1>profile component</h1>} />
            <Route path="/logout" element={<h1>logout component</h1>} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
