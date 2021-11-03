import React, {useState} from "react";
import { BsPlusCircle } from "react-icons/bs";

export default function StoryFormPage2({ formData, handleChange }){

  const [resumeFile, setResumeFile] = useState({});
  const [coverLetterFile, setCoverLetterFile] = useState({});
  // const handleFiles = (e) => {
  //   console.log(e.target.files[0])
  //   setFiles(e.target.files);
  // }

  console.log("RESUME", resumeFile)
  console.log("COVER LETTER", coverLetterFile)

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
              className="file-form-control"
              type="file"
              id="resume"
              name="resume"
              accept=".pdf"
              onChange={(e)=>{setResumeFile(e.target.files[0])}}
            />
          </div>
          <div className="form-grid-item grid-item-full-width">
            <label className="form-label" htmlFor="coverLetter">
              My Cover Letter
            </label>
            <input
              className="file-form-control"
              type="file"
              id="coverLetter"
              name="coverLetter"
              accept=".pdf"
              onChange={(e)=>{setCoverLetterFile(e.target.files[0])}}
            />
          </div>
          <div className="form-grid-item grid-item-full-width">
            <label className="file-form-label" htmlFor="portfolioUrl">
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
