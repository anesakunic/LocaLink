import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import AddDetails from "../assets/adddeetails.png";
import AddImage from "../assets/addimage.png";
import AddLocation from "../assets/addlocation.png";
import Outcome from "../assets/outcome.png";

import RepOne from "../assets/reportone.png";
import RepTwo from "../assets/reporttwo.png";


const reportData = {
  imageReportOne: RepOne,
  imageReportTwo: RepTwo,

}

const cardData = {
  imageImage: AddImage,
  titleImage: '1. Add Image',
  descriptionImage: 'Add a picture that shows a problem or situation that needs to be solved.',

  imageLocation: AddLocation,
  titleLocation: '2. Add Location',
  descriptionLocation: 'In order for the authorities to know where the problem is, approve the location and confirm.',

  imageDetails: AddDetails,
  titleDetails: '3. Add Details',
  descriptionDetails: 'Add details related to the application so that the competent services can solve the problem as easily and efficiently as possible.',

  imageOutcome: Outcome,
  titleOutcome: '4. Outcome',
  descriptionOutcome: 'Wait for Outcome'

};


const HomePage = () => {
  const navigate = useNavigate();

  const handleReportClick = () => {
    navigate("/report");
  };
  return (
    <div>
      <div className="bg-blue text-font flex font-urbanist">
        <header className="w-full max-w-6xl mx-auto flex p-4">
          <svg 
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.3112 7.94355C30.0614 3.20234 24.6056 0.0920105 18.4233 0.0920105C8.46189 0.0920105 0.386536 8.16736 0.386536 18.1288C0.386536 19.5781 0.557464 20.9874 0.880246 22.3377L10.0653 13.1527C10.9458 12.2722 12.3733 12.2722 13.2538 13.1527L20.6779 20.5768L33.3112 7.94355Z"
              fill="#EF2A82"
            />
            <path
              d="M35.455 12.1768L22.2722 25.3596C21.3917 26.24 19.9642 26.24 19.0837 25.3596L11.6595 17.9354L2.67196 26.923C5.75744 32.4376 11.655 36.1656 18.4233 36.1656C28.3848 36.1656 36.4602 28.0903 36.4602 18.1288C36.4602 16.0432 36.1061 14.0402 35.455 12.1768Z"
              fill="#EF2A82"
            />
          </svg>

          <div className="text-2xl font-bold uppercase mx-5 mt-1">LocalLink</div>
          <nav className="flex space-x-14 ml-72 text-nav p-2">
            <a href="#reports" className="hover:text-pink">
              Reports
            </a>
            <a href="#instructions" className="hover:text-pink">
              Instructions
            </a>
            <a href="#faq" className="hover:text-pink">
              FAQ
            </a>
            <a href="#blog" className="hover:text-pink">
              Blog
            </a>
            <div className="space-x-4">
              <a href="#signin" className="hover:text-pink">
                Sign in
              </a>
              <a
                href="#signup"
                className="bg-transparent hover:bg-pink hover:text-blue rounded-2xl border-solid border-2 border-nav px-8 py-1 "
              >
                Sign Up
              </a>
            </div>
          </nav>
        </header>
      </div>
      <hero>
        <div className="bg-blue h-[520px] font-urbanist">
          <div className="p-32 w-[690px] mx-20">
            <h1 className="text-5xl text-font font-semibold">
              Citizens for a More Orderly Future
            </h1>
            <p className="text-nav w-[500px] mt-5">
              Welcome to LocalLink - an innovative platform that enables
              citizens to actively contribute to the improvement and cleanliness
              of our city. Your concern for communal problems can now become a
              force for positive change
            </p>
            <button onClick={handleReportClick} className="bg-pink px-20 py-1 text-font text-3xl rounded-full mt-10">
              Report a Problem
            </button>
          </div>
        </div>
      </hero>

      <div className="bg-pink w-full h-5">
    </div>
    <div className="">
    <h1 className="text-4xl text-blue font-semibold font-urbanist justify-center flex mt-6">
    Simply create an application and track its outcome
            </h1>
            <div className="flex justify-center space-x-5 p-10 font-urbanist">
            <Card image={cardData.imageImage} title={cardData.titleImage} description={cardData.descriptionImage} />
            <Card image={cardData.imageLocation} title={cardData.titleLocation} description={cardData.descriptionLocation} />
            <Card image={cardData.imageDetails} title={cardData.titleDetails} description={cardData.descriptionDetails} />
            <Card image={cardData.imageOutcome} title={cardData.titleOutcome} description={cardData.descriptionOutcome} />
            </div>
    </div>
    <div className="font-urbanist text-center mt-10">
      <h1 className=" text-blue text-4xl font-semibold">Community Issues & Solutions Blog</h1>
      <p className="text-nav w-[1000px] p-10 ml-60">Welcome to the Community Issues & Solutions Blog! Here, you'll find real stories and problems shared by our community members, along with the creative solutions and support they've received. Join the conversation, share your own experiences, and connect with others who are making a difference in our community.</p>
      <div className=" ml-10 flex justify-center space-x-5">
        < Card image={reportData.imageReportOne} />
        < Card image={reportData.imageReportTwo} />

      </div>
    </div>
    <div>
    <h1 className="text-blue font-urbanist text-4xl font-semibold text-center mt-10 ">FAQ</h1>
    </div>
    <footer className="bg-blue h-[200px]">
        <div className="flex justify-center ml-60 space-x-10 text-font w-[1150px]">
          <div className="">
            <h1 className="mt-5">How do I change my account email?</h1>
            <p className="mt-2">You can log in to your account and change it from your Profile Edit Profile. Then go to the general tab to change your email.</p>
          </div>
          <div>
            <h1 className="mt-5">How can I report an issue or submit a suggestion?</h1>
            <p className="mt-2">To report an issue or submit a suggestion, simply click on the "Report a Problem" button within the Localink platform. Follow the prompted steps to provide details about the problem or suggestion you wish to share. Our team will review your submission and take appropriate action accordingly.</p>
          </div>
          <div>
            <h1 className="mt-5">Is Localink available in my area?</h1>
            <p className="mt-2">Yes, Localink is available for the entire country of Bosnia and Herzegovina. Whether you're in urban centers or rural communities, you can access Localink to connect with your neighbors, stay informed about local events, and engage with your community.</p>
          </div>
        </div>
    </footer>
    </div>
  );
};

export default HomePage;
