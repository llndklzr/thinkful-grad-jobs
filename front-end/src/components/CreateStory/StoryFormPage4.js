import { useState } from "react";
import Modal from "../modals/Modal";
import DLBtn from "../DLBtn";

export default function StoryFormPage4({ formData, setFormPage }) {
  const [whichModal, setWhichModal] = useState(null);

  const handleModalOpen = ({ target }) => {
    setWhichModal(target.innerText.toLowerCase());
  };

  const goBack = (e) =>{
    e.preventDefault();
    setFormPage((prev) => prev - 1);
  }

  return (
    <div className="form-group">
      <p>Click each tab to go in depth on that detail of your hiring.</p>
      {formData.enabled.map((element, index) => {
        return (
          <div className="story-aspect-wrapper" key={index}>
            <p className="story-aspect" onClick={handleModalOpen}>
              {element}
            </p>
          </div>
        );
      })}
      {whichModal && (
        <Modal
          whichModal={whichModal}
          setWhichModal={setWhichModal}
          grad={formData}
        />
      )}
      {/* <div className="btn-wrapper split">
        <DLBtn text="Edit" clickHandler={goBack} classname="flip-icon" icon="<"/>
        <DLBtn text="Next" />
      </div> */}
    </div>
  );
}
