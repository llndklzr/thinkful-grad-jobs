import {useState} from "react";
import Modal from "../modals/Modal";
import SingleGradHTML from "../singleGrad/SingleGradHTML";

export default function StoryFormPage5({formData, setFormPage}){
  const [whichModal, setWhichModal] = useState("");
  return (
    <>
      <SingleGradHTML setWhichModal={setWhichModal} whichModal={whichModal} grad={formData} createMode={false} setFormPage={setFormPage}/> 
      <Modal whichModal={whichModal} setWhichModal={setWhichModal} grad={formData}/>
    </>
  )
}