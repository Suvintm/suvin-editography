import { useRef, useState, useEffect } from "react";
import {
  Play,
  Pause,
  Download,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Type,
  PaintBucket,
  Sparkles,
  VolumeX,
  Volume2,
} from "lucide-react";

const VideoPlayer = ({ videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const generateTimestamps = () => {
    const intervals = 4; // Number of markers between start & end
    if (!duration || duration < intervals) return [];

    const step = duration / (intervals + 1);
    return Array.from({ length: intervals }, (_, i) => step * (i + 1));
  };

  return (
    <div className="flex flex-col items-center w-full p-4 relative">
      <div className="relative w-[230px] h-[405px] md:w-[280px] md:h-[495px] bg-black rounded-lg overflow-hidden">
        {videoSrc ? (
          <video
            ref={videoRef}
            className="w-full h-full transition-transform duration-300"
            style={{ transform: `rotate(${rotation}deg) scale(${scale})` }}
            controls
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

      {/* Controls */}
      {videoSrc && (
        <div className="mt-4 flex flex-col items-center w-full">
          <div className="flex gap-2 text-xs md:text-sm">
            <div className="flex flex-col items-center">
              <button
                onClick={togglePlay}
                className="bg-[#4a00f5] p-2 rounded-full text-white"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>
              <span className="mt-1">Play/Pause</span>
            </div>
          </div>

          {/* Extra Options */}
          <div className="flex gap-2 mt-3">
            <button
              onClick={() => setRotation(rotation - 90)}
              className="bg-gray-800 p-2 rounded-full text-white"
            >
              <RotateCcw size={16} />
            </button>
            <button
              onClick={() => setRotation(rotation + 90)}
              className="bg-gray-800 p-2 rounded-full text-white"
            >
              <RotateCw size={16} />
            </button>
            <button
              onClick={() => setScale(scale + 0.1)}
              className="bg-gray-800 p-2 rounded-full text-white"
            >
              <ZoomIn size={16} />
            </button>
            <button
              onClick={() => setScale(scale - 0.1)}
              className="bg-gray-800 p-2 rounded-full text-white"
            >
              <ZoomOut size={16} />
            </button>
            <button className="bg-gray-800 p-2 rounded-full text-white">
              <Type size={16} />
            </button>
            <button className="bg-gray-800 p-2 rounded-full text-white">
              <PaintBucket size={16} />
            </button>
            <button className="bg-gray-800 p-2 rounded-full text-white">
              <Sparkles size={16} />
            </button>
          </div>

          {/* Mute/Unmute & Video Timeline */}
          <div className="flex items-center gap-3 w-full mt-3">
            <button
              onClick={toggleMute}
              className="bg-[#4a00f5] p-2 rounded-full text-white"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
            <span className="text-sm">{formatTime(currentTime)}</span>
            <div className="relative flex-grow">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleSeek}
                className="w-full appearance-none h-1 bg-gray-300 rounded-full cursor-pointer accent-[#4a00f5]"
              />
              <div className="absolute top-5 left-0 w-full flex justify-between text-xs text-gray-600">
                {generateTimestamps().map((time, index) => (
                  <span key={index}>{formatTime(time)}</span>
                ))}
              </div>
            </div>
            <span className="text-sm">{formatTime(duration)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
