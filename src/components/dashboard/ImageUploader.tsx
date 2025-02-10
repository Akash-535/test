"use client";
import React, { useState } from "react";

const ImageUploader = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [_, setNewUrl] = useState(null);

  const imageUploadHandler = (e: any) => {
    const newImage = URL.createObjectURL(e.target.files[0]);
    setNewUrl(newImage as any);
    setUploadedImages([...uploadedImages, newImage] as any);
  };

  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <input
        type="file"
        id="img-upload"
        hidden
        onChange={(e) => imageUploadHandler(e)}
        multiple
      />
      <label
        htmlFor="img-upload"
        className="py-3 px-5 bg-black cursor-pointer text-white border border-transparent rounded-xl hover:text-black hover:bg-white hover:border-black duration-300 ease-linear"
      >
        Upload Images
      </label>

      <div className="flex gap-4 mt-4">
        {uploadedImages.map((image, i) => (
          <img
            key={i}
            className="size-[200px] rounded-lg object-cover"
            src={image}
            alt={`uploaded-img-${i}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
