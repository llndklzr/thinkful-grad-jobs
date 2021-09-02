import React from "react";


export default function DLBtn({text = "", clickHandler, classname = "", iconClassname = "", textClassname = "", icon = ">"}){

  function handleHTMLForText(string){
    if(string){
      return <span className={`btn text ${textClassname}`}>{text}&nbsp;</span>;
    } 
  }
  
  return( 
    <div onClick={clickHandler} className={`btn ${classname}`}>
      {handleHTMLForText(text)}
      <span className={`btn icon ${iconClassname}`}>{icon}</span>
    </div>
  )
}