import React, { useState } from "react";

function UploadImage() {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const files = e.targe.files;
    const data = new FormData();
    data.append("file", file[0]);
    data.append("upload_preset", "darwin");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/ddcvaynal/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();

    setImage(file.secur_url);

    setLoading(false);
  };

  return (
    <div className="Upload">
      <h1>Upload Image</h1>
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}
      />
    </div>
  );
}

export default UploadImage;
