import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center relative">
      <div className="flex items-center justify-center ">
        <div className="w-6 h-6 border-b-2 border-gray-900 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Spinner;
