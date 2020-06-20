import React, { useState } from "react";
import { storage, db } from "../services/firebase";

export default function Upload() {
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
      console.log(photo);
    }
  };
  const handleUpload = () => {
    const uploadTask = storage.ref(`photos/${photo.name}`).put(photo);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("photos")
          .child(photo.name)
          .getDownloadURL()
          .then((url) => {
            const data = {
              url,
              name,
              description,
            };
            const photos = db.collection("Photos");
            photos.add(data);
            console.log(photos);
          });
      }
    );
    setDescription("");
    setName("");
    setPhoto(null);
  };

  return (
    <div className="upload card mt-6">
      <div className="card-header">
        <p className="card-header-title">Upload Images</p>
      </div>
      <div className="card-content">
        <div className="file is-fullwidth">
          <label className="file-label">
            <input
              className="file-input"
              onChange={handleChange}
              type="file"
              name="resume"
              required="required"
            />
            <span className="file-cta">
              <span className="file-icon">
                <i className="fas fa-upload"></i>
              </span>
              <span className="file-label">Choose a file…</span>
            </span>
          </label>
        </div>

        <div className="field mt-4">
          <div className="control">
            <input
              className="input"
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Name Author"
              value={name}
              required="required"
            />
          </div>
        </div>

        <div className="field mt-4">
          <div className="control">
            <textarea
              className="textarea"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              placeholder="Description"
              value={description}
              required="required"
            ></textarea>
          </div>
        </div>

        <div className="field is-fullwidth mt-3">
          <div className="control">
            <button onClick={handleUpload} className="button is-fullwidth">
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
