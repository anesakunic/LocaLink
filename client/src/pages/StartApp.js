import React, { useState } from 'react';
import LocationMap from '../components/LocationMap';

const StartApp = () => {
    const [image, setImage] = useState(null);
    const [location, setLocation] = useState(null);
    const [description, setDescription] = useState('');
  
    const handleImageChange = (e) => {
      setImage(URL.createObjectURL(e.target.files[0]));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log({
        image,
        location,
        description,
      });
     
    };

  return (
    <div className='bg-blue "max-w-sm mx-auto'>
    <div className="max-w-md mx-auto p-4 shadow-md rounded-lg font-urbanist bg-black">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-font text-sm font-bold mb-2" htmlFor="image">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-font file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        {image && (
          <div className="mb-4">
            <img src={image} alt="Preview" className="w-full h-auto rounded-lg" />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-font text-sm font-bold mb-2">
            Select Location
          </label>
          <LocationMap setLocation={setLocation} />
        </div>
        <div className="mb-4">
          <label className="block text-font text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter description"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-pink hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Report
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default StartApp;
