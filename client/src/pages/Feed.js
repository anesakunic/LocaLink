// src/Feed.js
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

const Feed = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        // Fetch reports from the backend or use mock data for now
        const mockReports = [
            {
                id: 1,
                title: 'Broken Streetlight',
                date: '2024-05-20',
                description: 'The streetlight on 5th Avenue is not working.',
                image: 'https://via.placeholder.com/150',
                location: '5th Avenue',
            },
            {
                id: 2,
                title: 'Pothole on Main Street',
                date: '2024-05-21',
                description: 'There is a large pothole on Main Street that needs to be fixed.',
                image: 'https://via.placeholder.com/150',
                location: 'Main Street',
            },
            {
                id: 3,
                title: 'Palo drvo',
                date: '2024-05-25',
                description: 'Veliko drvo na sred ceste smrvilo mi auto',
                image: 'https://via.placeholder.com/150',
                location: 'Moja ulica',
            },
            // Add more reports as needed
        ];
        setReports(mockReports);
    }, []);

    return (
        <div className="bg-blue min-h-screen flex flex-col items-center font-urbanist">
            <Header />
            <h1 className="text-4xl text-font mt-6 mb-6">Reports Feed</h1>
            <div className="w-full max-w-6xl p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {reports.map((report) => (
                    <div key={report.id} className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-2xl text-font font-semibold mb-2">{report.title}</h2>
                        <p className="text-sm text-font mb-1"><strong>Date:</strong> {report.date}</p>
                        <p className="text-sm text-font mb-1"><strong>Location:</strong> {report.location}</p>
                        {report.image && (
                            <img src={report.image} alt={report.title} className="w-full h-auto rounded-lg mb-2" />
                        )}
                        <p className="text-sm text-font">{report.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feed;
