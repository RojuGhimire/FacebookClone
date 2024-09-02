import React from 'react';
import Story from './Story';

const stories = [
  {
    name: "Roju Ghimire",
    image: "./2.JPG",
    profileSrc: "/logo.jpg",
  },
  {
    name: "Rejina Shrestha",
    image: "/3.jpg",
    profileSrc: "/2.JPG",
  },
  {
    name: "Anusha Upadhya",
    image: "/4.jpg",
    profileSrc: "/3.jpg",
  },
  // Add more stories

];

const StoryReel: React.FC = () => {
  return (
    <div className="flex space-x-4 overflow-x-scroll p-4 bg-white shadow-md">
      {stories.map((story, index) => (
        <Story key={index} name={story.name} image={story.image} profileSrc={story.profileSrc} />
      ))}
    </div>
  );
};

export default StoryReel;
