import React, { useState } from 'react';

function UploadImage() {
   const [image, setImage] = useState('');
   const [loading, setLoading] = useState(false);

   const uploadImage = async (e) => {
      const files = e.target.files;
      const data = new FormData();
      data.append('file', files[0]);
      data.append('upload_preset', 'darwin');
      setLoading(true);
      const res = await fetch(
         'https://api.cloudinary.com/v1_1/ddcvaynal/image/upload',
         {
            method: 'POST',
            body: data,
         }
      );

      const file = await res.json();

      setImage(file.secure_url);

      setLoading(false);
   };

   return (
      <div className="Upload">
         <h3>Upload Image</h3>
         <input
            type="file"
            name="file"
            placeholder="Upload an image"
            onChange={uploadImage}
         />
         {loading ? (
            <h3>Loading. . .</h3>
         ) : (
            <img src={image} style={{ width: '200px' }} />
         )}
      </div>
   );
}

export default UploadImage;
