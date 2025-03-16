import React, { useState, useEffect } from "react";
import banner from "../assets/banner.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";

const Header = () => {
  // Array of images and corresponding text
  const slides = [
    {
      image: banner,
      heading: "Welcome to SuvinEditography",
      text: "Create stunning edits effortlessly with our tools.",
    },
    {
      image: banner2,
      heading: "Powerful Video Editing",
      text: "Explore professional-grade editing features right in your browser.",
    },
    {
      image: banner3,
      heading: "Collaborate Seamlessly",
      text: "Work with your team to create amazing projects together.",
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0); // Tracks the current slide index
  const [fadeState, setFadeState] = useState("fade-in"); // Tracks fade state (fade-in or fade-out)

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState("fade-out"); // Trigger fade-out animation

      setTimeout(() => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length); // Change slide after fade-out
        setFadeState("fade-in"); // Trigger fade-in animation
      }, 3000); // Duration of fade-out animation
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [slides.length]);

  const { image, heading, text } = slides[currentSlideIndex]; // Destructure current slide details

  return (
    <div className="relative bg-[#4A00f5] mx-5 md:mx-20 md:h-200 rounded-3xl overflow-hidden">
      {/* Image */}
      <img
        src={image}
        alt={heading}
        className={`w-full h-auto transition-opacity duration-1000 ${fadeState}`}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

      {/* Text Overlay */}
      <div
        className={`absolute top-0 left-0 w-80 md:w-full h-full flex flex-col justify-center items-start text-white p-5 transition-opacity duration-1000 ${fadeState}`}
      >
        <h1 className="text-xl mt-[-30px] md:text-[80px] font-bold md:mt-[-60] md:ml-20">
          {heading}
        </h1>
        <p className="text-sm md:text-[25px] md:mt-2 md:ml-30">{text}</p>

        {/* Button */}
        <div className="absolute bottom-10 md:bottom-20 left-10 md:left-50">
          <button className="text-[12px] p-2 font-bold md:text-2xl bg-[#4A00f5] md:w-60 md:p-10 rounded-full hover:w-80 transition-all duration-300 hover:text-3xl md:hover:ml-[-45px]">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
