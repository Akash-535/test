"use client";
import React, { useState } from "react";

const ImageUploader = () => {
  const [uploadedImages, setUploadedImages] = useState([]);

  const imageUploadHandler = (e: any) => {
    const newImage: string = URL.createObjectURL(e.target.files[0]);
    setUploadedImages([...uploadedImages, newImage] as any);
  };

  const removeImageHandler = (index: number) => {
    setUploadedImages((imgany) => imgany.filter((_, i) => i !== index));
    const removeValue = document.getElementById(
      "img-upload"
    ) as HTMLInputElement;
    if (removeValue) {
      removeValue.value = "";
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <input
        type="file"
        id="img-upload"
        accept="image/*"
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

      <div className="flex gap-4 mt-8 flex-wrap">
        {uploadedImages.map((image, i) => (
          <div key={i} className="relative size-[200px]">
            <button
              className={`w-full absolute top-1.5 -right-[38%] ${
                uploadedImages ? "block" : "hidden"
              }`}
              onClick={() => removeImageHandler(i)}
            >
              ❌
            </button>
            <img
              className={`size-[200px] rounded-lg object-cover ${
                uploadedImages ? "block" : "hidden"
              }`}
              src={image}
              alt="image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
