import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import autoSubtitleImg from "../assets/auto-subtitle.jpg";
import audioEnhancerImg from "../assets/audio-enhancer.jpg";
import bgRemoverImg from "../assets/bg-remover.jpg";
import videoCropperImg from "../assets/video-cropper.jpg";

const tools = [
  {
    id: 1,
    name: "Auto Subtitle Generator",
    description:
      "Automatically generate subtitles for your videos with AI-powered accuracy.",
    image: autoSubtitleImg,
    link: "/auto-subtitle",
  },
  {
    id: 2,
    name: "AI Audio Enhancer",
    description:
      "Enhance the clarity and quality of your audio with advanced AI filters.",
    image: audioEnhancerImg,
    link: "/audio-enhancer",
  },
  {
    id: 3,
    name: "Background Remover",
    description:
      "Easily remove backgrounds from images and videos with one click.",
    image: bgRemoverImg,
    link: "/bg-remover",
  },
  {
    id: 4,
    name: "Video Cropper",
    description:
      "Crop your videos to the perfect aspect ratio for different social media platforms.",
    image: videoCropperImg,
    link: "/video-cropper",
  },
];

const MainSection = () => {
  return (
    <div className="py-10 px-5 md:px-20 bg-gray-100">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-[#4A00F5]">
        Powerful Video Editing Tools
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {tools.map((tool, index) => (
          <Link key={tool.id} to={tool.link} className="w-full md:w-[48%]">
            <motion.div
              className="bg-gray-400 shadow-lg rounded-2xl overflow-hidden p-5 flex flex-col md:flex-row items-center gap-5"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={tool.image}
                alt={tool.name}
                className="w-full md:w-1/3 rounded-xl object-cover"
              />
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-black">
                  {tool.name}
                </h3>
                <p className="text-blue-600 mt-2">{tool.description}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainSection;
