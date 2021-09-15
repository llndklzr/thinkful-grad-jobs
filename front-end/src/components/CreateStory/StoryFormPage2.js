import React from "react";
import DLBtn from "../DLBtn";

export default function StoryFormPage2({ setFormPage }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormPage((prev) => prev + 1);
  };

  const goBack = (e) =>{
    e.preventDefault();
    setFormPage((prev) => prev - 1);
  }
  return (
    <div className="form-group">
      <p>
        Add links to your Hiring Essentials so fellow grads can see what worked
        for you.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-grid-container">
          <div className="form-grid-item grid-item-full-width">
            <label className="form-label" htmlFor="resume">
              My Resume
            </label>
            <input
              className="form-control"
              type="file"
              id="resume"
              name="resume"
              accept=".pdf"
            />
          </div>
          <div className="form-grid-item grid-item-full-width">
            <label className="form-label" htmlFor="coverLetter">
              My Cover Letter
            </label>
            <input
              className="form-control"
              type="file"
              id="coverLetter"
              name="coverLetter"
              accept=".pdf"
            />
          </div>
          <div className="form-grid-item grid-item-full-width">
            <label className="form-label" htmlFor="portfolioUrl">
              My Portfolio/Projects
            </label>
            <input
              className="form-control"
              type="url"
              id="portfolioUrl"
              name="portfolioUrl"
            />
          </div>
        </div>
        <div className="btn-wrapper split bottom">
          <DLBtn text="Edit" clickHandler={goBack} classname="flip-icon" icon="<"/>
          <DLBtn text="Next" clickHandler={handleSubmit}/>
        </div>
      </form>
    </div>
  );
}
