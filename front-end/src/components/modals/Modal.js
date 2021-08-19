import React from "react";
import ReactDom from "react-dom";

export default function Modal({whichModal, setWhichModal, grad}){
  if(!whichModal) return null;


  return ReactDom.createPortal(
    <>
      <div className="overlay"/>
      <div className="modal">
        <div className="modal-btn-container">
          <button className="modal-btn" onClick={()=>setWhichModal("")}>X</button>
        </div>
      </div>
    </>,
    document.getElementById('modal')
  )
}