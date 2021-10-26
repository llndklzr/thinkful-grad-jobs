import React from "react";

export default function StoryFormPage2({ formData, handleChange }) {

  return (
    <div className="form-group">
      <p>
        Add links to your Hiring Essentials so fellow grads can see what worked
        for you.
      </p>
      <form onSubmit={handleChange}>
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
              value={formData.portfolioUrl || ""}
              type="url"
              id="portfolioUrl"
              name="portfolioUrl"
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
