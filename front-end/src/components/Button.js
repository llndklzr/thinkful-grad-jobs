import React from "react";
import {Link} from "react-router-dom";
import "../styles/styles.scss"

// used to test can be destroyed later
export default function Button(){
  return <button className="btn"><Link to={"/map"}>Map</Link></button>;
}