import React from 'react';

const PlusIcon = () => {

  const handlePlusClick = () => {
    console.log('click postivo')
  }

  return (
    <div className="PlusIcon" onClick={handlePlusClick}>
      <svg fill='#525f8e' stroke='#ffffff' strokeWidth='7' strokeDashoffset='0' strokeDasharray='0' 
      strokeLinecap='round' strokeLinejoin='round' xmlns='http://www.w3.org/2000/svg' 
      viewBox='0 0 100 100'><line x1="20" y1="50" x2="80" y2="50" /> 
      <line x1="50" y1="20" x2="50" y2="80"/>
      </svg>
    </div>
  );
}
export default PlusIcon;