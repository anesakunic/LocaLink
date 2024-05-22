import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import uploadIcon from '../assets/uploadicon.png';

const AddImage = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleNext = () => {
    navigate('/location');
  };

  return (
    <div className="bg-blue min-h-screen flex flex-col items-center justify-center text-center font-urbanist">
      <div className="max-w-sm">
        <h1 className="text-font text-4xl font-urbanist text-left mb-6">Add Image</h1>
        <p className="text-sm text-font font-bold text-left mb-4">Add the highest quality image that describes the situation and/or the public utility issue you are reporting. </p>
        <p className="text-sm text-font text-left mb-4">Please include high-quality images that accurately depict the situation or the public utility problem you are reporting. Clear and detailed photos will help in assessing and addressing the issue more effectively. </p>
        {image ? (
          <img src={URL.createObjectURL(image)} alt="Selected" className="w-40 h-40 rounded-lg mx-auto mb-4" />
        ) : (
          <label htmlFor="upload" className="block cursor-pointer">
            <div className="bg-font w-40 h-40 flex flex-col items-center justify-center rounded-lg mb-4 mx-auto">
              <img src={uploadIcon} alt="Upload Icon" className="w-16 h-16 mb-2" />
              <span className="text-blue text-sm">Click to upload image</span>
            </div>
          </label>
        )}
        <input type="file" id="upload" accept="image/*" onChange={handleImageChange} className="hidden" />
        <button onClick={handleNext} className="bg-pink px-20 py-1 text-font text-2xl rounded-full">Continue</button>
      </div>
    </div>
  );
};

export default AddImage;
