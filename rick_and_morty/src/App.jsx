import React from "react";
<<<<<<< Updated upstream
import { Outlet, Link } from "react-router-dom";
import NavBar from "./pages/NavBar";
import backgroundVideo from "./assets/backgroundVideo.mp4";
import './index.css'

export default function App() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* video background */}
      <video
        autoPlay
        loop
        muted
        className="video-background"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag
      </video>
      <NavBar />
      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
  );
}

=======
import HomePage from "./pages/HomePage";
import "./index.css";

function App() {
    return (
      <>
      <h1 className="text-red-500">
        Test Tailwind
      </h1>
        <div className="h-screen">
            <HomePage />
        </div>
      </>
    );
}

export default App;
>>>>>>> Stashed changes
