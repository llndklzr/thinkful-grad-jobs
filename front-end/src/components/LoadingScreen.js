import React from "react";
import "../styles/styles.scss";

export default function LoadingScreen({classname}){
  return <h2 className={`loading ${classname}`}>Loading...</h2>;
}