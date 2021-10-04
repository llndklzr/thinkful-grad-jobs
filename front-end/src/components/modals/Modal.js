import React from "react";
import ReactDom from "react-dom";
import LocationModal from "./LocationModal";
import NetworkingModal from "./NetworkingModal";
import CoachingModal from "./CoachingModal";
import { BsX } from "react-icons/bs";

export default function Modal({ whichModal, setWhichModal, grad, createMode, setFormData }) {
  if (!whichModal) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="modal">
        <button className="modal-btn" onClick={() => setWhichModal("")}>
          <BsX />
        </button>
        {whichModal === "location" ? <LocationModal grad={grad} createMode={createMode} setFormData={setFormData} setWhichModal={setWhichModal}/> : null}
        {whichModal === "networking" ? <NetworkingModal grad={grad}/> : null}
        {whichModal === "coaching/mentorship" ? <CoachingModal grad={grad}/> : null}
      </div>
    </>,
    document.getElementById("modal")
  );
}
