import React, { useState } from "react";
import loginImg from "../assets/login.jpg";
import axios from 'axios'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  

  const[email,setEmail]=useState()
  const[password,setPassword]=useState()
  const handleLogin= async (e)=>{
    e.preventDefault()
    if(email && password){
    const adminData= {
      email:email,
      password:password
    }
    await axios.post("http://localhost:8000/login",adminData)
    .then(res =>{
      console.log(res);
      if(res.data === 'success'){
        console.log("valid");
      }
      else if(res.data === 'passwordIncorrect'){
     
        toast.error("Incorrect password")
      }
      else{
        toast.error("Invalid user name or password")
      }
    })
  }
  else{
    toast.warning("All fields are required!")
  }
  }
  return (
    <div
      className="container p-1 d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="login-card row border w-75 m-2 rounded-4">
        <div className="left-card col-md-6  p-2 d-flex justify-content-center align-items-center">
          <img src={loginImg} alt="" width={400} height={400} />
        </div>
        <div className="right-card col-md-5  p-2 d-flex justify-content-center align-items-center flex-column">
          <h3 className="text-center">LOGIN</h3>
          <div className="text-center sdiv">
            Enter a valid Email and Password
          </div>
          <form action="">
            <input
              type="email"
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
              placeholder="Email*"
              className="form-control  mb-4 mt-5 rounded-pill ps-4"
            />
            <input
              type="text"
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              placeholder="password*"
              className="form-control  mt-3 rounded-pill ps-4"
            />
            <button
              className="btn btn-primary col-6 mt-5 rounded-pill"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </div>
      </div>
      
      <ToastContainer 
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}
      />
    </div>
  );
};

export default Login;
