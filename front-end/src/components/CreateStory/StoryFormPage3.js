import React from "react";
import DragNDrop from "./DragNDrop";

export default function StoryFormPage3({ setFormPage }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormPage((prev) => prev + 1);
  };

  const aspects = [
    {
      title: "",
      items: [
        "Coaching/Mentoring",
        "Location",
        "Networking",
        "Transferred Skills",
        "Interviewing",
      ],
    },
    { title: "most to least important (top to bottom)", items: [] },
  ];

  return (
    <div className="form-group">
      <p>
        The tabs below represent aspects of your story. Move the tabs from left
        to right of the aspects you feel were critical to your hiring. Arrange
        the tabs in order of importance (top to bottom); you don't have to use
        all the tabs.
      </p>
      <DragNDrop data={aspects} />
      <button className="form-button" onClick={handleSubmit}>next ></button>
    </div>
  );
}
