// App.js
import React, { useState } from 'react';

export default function App() {
  const [sparkles, setSparkles] = useState([]);

  const addSparkle = () => {
    const id = Date.now();
    const newSparkle = {
      id,
      x: Math.random() * 90 + 5 + 'vw', // 5vw to 95vw
      y: Math.random() * 80 + 5 + 'vh', // 5vh to 85vh
    };
    setSparkles((prev) => [...prev, newSparkle]);

    // Remove after 2 seconds
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== id));
    }, 2000);
  };

  return (
    <div className="relative h-screen bg-black justify-center  items-center flex">
      
      <button
        onClick={addSparkle}
        className="absolute transform -translate-x-1/2 px-6 py-2 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition"
      >
        mwah
      </button>
      
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute text-2xl animate-fade"
          style={{ top: s.y, left: s.x }}
        >💖
        </span>
      ))}

      {/* Tailwind animation class */}
      <style>
        {`
          @keyframes fade {
            0% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(5.5); }
          }
          .animate-fade {
            animation: fade 2s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}
