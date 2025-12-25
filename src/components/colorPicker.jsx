import React from "react";
import "../App.css"

function ColorWheel({ value, onChange }) {
  return (
    <div className="relative w-40 h-40">
      {/* Color wheel gradient */}
      <div
        className="
          absolute inset-0 rounded-full
          bg-[conic-gradient(red, yellow, lime, aqua, blue, magenta, red)]
        "
      />

      {/* Inner white circle (for donut look) */}
      <div className="absolute inset-6 bg-white rounded-full"></div>

      {/* Hidden color input */}
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          absolute inset-0 w-300 h-full opacity-0 cursor-pointer rounded-full 
        "
      />
    </div>
  );
}

export default ColorWheel;
