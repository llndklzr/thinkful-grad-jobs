import { useState } from "react";
import DragNDrop from "./DragNDrop";
import DLBtn from "../DLBtn";

export default function StoryFormPage3({ setFormPage, formData, setFormData }) {
  const initialList = [
    {
      title: "",
      items: formData.disabled,
    },
    {
      title: "most to least important (top to bottom)",
      items: formData.enabled,
    },
  ];
  const [list, setList] = useState(initialList);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newDisabled = list[0].items;
    const newEnabled = list[1].items;
    setFormData({
      ...formData,
      enabled: newEnabled,
      disabled: newDisabled,
    });
    console.log(formData);
    setFormPage((prev) => prev + 1);
  };
  const goBack = (e) =>{
    e.preventDefault();
    setFormPage((prev) => prev - 1);
  }

  return (
    <div className="form-group">
      <p>
        The tabs below represent aspects of your story. Move the tabs from left
        to right of the aspects you feel were critical to your hiring. Arrange
        the tabs in order of importance (top to bottom); you don't have to use
        all the tabs.
      </p>
      <DragNDrop list={list} setList={setList} />
      <div className="btn-wrapper split bottom">
        <DLBtn text="Edit" clickHandler={goBack} classname="flip-icon" icon="<"/>
        <DLBtn text="Next" clickHandler={handleSubmit}/>
      </div>
    </div>
  );
}
