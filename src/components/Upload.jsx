import React from "react";

export default function Upload() {
  return (
    <div className="upload card mt-6">
      <div class="card-header">
        <p class="card-header-title">Upload Images</p>
      </div>
      <div className="card-content">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" />
          </div>
        </div>

        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea class="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>

        <div class="file">
          <label class="file-label">
            <input
              class="file-input is-fullwidth"
              type="submit"
              name="resume"
            />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">Choose a file…</span>
            </span>
          </label>
        </div>

        <div class="field is-fullwidth mt-3">
          <div class="control">
            <button class="button is-link is-fullwidth">Upload</button>
          </div>
        </div>
      </div>
    </div>
  );
}
