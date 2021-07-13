import React from "react";
import {Link} from "react-router-dom";
import "../styles/styles.scss";

export default function Navbar(){
  return(
    <>
      <Link className="navbar nav-btn" to="/">Home</Link>
      <Link className="navbar nav-btn" to="/map">Map</Link>
      <Link className="navbar nav-btn" to="/stories">View Stories</Link>
      <Link className="navbar nav-btn" to="/new-story">Create Story</Link>
      <Link className="navbar nav-btn" to="/drag-n-drop">Drag N Drop Demo</Link>
    </>
  )
}