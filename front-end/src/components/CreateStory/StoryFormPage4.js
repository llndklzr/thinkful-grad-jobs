import { useState } from "react";
import Modal from "../modals/Modal";
export default function StoryFormPage4({ formData }) {
  const [whichModal, setWhichModal] = useState(null);

  const handleModalOpen = ({ target }) => {
    setWhichModal(target.innerText.toLowerCase());
  };

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
    </div>
  );
}
