import React from "react";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div>
      <video
        src="https://getvininfo.ca/wp-content/uploads/2024/10/video-bg-1.mp4"
        className="background video"
      ></video>
      <p className="fixed right-0.5">
        Get detailed vehicle records instantly! Just click the Get Report button
        to access the most accurate information on any vehicle—all at a
        budget-friendly price.
      </p>
      <Button text="get report" href="/" />
    </div>
  );
};

export default Hero;
