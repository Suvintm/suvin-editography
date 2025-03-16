import React from "react";

const SubtitleTimeline = ({ subtitles }) => {
  return (
    <div className="p-4 bg-white shadow-md mt-4">
      <h3 className="font-bold mb-2">Subtitle Timeline</h3>
      {subtitles.map((sub) => (
        <div key={sub.id} className="flex justify-between border-b p-2">
          <span>
            {sub.start}s - {sub.end}s
          </span>
          <span>{sub.text}</span>
        </div>
      ))}
    </div>
  );
};

export default SubtitleTimeline;
