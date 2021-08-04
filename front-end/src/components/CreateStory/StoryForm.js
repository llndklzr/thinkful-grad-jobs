import { useState } from "react";
import { postStory } from "../../utils/apiFetcher";

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
        <div className="form-group-grid-container">
          <div className="form-grid-item">
            <label className="form-label" htmlFor="job_title">
              <p>Job Title:</p>
            </label>
            <input
              className="form-control"
              type="text"
              id="job_title"
              name="job_title"
              value={formData.job_title || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-grid-item">
            <label className="form-label" htmlFor="hire_date">
              Hire Date:
            </label>
            <input
              className="form-control"
              type="date"
              id="hire_date"
              name="hire_date"
              value={formData.hire_date || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-grid-item">
            <label className="form-label" htmlFor="story">
              Story:
            </label>
            <textarea
              className="form-control"
              id="story"
              name="story"
              value={formData.story || ""}
              onChange={handleChange}
              rows={20}
            />
          </div>
          <label className="form-label" htmlFor="interview_count">
            Number of Interviews:
          </label>
          <input
            className="form-control"
            type="number"
            id="interview_count"
            name="interview_count"
            value={formData.interview_count || ""}
            onChange={handleChange}
          />
        </div>
      </form>
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
  );
}
