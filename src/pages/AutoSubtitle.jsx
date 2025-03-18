import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdCloudUpload } from "react-icons/md";

const AutoSubtitle = () => {
  const [video, setVideo] = useState(null);
  const [language, setLanguage] = useState("");
  const navigate = useNavigate();

  // Handle Video Upload
  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      setVideo(videoUrl);
    }
  };

  // Start Button Click: Navigate to Subtitle Studio
  const handleStart = () => {
    if (video && language) {
      navigate("/subtitle-studio", { state: { videoSrc: video } });
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-xl font-semibold mb-4">Upload Your Video</h2>

      {/* Video Upload Box */}
      <div className="relative w-full max-w-xl border-2 border-dashed border-[#4a00f5] rounded-xl overflow-hidden aspect-w-16 aspect-h-9 flex items-center justify-center">
        {video ? (
          <video
            src={video}
            controls
            className="w-full h-full object-contain"
          />
        ) : (
          <label className="cursor-pointer flex flex-col items-center p-6">
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoUpload}
              className="hidden"
            />
            <MdCloudUpload className="w-16 h-16 text-[#4a00f5]" />
            <p className="text-gray-500 mt-2">Tap to upload a video</p>
          </label>
        )}
      </div>

      {/* Language Selection */}
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="mt-4 p-2 border rounded-lg"
      >
        <option value="">Select Language</option>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Kannada">Kannada</option>
      </select>

      {/* Start Button */}
      <button
        className="mt-4 px-6 py-2 bg-[#4a00f5] text-white rounded-lg font-bold disabled:bg-gray-400"
        disabled={!video || !language}
        onClick={handleStart}
      >
        Start Captioning
      </button>
    </div>
  );
};

export default AutoSubtitle;
