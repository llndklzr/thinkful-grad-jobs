import { useState } from "react";
import Modal from "../modals/Modal";

export default function StoryFormPage4({ formData, setFormData }) {
  const [whichModal, setWhichModal] = useState(null);
  const handleModalOpen = ({ target }) => {
    setWhichModal(target.innerText.toLowerCase());
  };


  return (
    <div className="form-group">
      <p>Click each tab to go in depth on that detail of your hiring.</p>
      <div className="enabled-item-group">
      {formData.enabled.map((element, index) => {
        return (
          <div className="enabled-item" key={index} onClick={handleModalOpen}>
            {element}
          </div>
        );
      })}
      </div>
      {whichModal && (
        <Modal
          whichModal={whichModal}
          setWhichModal={setWhichModal}
          grad={formData}
          createMode={true}
          setFormData={setFormData}
          setWhichModal={setWhichModal}
        />
      )}
    </div>
  );
}
