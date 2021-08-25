import React from "react";

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
      <form onSubmit={handleSubmit} >
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
            />
          </div>
          <div className="form-grid-item">
            <label className="form-label" htmlFor="course">
              Thinkful Course
            </label>
            <select
              className="form-control"
              id="course"
              name="course"
              value={formData.course || ""}
              onChange={handleChange}
            >
              <option value="none" selected hidden>
                Thinkful Course
              </option>
              <option value="seFlex">Engineering Flex</option>
              <option value="seImmersion">Engineering Immersion</option>
              <option value="ds">Data Science</option>
              <option value="daFlex">Data Analytics Flex</option>
              <option value="daImmersion">Data Analytics Immersion</option>
              <option value="uxFlex">UX/UI Design Flex</option>
              <option value="uxImmersion">UX/UI Design Immersion</option>
              <option value="dm">Digital Marketing</option>
              <option value="pmFlex">Project Management Flex</option>
              <option value="pmImmersion">Project Management Immersion</option>
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
        <button className="form-button" type="submit">
          next
        </button>
      </form>
    </div>
  );
}
