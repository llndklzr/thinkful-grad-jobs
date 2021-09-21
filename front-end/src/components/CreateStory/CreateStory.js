import React, { useState } from "react";
import StoryFormPage1 from "./StoryFormPage1";
import StoryFormPage2 from "./StoryFormPage2";
import StoryFormPage3 from "./StoryFormPage3";
import StoryFormPage4 from "./StoryFormPage4";
import DLBtn from "../DLBtn";

export default function CreateStory() {
  const initialFormData = {
    name: "",
    course: "",
    jobTitle: "",
    storyDetails: {
      Location: {
        willingToRelocate: "",
        typeOfWork: "",
        blurb: "",
      },
      "Transfered Skills": {
        blurb: "",
      },
      Networking: {
        blurb: "",
        hiredByNetworking: "",
      },
      "Coaching/Mentorship": {
        blurb: "",
        hiredAtMentorsCompany: "",
      },
      Interviewing: {
        numberOfInterviews: 0,
        numberOfApps: 0,
        blurb: "",
      },
    },
    linkedInUrl: "",
    graduationDate: "",
    hireDate: "",
    storyAbstract: "",
    enabled: [],
    disabled: [
      "Coaching/Mentoring",
      "Location",
      "Networking",
      "Transferred Skills",
      "Interviewing",
    ],
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formPage, setFormPage] = useState(1);

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormPage((prev) => prev + 1);
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
        <>
          <div className="story-form-1-wrapper">
            <StoryFormPage1
              handleChange={handleChange}
              formData={formData}
              setFormPage={setFormPage}
            />
          </div>
          <div className="btn-wrapper bottom right">
            <DLBtn text="Next" clickHandler={handleSubmit}/>
          </div>
        </>
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
            setFormData={setFormData}
            setFormPage={setFormPage}
          />
        </div>
      )}
      {formPage === 4 && (
        <div>
          <StoryFormPage4
            handleChange={handleChange}
            formData={formData}
            setFormPage={setFormPage}
          />
        </div>
      )}
    </div>
  );
}
