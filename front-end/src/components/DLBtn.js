import React from "react";


export default function DLBtn({text = "", clickHandler, classname = "", iconClassname = "", textClassname = "", icon = ">"}){
  return( 
    <div onClick={clickHandler} className={`btn ${classname}`}>
      <span className={`btn text ${textClassname}`}>{text}&nbsp;</span>
      <span className={`btn icon ${iconClassname}`}>{icon}</span>
    </div>
  )
}