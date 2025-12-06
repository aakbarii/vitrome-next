import PropTypes from 'prop-types';
import React from 'react';

function TestimonialCard({ text, name, position, avatar, color }) {
  return (
    <div 
      className="rounded-xl p-6 text-right shadow-lg relative overflow-hidden flex flex-col"
      style={{ 
        backgroundColor: color,
        direction: 'rtl',
        minHeight: '320px'
      }}
    >
      {/* Quote Icon "66" in top-left */}
      <div className="absolute top-5 right-5">
        <div className="text-white text-6xl font-bold opacity-20 leading-none" style={{ 
          fontFamily: 'Arial, sans-serif',
          letterSpacing: '-2px'
        }}>
          66
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Testimonial Text */}
        <div className="flex-1 pt-4">
          <p className="text-white text-sm leading-relaxed mb-6">
            {text}
          </p>
        </div>

        {/* Author Info */}
        <div className="flex items-center justify-end gap-3 mt-auto pt-4">
          <div className="text-right">
            <h4 className="text-white font-bold text-base mb-0.5">
              {name}
            </h4>
            <p className="text-white text-xs opacity-75">
              {position}
            </p>
          </div>
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white border-opacity-20 flex-shrink-0 bg-white bg-opacity-10">
            <img 
              src={avatar} 
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default TestimonialCard;

