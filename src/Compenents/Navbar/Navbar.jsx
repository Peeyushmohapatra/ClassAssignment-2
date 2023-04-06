import React, { useContext } from "react";
import Home from "../Home/Home";
import { Global } from "../store";

const Navbar = () => {
  const {name}  = useContext(Global);
  const {setValid} = useContext(Global);
  const style = {
    width: "100%",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    padding: "0 50px",
    justifyContent: "space-around",
    height:"60px",
    alignItems:"center"
  };

  const style2 = {
    width: "50%",
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems:"center"

  };


  return (
    <div style={style}>
      Navbar
      <div style={style2}>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <button onClick={() => setValid(false)}>Logout</button>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Navbar;
