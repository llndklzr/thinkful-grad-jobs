import React from "react";
import ReactDom from "react-dom";
import LocationModal from "./LocationModal";
import { BsX } from "react-icons/bs";

export default function Modal({ whichModal, setWhichModal, grad }) {
  if (!whichModal) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="modal">
        <button className="modal-btn" onClick={() => setWhichModal("")}>
          <BsX />
        </button>
        {whichModal === "location" ? <LocationModal grad={grad} /> : null}
      </div>
    </>,
    document.getElementById("modal")
  );
}
