import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 h-1.5">
      <div
        className="bg-green-500 h-1.5"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
