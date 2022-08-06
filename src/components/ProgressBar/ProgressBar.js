import React, { useState, useEffect } from "react";
import "./ProgressBar.css";

function ProgressBar ({ width, percent }) {
  const [value, setValue] = useState(0)
  
  useEffect(() => {
    setValue(percent * width)
  })
  

  return (
    <div className="progress-div flex-none " style={{ width: `${width}px` }}>
      <div style={{ width: `${value}px` }} className="progress h-full"></div>
    </div>
  );
};

export default ProgressBar
