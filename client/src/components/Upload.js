import React from "react";

export default function Upload() {
  return (
    <div>
      <h1>Upload</h1>
      <form>
        <input
          type="file"
          name="image"
          onChange={handleFileInputChange}
          value={}
          className="form=input"
        />
        <button className="btn" type="button">
          Submit
        </button>
      </form>
    </div>
  );
}
