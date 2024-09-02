// src/pages/Home.tsx
import React from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import StoryReel from '../Components/StoryReel/StoryReel';
import Feed from '../Components/Feed';
import Widgets from '../Components/Widget';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <StoryReel />
          <Feed />
        </div>
        <Widgets />
      </div>
    </div>
  );
};

export default Home;
