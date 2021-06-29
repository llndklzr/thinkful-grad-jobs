import React from "react";
import {Link} from "react-router-dom";
import "../styles/styles.scss";

export default function Navbar(){
  return(
    <>
      <Link className="navbar nav-btn" to="/">Home</Link>
      <Link className="navbar nav-btn" to="/map">Map</Link>
      <Link className="navbar nav-btn" to="/stories">Stories</Link>
    </>
  )
}