import React from 'react'
import { useNavigate } from "react-router-dom";
import Svg from '../components/svg';
import Report from '../assets/report.png';
import Card from '../components/Card';

const reportImage = {
  image: Report,
};

const ImagePage = () => {
  const navigate = useNavigate();

  const handleReportClick = () => {
    navigate("/addimage");
  };
  return (
    <div>
        <div className='bg-blue w-full h-screen'>
          <div className='flex justify-center p-10'>
            <Svg />
            <h1 className="text-2xl text-font font-bold uppercase mx-5 mt-1">LocaLink</h1>
          </div>
          <div className='flex justify-center'>
          <Card image={reportImage.image} />
          
          </div>
          <h1 className=" text-font text-4xl font-semibold text-center font-urbanist">Here you can create an application !</h1>
          <div className='flex justify-center'>
          <button onClick={handleReportClick} className="bg-pink px-20 py-1 text-font text-2xl rounded-full mt-10">
              Report a Problem
            </button>
          </div>
    
        </div>
    </div>
  )
}

export default ImagePage