import { useState } from "react";
import { Link } from "react-router-dom";
import { getSignedUrl } from "../utils/apiFetcher";

function ResumeDownload() {
  const initialForm = {
    filename: "dummy-resume.pdf",
    awsMethod: "getObject",
  };

  const [resumeFormData, setResumeFormData] = useState({ ...initialForm });
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  const changeHandler = (e) => {
    setResumeFormData({
      ...resumeFormData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const abortController = new AbortController();
    const data = await getSignedUrl(
      resumeFormData.filename,
      resumeFormData.awsMethod,
      abortController.signal
    );
    setUrl(data.url);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <select value={resumeFormData.filename} onChange={changeHandler}>
          <option value="dummy-resume.pdf">dummy-resume.pdf</option>
          <option value="does-not-exist.pdf">does-not-exist.pdf</option>
        </select>
        <select value={resumeFormData.awsMethod} onChange={changeHandler}>
          <option value="getObject">download url</option>
          <option value={null}>get an error</option>
        </select>
        <button type="submit">fetch resume url</button>
      </form>
      {url && (
        <div>
          <h2>The URL is:</h2>
          <Link to={{ pathname: url }} target="_blank">
            {url}
          </Link>
        </div>
      )}
    </div>
  );
}

export default ResumeDownload;
