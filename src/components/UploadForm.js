import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import "./UploadForm.css";

function UploadForm() {
  const [file, setFile] = useState(null),
    [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];

  const handleChange = (event) => {
    console.log(event.target.files[0]);

    let selected = event.target.files[0];
    if (selected && types.includes(selected.type)) {
      setError(null);
      setFile(selected);
    } else {
      setFile(null);
      setError("Please select an image file (.png or .jpeg)");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="uploadForm__input">
        <input type="file" id="fileInput" onChange={handleChange} />
        <label htmlFor="fileInput">Upload +</label>
      </div>

      <div className="uploadForm__output">
        {error && <div className="uploadForm__error">{error}</div>}
        {file && <div className="uploadForm__fileName">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
}

export default UploadForm;
