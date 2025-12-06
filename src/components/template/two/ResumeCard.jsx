"use client";

import PropTypes from 'prop-types';
import React from 'react';
import { useTheme } from "../../../context/ThemeContext";

function ResumeCard({
  dateRange,
  title,
  instructor,
  website,
  isActive
}) {
  const { theme } = useTheme();
  
  return (
    <div className={`rounded-lg p-5 text-right shadow-md transition-transform duration-300 ease-in-out transform hover:-translate-y-2 ${isActive ? 'bg-green-500 text-white' : theme === "light" ? 'bg-white' : 'bg-[#140c1c]'}`} style={{ direction: 'rtl' }}>
      <div className={`text-sm mb-2 ${isActive ? 'text-white' : theme === "light" ? 'text-[#140c1c]' : 'text-gray-400'}`}>{dateRange}</div>
      <h3 className={`text-lg font-bold mb-2 ${isActive ? 'text-white' : theme === "light" ? 'text-[#2a1454]' : 'text-white'}`}>{title}</h3>
      <p className={`text-base mb-1 ${isActive ? 'text-white' : theme === "light" ? 'text-[#140c1c]' : 'text-gray-400'}`}>{instructor}</p>
      <p className={`text-base mb-1 ${isActive ? 'text-white' : theme === "light" ? 'text-[#140c1c]' : 'text-gray-400'}`}>{website}</p>
      {isActive && (
        <div className="mt-4 h-1.5 bg-white bg-opacity-50 rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-white rounded-full"></div>
        </div>
      )}
    </div>
  );
}

ResumeCard.propTypes = {
  dateRange: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default ResumeCard;
