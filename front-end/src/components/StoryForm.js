import { useState } from "react";

export default function StoryForm() {
  const [formData, setFormData] = useState({});
  const [formPage, setFormPage] = useState(0);
  const handleSubmit = () => {};
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form-group">
        {formPage === 0 && (
          <label className="form-label" htmlFor="job_title">
            Job Title:
          </label>
        )}
        {formPage === 0 && (
          <input
            className="form-control"
            type="text"
            id="job_title"
            name="job_title"
            value={formData.job_title || ""}
            onChange={handleChange}
          />
        )}
        {formPage === 1 && (
          <label className="form-label" htmlFor="hire_date">
            Hire Date:
          </label>
        )}
        {formPage === 1 && (
          <input
            className="form-control"
            type="date"
            id="hire_date"
            name="hire_date"
            value={formData.hire_date || ""}
            onChange={handleChange}
          />
        )}
        {formPage === 2 && (
          <label className="form-label" htmlFor="story">
            Story:
          </label>
        )}
        {formPage === 2 && (
          <textarea
            className="form-control"
            id="story"
            name="story"
            value={formData.story || ""}
            onChange={handleChange}
            rows={20}
          />
        )}
        {formPage === 3 && (
          <label className="form-label" htmlFor="interview_count">
            Number of Interviews:
          </label>
        )}
        {formPage === 3 && (
          <input
            className="form-control"
            type="number"
            id="interview_count"
            name="interview_count"
            value={formData.interview_count || ""}
            onChange={handleChange}
          />
        )}
      </form>
      <div className="form-button-row">
        <div className="grouped-buttons">
          <button
            className="form-button"
            onClick={() => formPage > 0 && setFormPage(formPage - 1)}
            disabled={formPage <= 0}
          >
            prev
          </button>

          <button
            className="form-button"
            onClick={() => formPage < 3 && setFormPage(formPage + 1)}
            disabled={formPage >= 3}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}
