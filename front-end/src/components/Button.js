import React from "react";


export default function Button({text, clickHandler, className}){
  return( 
    <div onClick={clickHandler} className={`btn ${className}`}>
      {text} <span className="icon">&gt;</span>
    </div>
  )
}