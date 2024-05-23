import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StartApp = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make a POST request to send the report data to the backend
            const response = await axios.post('http://localhost:5000/reports/create', {
                title,
                description,
                date
            });

            // Optionally, handle the response from the backend
            console.log(response.data);

            // Navigate to /feed
            navigate('/feed');
        } catch (error) {
            // Handle error
            console.error('Error submitting report:', error);
        }
    };

    const MAX_TITLE_LENGTH = 100;
    const MAX_DESCRIPTION_LENGTH = 500;

    return (
        <div className="bg-blue min-h-screen flex flex-col items-center justify-center text-center font-urbanist">
            <h1 className="text-4xl text-font mb-6">Almost There!</h1>
            <div className="max-w-md mx-auto p-4 shadow-md rounded-lg bg-black">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-font text-sm text-left mb-2">
                        Title of Issue
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        maxLength={MAX_TITLE_LENGTH}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter title of issue"
                    />
                    <p className="text-xs text-gray-500 text-left">
                        {title.length}/{MAX_TITLE_LENGTH} characters
                    </p>
                </div>
                <div className="mb-4">
                    <label htmlFor="date" className="block text-font text-sm text-left mb-2">
                        Date
                    </label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-font text-sm text-left mb-2">
                        Description
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        maxLength={MAX_DESCRIPTION_LENGTH}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter description"
                    ></textarea>
                    <p className="text-xs text-gray-500 text-left">
                        {description.length}/{MAX_DESCRIPTION_LENGTH} characters
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center mt-4">
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-pink px-20 py-1 text-font text-2xl rounded-full"
                >
                    Finish
                </button>
            </div>
        </div>
    );
};

export default StartApp;
