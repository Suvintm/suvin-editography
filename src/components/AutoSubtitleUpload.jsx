import React from "react";

const AutoSubtitleUpload = ({ onFileUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div className="flex flex-col items-center border p-4 rounded-lg bg-white shadow-md">
      <input type="file" accept="video/*" onChange={handleFileChange} />
    </div>
  );
};

export default AutoSubtitleUpload;
