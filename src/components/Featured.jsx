import React from 'react';
import gitLayout from '../assets/gitlayout.png';

const Featured = () => {
  const githubProfileUrl = 'https://github.com/raahulvinod';

  return (
    <div className="max-w-[1200px] mx-auto gap-4 glass p-6 shadow-lg mt-12">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-gray-300 text-4xl mb-4">Consistency in coding</h1>
        {/* Button to view GitHub profile */}
        <a
          href={githubProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white px-3 py-1 rounded-xl font-bold text-sm sm:px-5 sm:py-2 sm:text-base"
        >
          GitHub Profile
        </a>
      </div>
      <img src={gitLayout} alt="" />
    </div>
  );
};

export default Featured;
