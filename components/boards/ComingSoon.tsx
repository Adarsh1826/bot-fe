import React from "react";

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-orange-900 text-orange-400">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-widest animate-pulse drop-shadow-lg">
          COMING SOON
        </h1>
        <p className="text-lg md:text-2xl text-orange-300 font-light max-w-2xl mx-auto">
          Every great thing starts with a bold vision. Stay with us — something incredible is on the way!
        </p>
        <div className="mt-10 text-sm text-gray-400">
          © 2025 Code Quest.
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
