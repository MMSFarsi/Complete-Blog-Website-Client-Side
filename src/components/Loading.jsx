import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="flex items-center justify-center space-x-4">
        <span className="loading loading-ring loading-lg"></span>
        <h2 className="text-2xl font-semibold">Loading...</h2>
      </div>
      <p className="mt-4 text-center text-lg">
        You need to create an account and log in to continue.
      </p>
    </div>
  );
};

export default Loading;
