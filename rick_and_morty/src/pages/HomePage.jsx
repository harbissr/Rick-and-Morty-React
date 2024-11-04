import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        
        <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-900">
            <div className="flex justify-center items-center h-screen bg-blue-500">
                <h1 className="text-center text-5xl font-bold text-black text-shadow-lg">
                    Multiverse Mayhem
                </h1>
                    <h2 className="text-center text-2xl font-semibold text-black text-shadow-md mt-4">
                        A Rick and Morty Fan Site
                    </h2>
            </div>
            {/* Navigation Links */}
            <div className="mt-8">
                <Link to="/Season_1" className="text-white mx-4">Season 1</Link>
                <Link to="/Season_2" className="text-white mx-4">Season 2</Link>
                <Link to="/settings" className="text-white mx-4">Settings</Link>
            </div>
        </div>
    );
};

export default HomePage;