import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) navigate("/");
  });
  const submitSignUp = async () => {
    let result = await fetch("http://localhost:3000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result.name);
    localStorage.setItem("user", JSON.stringify(result.result));
    localStorage.setItem('token',JSON.stringify(result.auth))
    navigate("/");
  };
  return (
    <div style={{ marginLeft: "38.5%" }}>
      <h1>Register</h1>
      <input
        className="inputBox"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      <input
        className="inputBox"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />
      <input
        className="inputBox"
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <button onClick={submitSignUp} type="button" className="signup-btn">
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
