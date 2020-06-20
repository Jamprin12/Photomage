import React from "react";

export default function Image({
  url,
  author,
  // authorImage,
  // create_at,
  // alt_description,
  description,
}) {
  return (
    <div className="card image m-4 is-half">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={url} alt={description} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{author}</p>
          </div>
        </div>

        <div className="content">
          {description}
          <br />
          {/* <time>{create_at}</time> */}
        </div>
      </div>
    </div>
  );
}
