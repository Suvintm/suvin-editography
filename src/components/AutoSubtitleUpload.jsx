import React from "react";

const VideoPlayer = ({ videoSrc }) => {
  if (!videoSrc) return <p className="text-gray-500">No video selected</p>;

  return (
    <div className="flex justify-center">
      <video
        src={videoSrc}
        controls
        className="max-w-full rounded-lg shadow-lg"
      />
    </div>
  );
};

export default VideoPlayer;
