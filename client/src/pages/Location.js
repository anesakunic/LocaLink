import React, { useState } from 'react';
import LocationMap from '../components/LocationMap';
import { useNavigate } from 'react-router-dom';

const Location = () => {
    const [location, setLocation] = useState(null);
    const navigate = useNavigate();

    const handleLocationSelection = (selectedLocation) => {
        setLocation(selectedLocation);
    };

    const handleContinue = () => {
        if (location) {
            navigate('/application', { state: { location } });
        } else {
            alert('Please select a location.');
        }
    };

    return (
        <div className="bg-blue min-h-screen flex flex-col items-center justify-center text-center font-urbanist">
            <div className="w-64 h-64 mb-4 overflow-hidden rounded-md">
                <LocationMap setLocation={handleLocationSelection} />
            </div>
            <h1 className="text-4xl text-font mb-2">Confirm your location</h1>
            <p className="text-font text-sm mb-4 w-80">If the location is not correct, select a new one by moving the marker or entering the address.</p>
            <button onClick={handleContinue} className="bg-pink px-20 py-1 text-font text-2xl rounded-full">Continue</button>
        </div>
    );
};

export default Location;