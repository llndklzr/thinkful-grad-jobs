import React, { useState } from "react";
import StoryFormPage1 from "./StoryFormPage1";
import StoryFormPage2 from "./StoryFormPage2";
import StoryFormPage3 from "./StoryFormPage3";
import StoryFormPage4 from "./StoryFormPage4";
import SingleGradDisplay from "../singleGrad/SingleGradDisplay";
import StoryBreadCrumbs from "./StoryBreadCrumbs";
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
    story: "",
    enabled: [],
    disabled: [
      "Coaching/Mentorship",
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

  const goBack = (e) =>{
    e.preventDefault();
    setFormPage((prev) => prev - 1);
  }

  const handleSubmitForDragDrop = (e) => {
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

  return (
    <div className="create-story-wrapper">
      {formPage < 5 ?
        <div className="create-stroy-title-wrapper">
         <span className="create-story-title">Create Story</span>
          {formPage === 1 ? null : <span>&nbsp; &#40;Cont.&#41;</span>}
        </div>
      : null}
      <StoryBreadCrumbs formPage={formPage} setFormPage={setFormPage}/>
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
        <>
          <div>
            <StoryFormPage2
              handleChange={handleChange}
              formData={formData}
              setFormPage={setFormPage}
            />
          </div>
          <div className="btn-wrapper bottom split">
            <DLBtn text="Edit" icon="<" classname="flip-icon" clickHandler={goBack} />
            <DLBtn text="Next" clickHandler={handleSubmit}/>
          </div>
        </>
      )}
      {formPage === 3 && (
        <>
          <div>
            <StoryFormPage3
              handleChange={handleChange}
              formData={formData}
              setFormData={setFormData}
              setFormPage={setFormPage}
              setList={setList}
              list={list}
            />
          </div>
          <div className="btn-wrapper bottom split">
            <DLBtn text="Edit" icon="<" classname="flip-icon" clickHandler={goBack} />
            <DLBtn text="Next" clickHandler={handleSubmitForDragDrop}/>
          </div>
        </>
      )}
      {formPage === 4 && (
        <>
          <div>
            <StoryFormPage4
              handleChange={handleChange}
              formData={formData}
              setFormPage={setFormPage}
              setFormData={setFormData}
            />
          </div>
          <div className="btn-wrapper bottom split">
            <DLBtn text="Edit" icon="<" classname="flip-icon" clickHandler={goBack} />
            <DLBtn text="Next" clickHandler={handleSubmit}/>
          </div>
        </>
      )}
      {formPage === 5 && (
        <>
          <div>
            <SingleGradDisplay formData={formData}/>
          </div>
          <div className="btn-wrapper bottom">
            <DLBtn text="Publish this story?" clickHandler={handleSubmit}/>
          </div>
        </>
      )}
    </div>
  );
}
