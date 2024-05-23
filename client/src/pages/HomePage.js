// src/HomePage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header"; // Import the Header component
import Card from "../components/Card";
import AddDetails from "../assets/adddeetails.png";
import AddImage from "../assets/addimage.png";
import AddLocation from "../assets/addlocation.png";
import Outcome from "../assets/outcome.png";
import RepOne from "../assets/reportone.png";
import RepTwo from "../assets/reporttwo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const reportData = {
  imageReportOne: RepOne,
  imageReportTwo: RepTwo,
};

const cardData = {
  imageImage: AddImage,
  titleImage: "1. Add Image",
  descriptionImage: "Add a picture that shows a problem or situation that needs to be solved.",

  imageLocation: AddLocation,
  titleLocation: "2. Add Location",
  descriptionLocation: "In order for the authorities to know where the problem is, approve the location and confirm.",

  imageDetails: AddDetails,
  titleDetails: "3. Add Details",
  descriptionDetails: "Add details related to the application so that the competent services can solve the problem as easily and efficiently as possible.",

  imageOutcome: Outcome,
  titleOutcome: "4. Outcome",
  descriptionOutcome: "Wait for Outcome",
};

const HomePage = () => {
  const navigate = useNavigate();

  const handleReportClick = () => {
    navigate("/report");
  };

  return (
    <div>
      <Header /> {/* Use the Header component here */}
      <div className="bg-blue h-[520px] font-urbanist">
        <div className="p-8 md:p-32 w-full md:w-[690px] mx-5 md:mx-20">
          <h1 className="text-3xl md:text-5xl text-font font-semibold">
            Citizens for a More Orderly Future
          </h1>
          <p className="text-nav mt-5">
            Welcome to LocaLink - an innovative platform that enables
            citizens to actively contribute to the improvement and cleanliness
            of our city. Your concern for communal problems can now become a
            force for positive change
          </p>
          <button onClick={handleReportClick} className="bg-pink px-10 py-2 md:px-20 md:py-1 text-font text-2xl md:text-3xl rounded-full mt-10">
            Report a Problem
          </button>
        </div>
      </div>
      <div className="bg-pink w-full h-5" />
      <div id="instructions">
        <h1 className="text-4xl text-blue font-semibold font-urbanist text-center mt-6">
          Simply create an application and track its outcome
        </h1>
        <div className="flex flex-wrap justify-center space-x-5 p-10 font-urbanist">
          <Card image={cardData.imageImage} title={cardData.titleImage} description={cardData.descriptionImage} />
          <Card image={cardData.imageLocation} title={cardData.titleLocation} description={cardData.descriptionLocation} />
          <Card image={cardData.imageDetails} title={cardData.titleDetails} description={cardData.descriptionDetails} />
          <Card image={cardData.imageOutcome} title={cardData.titleOutcome} description={cardData.descriptionOutcome} />
        </div>
      </div>
      <div id="reports" className="font-urbanist text-center mt-10">
        <h1 className="text-blue text-4xl font-semibold">Community Issues & Solutions Feed</h1>
        <p className="text-nav w-full md:w-[1000px] p-5 md:p-10 mx-auto">Welcome to the Community Issues & Solutions Feed! Here, you'll find real stories and problems shared by our community members, along with the creative solutions and support they've received. Join the conversation, share your own experiences, and connect with others who are making a difference in our community.</p>
        <div className="flex flex-wrap justify-center space-x-5">
          <Card image={reportData.imageReportOne} />
          <Card image={reportData.imageReportTwo} />
        </div>
      </div>
      {/* FAQ Section */}
      <section id="faq" className="bg-blue p-10">
        <h1 className="text-font text-4xl font-semibold text-center">FAQ</h1>
        <div className="flex flex-wrap justify-center md:justify-between text-font w-full md:w-[1150px] mx-auto space-y-4 md:space-y-0">
          <div className="w-full md:w-1/3 p-2">
            <h2 className="mt-5">How do I change my account email?</h2>
            <p className="mt-2">You can log in to your account and change it from your Profile Edit Profile. Then go to the general tab to change your email.</p>
          </div>
          <div className="w-full md:w-1/3 p-2">
            <h2 className="mt-5">How can I report an issue or submit a suggestion?</h2>
            <p className="mt-2">To report an issue or submit a suggestion, simply click on the "Report a Problem" button within the Localink platform. Follow the prompted steps to provide details about the problem or suggestion you wish to share. Our team will review your submission and take appropriate action accordingly.</p>
          </div>
          <div className="w-full md:w-1/3 p-2">
            <h2 className="mt-5">Is Localink available in my area?</h2>
            <p className="mt-2">Yes, Localink is available for the entire country of Bosnia and Herzegovina. Whether you're in urban centers or rural communities, you can access Localink to connect with your neighbors, stay informed about local events, and engage with your community.</p>
          </div>
        </div>
      </section>
      
      <footer id="footer" className="bg-blue h-[200px] flex justify-center items-center">
        <button onClick={() => window.scrollTo(0, 0)} className="text-font hover:text-gray-300 mr-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="h-8 w-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-font hover:text-gray-300 mx-6">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="mailto:contact@localink.com" className="text-font hover:text-gray-300 ml-6">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </footer>
    </div>
  );
};

export default HomePage;

