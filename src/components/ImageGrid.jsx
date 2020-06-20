import React, { useState, useEffect } from "react";
import Image from "./Image";
import { db } from "../services/firebase";

export default function ImageGrid() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    db.collection("Photos")
      .get()
      .then((snapshot) => {
        const photos_temp = [];

        snapshot.forEach((doc) => {
          const data = doc.data();
          photos_temp.push(data);
        });

        setPhotos(photos_temp);
      })
      .catch((error) => console.log(error));
  }, [photos]);

  return (
    <div className="images-grid my-4">
      {photos.map((
        { id, url, name, description } // alt_description, // update_at,
      ) => (
        <Image
          key={id}
          url={url}
          author={name}
          // authorImage={user.profile_image.large}
          // create_at={update_at}
          // alt_description={alt_description}
          description={description}
        ></Image>
      ))}
    </div>
  );
}
