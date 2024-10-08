import React, { useState, useEffect } from "react";
import "./CursorCircle.css"; // Import your CSS file

const CursorCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div
      className="cursor-circle"
      style={{ left: position.x, top: position.y }}
    ></div>
  );
};

export default CursorCircle;
