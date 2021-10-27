import React from "react";

export default function StoryFormPage1({
  handleChange,
  formData,
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
            <label className="form-label" htmlFor="first_name">
              First Name
            </label>
            <input
              className="form-control"
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name || ""}
              onChange={handleChange}
              autoFocus
              required
              placeholder="First Name"
            />
          </div>
          <div className="form-grid-item">
            <label className="form-label" htmlFor="first_name">
              First Name
            </label>
            <input
              className="form-control"
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name || ""}
              onChange={handleChange}
              autoFocus
              required
              placeholder="Last Name"
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
              required
              placeholder="LinkedIn (optional)"
            />
          </div>
          <div className="form-grid-item">
            <label className="form-label" htmlFor="graduate_career_field">
              Thinkful Course
            </label>
            <select
              className="form-control"
              id="graduate_career_field"
              name="graduate_career_field"
              value={formData.graduate_career_field || ""}
              onChange={handleChange}
              required
            >
              <option value="none" selected hidden>
                Thinkful Course
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
            <label className="form-label" htmlFor="graduation_date">
              Graduation Date
            </label>
            <input
              className="form-control"
              type="date"
              id="graduation_date"
              name="graduation_date"
              value={formData.graduation_date || ""}
              onChange={handleChange}
              placeholder="Graduation Date"
              required
            />
          </div>
          <div className="form-grid-item">
            <label className="form-label" htmlFor="hire_date">
              Hire Date
            </label>
            <input
              className="form-control"
              type="date"
              id="hire_date"
              name="hire_date"
              value={formData.hire_date || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-grid-item">
            <label className="form-label" htmlFor="graduation_date">
              Company
            </label>
            <input
              className="form-control"
              type="text"
              id="business_name"
              name="business_name"
              value={formData.business_name || ""}
              onChange={handleChange}
              placeholder="Company"
              required
            />
          </div>
          <div className="form-grid-item">
            <label className="form-label" htmlFor="job_title">
              Job Title
            </label>
            <input
              className="form-control"
              type="text"
              id="job_title"
              name="job_title"
              value={formData.job_title || ""}
              onChange={handleChange}
              placeholder="Job Title"
            />
          </div>
          <div className="form-grid-item">
            <label className="form-label" htmlFor="address">
              Job Location
            </label>
            <input
              className="form-control"
              type="text"
              id="address"
              name="address"
              value={formData.address || ""}
              onChange={handleChange}
              placeholder="Job Location"
              required
            />
          </div>
          <div className="form-grid-item grid-item-full-width">
            <label className="form-label" htmlFor="story">
              <p>Use this space to tell us about your path to your new career. The first 420 characters will be the first thing anyone sees 
                of your story. This is a good place for any of your general thoughts, feelings, or experiences along the way.
              </p>
            </label>
            <textarea
              className="textarea-for-story"
              id="story"
              name="story"
              value={formData.story || ""}
              onChange={handleChange}
              rows={4}
              required
            />
            <p className="character-count">
              {formData.story ? formData.story.length : "0"}/1000
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
