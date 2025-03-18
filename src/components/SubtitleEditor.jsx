import React from "react";

const SubtitleEditor = ({ subtitles, setSubtitles }) => {
  const handleTextChange = (id, newText) => {
    setSubtitles((prev) =>
      prev.map((sub) => (sub.id === id ? { ...sub, text: newText } : sub))
    );
  };

  return (
    <div className="p-4 bg-white shadow-md mt-4">
      {subtitles.map((sub) => (
        <div key={sub.id} className="mb-2">
          <input
            type="text"
            value={sub.text}
            onChange={(e) => handleTextChange(sub.id, e.target.value)}
            className="border p-2 w-full"
          />
        </div>
      ))}
    </div>
  );
};

export default SubtitleEditor;
