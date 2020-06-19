import React, { useState, useEffect } from "react";
import Image from "./Image";
import { getData } from "../services/api";

export default function ImageGrid() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function setData() {
      const data = await getData();
      setImages(data);
    }
    setData();
  }, []);
  return (
    <div className="images-grid my-4">
      {images.map(
        ({ id, urls, user, update_at, alt_description, description }) => (
          <Image
            key={id}
            url={urls.raw}
            author={user.name}
            authorImage={user.profile_image.large}
            create_at={update_at}
            alt_description={alt_description}
            description={description}
          ></Image>
        )
      )}
    </div>
  );
}
