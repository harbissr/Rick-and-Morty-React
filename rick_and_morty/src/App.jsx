import React from "react";
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

