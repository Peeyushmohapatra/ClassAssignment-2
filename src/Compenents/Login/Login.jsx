import React, { useContext, useState } from "react";
import Home from "../Home/Home";
import { Global } from "../store";

const Login = () => {

  
  const {setValid,setName} = useContext(Global);
  const style = {
    height:"50%",
    width:"50%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    margin:"20px auto",
    alignItems:"center",
    boxShadow:"0 0 10px black",
  }

  const [loginData, setLoginData] = useState({
    name:"",
    password:"",
  });

console.log(setValid);
  const validateFn = () => {
    if(loginData.name === "Peeyush" && loginData.password === "peeyush@123" || loginData.name === "Admin" && loginData.password === "admin@123"){

      console.log(loginData.name,loginData.password);
      setValid(true)
    }else{
      setValid(false);
      alert("Invalid Details !!!")
    }
  }
 
  return (
    <div style={style}>
      <h3>Login</h3>
      <label>UserName</label>
      <input onChange={(e) => {
        setLoginData({...loginData,name:e.target.value})
      }} type="text" placeholder="Admin" />
      <label>Password</label>
      <input onChange={(e) => {
        setLoginData({...loginData,password:e.target.value})
      }} type="password" placeholder="admin@123" />
      <button onClick={() => {
        setName(loginData.name)
        validateFn()
      }}>Submit Button</button>
    </div>
  );
};

export default Login;
