import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="bg-blue-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="text-2xl font-bold">
                    <Link to="/" className="hover:text-yellow-400">
                        Multiverse Mayhem
                    </Link>
                </div>
                <div style={{display:'flex', justifyContent:"space-around"}}>
                    <Link to="/" className="hover:text-yellow-400">Home</Link>
                    <Link to="/episodeGuide" className="hover:text-yellow-400">Episode Guide</Link>
                    <Link to="/characterGuide" className="hover:text-yellow-400">Character Guide</Link>
                    <Link to="/forum" className="hover:text-yellow-400">Forum</Link>
                    <Link to="/fanArt" className="hover:text-yellow-400">Fan Art</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;