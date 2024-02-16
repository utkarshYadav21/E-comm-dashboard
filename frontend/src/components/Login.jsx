import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) navigate("/");
  });
  const submitLogin= async()=>{
    let result=await fetch("http://localhost:3000/login",{
        method:"post",
        body:JSON.stringify({email,password}),
        headers:{
            'Content-Type':'application/json'
        }
    })
    result=await result.json()
    if(result.auth){
        localStorage.setItem('user',JSON.stringify(result.user));
        localStorage.setItem('token',JSON.stringify(result.auth))
        navigate('/')
    }else{
        console.log(result)
    }
  }
  return (
    <div style={{ marginLeft: "38.5%" }}>
      <h1>Login</h1>
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
      <button onClick={submitLogin} type="button" className="Login-btn">
       Login
      </button>
    </div>
  );
};

export default Login;
