// src/components/StoryReel/Story.tsx
import React from 'react';

interface StoryProps {
  name: string;
  image: string;
  profileSrc: string;
}

const Story: React.FC<StoryProps> = ({ name, image, profileSrc }) => {
  return (
    <div 
      className="relative h-40 w-28 bg-white rounded-lg overflow-hidden cursor-pointer"
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
    >
      <img 
        src={profileSrc} 
        alt={name} 
        className="absolute bottom-0 left-0 h-10 w-10 rounded-full border-2 border-blue-500" 
      />
      <p className="absolute bottom-2 left-2 text-white font-bold text-sm">{name}</p>
    </div>
  );
};

export default Story;
