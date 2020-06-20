import React from "react";

export default function Upload() {
  return (
    <div className="upload card mt-6">
      <div className="card-header">
        <p className="card-header-title">Upload Images</p>
      </div>
      <div className="card-content">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" />
          </div>
        </div>

        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea className="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>

        <div className="file">
          <label className="file-label">
            <input
              className="file-input is-fullwidth"
              type="submit"
              name="resume"
            />
            <span className="file-cta">
              <span className="file-icon">
                <i className="fas fa-upload"></i>
              </span>
              <span className="file-label">Choose a file…</span>
            </span>
          </label>
        </div>

        <div className="field is-fullwidth mt-3">
          <div className="control">
            <button className="button is-link is-fullwidth">Upload</button>
          </div>
        </div>
      </div>
    </div>
  );
}
