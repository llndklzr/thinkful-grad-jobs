import React from "react";
import {Link} from "react-router-dom";
import "../styles/styles.scss"


export default function Button(){
  return <button className="btn"><Link to={"/map"}>Map</Link></button>;
}