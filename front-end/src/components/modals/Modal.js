import React from "react";
import ReactDom from "react-dom";
import FullStoryModal from "./FullStoryModal";

export default function Modal({whichModal, setWhichModal, grad}){
  if(!whichModal) return null;


  return ReactDom.createPortal(
    <>
      <div className="modal">
        <div className="modal-btn-container">
          <button className="close-btn" onClick={()=>setWhichModal("")}>x</button>
        </div>
        {whichModal === "fullStory" ? <FullStoryModal grad={grad}/> : null}
      </div>
    </>,
    document.getElementById('modal')
  )
}