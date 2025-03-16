// src/components/ui/slider.js
import React from "react";

const Slider = ({ value, onValueChange, min, max, className }) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={(e) => onValueChange([parseInt(e.target.value, 10)])}
      className={`w-full ${className}`}
    />
  );
};

export default Slider;
