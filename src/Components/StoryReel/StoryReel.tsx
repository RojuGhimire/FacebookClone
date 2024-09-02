// src/components/StoryReel/StoryReel.tsx
import React from 'react';
import Story from './Story';

const stories = [
  {
    name: "User One",
    image: "story_image_url_1",
    profileSrc: "profile_image_url_1",
  },
  // Add more stories
];

const StoryReel: React.FC = () => {
  return (
    <div className="flex space-x-2 overflow-x-scroll p-4 bg-white shadow-md">
      {stories.map((story, index) => (
        <Story key={index} name={story.name} image={story.image} profileSrc={story.profileSrc} />
      ))}
    </div>
  );
};

export default StoryReel;
