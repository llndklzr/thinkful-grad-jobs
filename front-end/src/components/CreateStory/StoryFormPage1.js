import React from "react";
import DLBtn from "../DLBtn";

export default function StoryFormPage1({
  handleChange,
  formData,
  formPage,
  setFormPage,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormPage((prev) => prev + 1);
  };

  return (
    <div className="form-group">
      <form onSubmit={handleSubmit}>
        <div className="form-grid-container">
          <div className="form-grid-item">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              autoFocus
              required
            />
          </div>
          <div className="form-grid-item">
            <label className="form-label" htmlFor="course">
              Career Field
            </label>
            <select
              className="form-control"
              id="course"
              name="course"
              value={formData.course || ""}
              onChange={handleChange}
              required
            >
              <option value="none" selected hidden>
                Career Field
              </option>
              <option value="Full Stack Development">Engineering</option>
              <option value="UX/UI"> UX/UI</option>
              <option value="Data Analytics">Data Analytics</option>
              <option value="Data Science"> Date Science</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Project Management">Project Management</option>
            </select>
          </div>
          <div className="form-grid-item">
            <label className="form-label" htmlFor="jobTitle">
              Current Job Title
            </label>
            <input
              className="form-control"
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-grid-item">
            <label className="form-label" htmlFor="location">
              Location
            </label>
            <input
              className="form-control"
              type="text"
              id="location"
              name="location"
              value={formData.location || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-grid-item">
            <label className="form-label" htmlFor="linkedInUrl">
              LinkedIn (optional)
            </label>
            <input
              className="form-control"
              type="url"
              id="linkedInUrl"
              name="linkedInUrl"
              value={formData.linkedInUrl || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-grid-item" />
          <div className="form-grid-item">
            <label className="form-label" htmlFor="graduationDate">
              Graduation Date
            </label>
            <input
              className="form-control"
              type="date"
              id="graduationDate"
              name="graduationDate"
              value={formData.graduationDate || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-grid-item">
            <label className="form-label" htmlFor="hireDate">
              Hire Date
            </label>
            <input
              className="form-control"
              type="date"
              id="hireDate"
              name="hireDate"
              value={formData.hireDate || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-grid-item grid-item-full-width">
            <label className="form-label" htmlFor="storyAbstract">
              <p>Use this space to tell us about your new career.</p>
              <p>
                This is a good place for any of your general thoughts, feelings,
                or experiences along the way.
              </p>
            </label>
            <textarea
              className="form-control"
              id="storyAbstract"
              name="storyAbstract"
              value={formData.storyAbstract || ""}
              onChange={handleChange}
              rows={5}
            />
            <p className="character-count">
              {formData.storyAbstract ? formData.storyAbstract.length : "0"}/280
            </p>
          </div>
        </div>
      </form>
      <div className="btn-wrapper bottom right">
        <DLBtn text="Next" clickHandler={handleSubmit}/>
      </div>
    </div>
  );
}
