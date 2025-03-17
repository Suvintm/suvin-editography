import { useRef, useState, useEffect } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  FileText,
  Type,
  Palette,
  Sparkles,
  PaintBucket,
} from "lucide-react";

const VideoPlayer = ({ videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && videoSrc) {
      videoRef.current.load();
      videoRef.current.onloadedmetadata = () => {
        setDuration(videoRef.current.duration);
      };
    }
  }, [videoSrc]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setProgress(
        (videoRef.current.currentTime / videoRef.current.duration) * 100
      );
    }
  };

  const handleSeek = (e) => {
    const newTime = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
    setProgress(e.target.value);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleAutoSubtitle = () => {
    alert("Auto Subtitle generation will be implemented here!");
  };

  return (
    <div className="flex flex-col items-center w-full p-4 relative">
      {/* Video Player */}
      <div className="relative w-[230px] h-[405px] md:w-[280px] md:h-[495px] bg-black rounded-lg overflow-hidden">
        {videoSrc ? (
          <video
            ref={videoRef}
            className="w-full h-full transition-transform duration-300"
            style={{ transform: `rotate(${rotation}deg)` }}
            onTimeUpdate={handleTimeUpdate}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            No video uploaded
          </div>
        )}
      </div>

      {videoSrc && (
        <div className="mt-4 w-full flex flex-col items-center">
          {/* Video Controls */}
          <div className="bg-black p-2 rounded-lg w-full flex flex-col items-center mt-3">
            <div className="flex items-center gap-3 w-full">
              <span className="text-sm text-white">
                {formatTime(currentTime)}
              </span>
              <div className="relative flex-grow">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={handleSeek}
                  className="w-full appearance-none h-1 bg-gray-300 rounded-full cursor-pointer accent-[#4a00f5]"
                />
              </div>
              <span className="text-sm text-white">{formatTime(duration)}</span>
            </div>
            <button
              onClick={togglePlay}
              className="mt-3 bg-black p-1 rounded-full text-white flex items-center justify-center"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
          </div>
        </div>
      )}

      {/* Options Bar Fixed at Bottom */}
      {videoSrc && (
        <div className="bg-black p-4 fixed bottom-0 w-full flex justify-center flex-wrap gap-3">
          {/* Auto Subtitle */}
          <div className="flex flex-col items-center">
            <button
              onClick={handleAutoSubtitle}
              className="bg-purple-700 p-2 rounded-[10px] text-white"
            >
              <FileText size={18} />
            </button>
            <span className="text-xs text-white mt-1">Gen Subtitle</span>
          </div>

          {/* Rotate Left */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => setRotation(rotation - 90)}
              className="bg-gray-800 p-2 rounded-[10px] text-white"
            >
              <RotateCcw size={18} />
            </button>
            <span className="text-xs text-white mt-1">Rotate Left</span>
          </div>

          {/* Rotate Right */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => setRotation(rotation + 90)}
              className="bg-gray-800 p-2 rounded-[10px] text-white"
            >
              <RotateCw size={18} />
            </button>
            <span className="text-xs text-white mt-1">Rotate Right</span>
          </div>

          {/* Font */}
          <div className="flex flex-col items-center">
            <button className="bg-gray-800 p-2 rounded-[10px] text-white">
              <Type size={18} />
            </button>
            <span className="text-xs text-white mt-1">Font</span>
          </div>

          {/* Font Style */}
          <div className="flex flex-col items-center">
            <button className="bg-gray-800 p-2 rounded-[10px] text-white">
              <Sparkles size={18} />
            </button>
            <span className="text-xs text-white mt-1">Font Style</span>
          </div>

          {/* Font Color */}
          <div className="flex flex-col items-center">
            <button className="bg-gray-800 p-2 rounded-[10px] text-white">
              <Palette size={18} />
            </button>
            <span className="text-xs text-white mt-1">Font Color</span>
          </div>

          {/* Font Background */}
          <div className="flex flex-col items-center">
            <button className="bg-gray-800 p-2 rounded-[10px] text-white">
              <PaintBucket size={18} />
            </button>
            <span className="text-xs text-white mt-1">Font Background</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
