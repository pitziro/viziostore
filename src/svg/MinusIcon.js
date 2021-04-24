import React from 'react';

const MinusIcon = () => {

  const handleMinusClick = () => {
    console.log('click negativo')
  }

  return (
    <div className="MinusIcon" onClick={handleMinusClick}>
      <svg fill='#525f8e' stroke='#ffffff' strokeWidth='7' strokeDashoffset='0' strokeDasharray='0' 
      strokeLinecap='round' strokeLinejoin='round' xmlns='http://www.w3.org/2000/svg' 
      viewBox='0 0 100 100'><line x1="20" y1="50" x2="80" y2="50" 
      />
      </svg>
    </div>
  );
}
export default MinusIcon;