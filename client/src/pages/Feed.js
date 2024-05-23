import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import heartIcon from '../assets/heart.png';
import heartFilledIcon from '../assets/heartfilled.png';
import commentIcon from '../assets/comment.png';
import commentFilledIcon from '../assets/commentfilled.png';

const Feed = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await axios.get('http://localhost:5000/reports');
                // Initialize liked and commented properties to false for each report
                const reportsWithExtraProperties = response.data.map(report => ({ ...report, liked: false, commented: false }));
                setReports(reportsWithExtraProperties);
            } catch (error) {
                console.error('Error fetching reports:', error);
            }
        };

        fetchReports();
    }, []);

    const handleHeartClick = (index) => {
        // Toggle the liked property of the clicked report
        setReports(prevReports => {
            const updatedReports = [...prevReports];
            updatedReports[index] = { ...updatedReports[index], liked: !updatedReports[index].liked };
            return updatedReports;
        });
    };

    const handleCommentClick = (index) => {
        // Toggle the commented property of the clicked report
        setReports(prevReports => {
            const updatedReports = [...prevReports];
            updatedReports[index] = { ...updatedReports[index], commented: !updatedReports[index].commented };
            return updatedReports;
        });
    };

    return (
        <div className="bg-font min-h-screen flex flex-col items-center font-urbanist">
            <Header />
            <h1 className="text-4xl  mt-6 mb-6">Reports Feed</h1>
            <div className="w-full max-w-6xl p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {reports.map((report, index) => (
                    <div key={report._id} className="bg-white shadow-md rounded-lg p-4 relative">
                        <h2 className="text-2xl  font-semibold mb-2">{report.title}</h2>
                        <p className="text-sm text-font mb-1"><strong>Date:</strong> {new Date(report.date).toLocaleDateString()}</p>
                        <img src="https://via.placeholder.com/150" alt={report.title} className="w-full h-auto rounded-lg mb-2" />
                        <p className="text-sm">{report.description}</p>
                        <div className="flex items-center mt-2">
                            {/* Heart icon */}
                            <img
                                src={report.liked ? heartFilledIcon : heartIcon}
                                alt="like"
                                className="h-6 w-6 mr-2 cursor-pointer"
                                onClick={() => handleHeartClick(index)}
                            />
                            {/* Comment icon */}
                            <img
                                src={report.commented ? commentFilledIcon : commentIcon}
                                alt="comment"
                                className="h-6 w-6 cursor-pointer"
                                onClick={() => handleCommentClick(index)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feed;
