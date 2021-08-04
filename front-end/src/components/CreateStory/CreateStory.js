import React, { useState } from "react";
import StoryFormPage1 from "./StoryFormPage1";
import StoryFormPage2 from "./StoryFormPage2";
import StoryFormPage3 from "./StoryFormPage3";

export default function CreateStory() {
  const initialFormData = {
    name: "",
    course: "",
    jobTitle: "",
    location: "",
    linkedInUrl: "",
    graduationDate: "",
    hireDate: "",
    storyAbstract: "",
  };

  const [formData, setFormData] = useState({});
  const [formPage, setFormPage] = useState(1);

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  return (
    <div className="create-story-wrapper">
      <h2 className="create-story-title">Create Story Page {formPage}</h2>
      <div className="create-story-breadcrumbs">
        <span
          className={formPage === 1 ? "dot dot-active" : "dot"}
          onClick={() => setFormPage(1)}
        ></span>
        <span
          className={formPage === 2 ? "dot dot-active" : "dot"}
          onClick={() => setFormPage(2)}
        ></span>
        <span
          className={formPage === 3 ? "dot dot-active" : "dot"}
          onClick={() => setFormPage(3)}
        ></span>
        <span
          className={formPage === 4 ? "dot dot-active" : "dot"}
          onClick={() => setFormPage(4)}
        ></span>
      </div>
      {formPage === 1 && (
        <div>
          <StoryFormPage1
            handleChange={handleChange}
            formData={formData}
            setFormPage={setFormPage}
          />
        </div>
      )}
      {formPage === 2 && (
        <div>
          <StoryFormPage2
            handleChange={handleChange}
            formData={formData}
            setFormPage={setFormPage}
          />
        </div>
      )}
      {formPage === 3 && (
        <div>
          <StoryFormPage3
            handleChange={handleChange}
            formData={formData}
            setFormPage={setFormPage}
          />
        </div>
      )}
    </div>
  );
}
