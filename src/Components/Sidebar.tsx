import React from 'react';

const Sidebar: React.FC = () => {
  const menuItems = [
    { name: "News Feed", icon: "" },
    { name: "Messenger", icon: "" },
    { name: "Watch", icon: "" },
    { name: "Marketplace", icon: "" },
    { name: "Groups", icon: "" },
    // Add more items as needed
  ];

  return (
    <div className="w-60 p-4 bg-white h-screen sticky top-16">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className="flex items-center p-2 rounded hover:bg-gray-200 cursor-pointer mb-2">
            {item.icon}
            <span className="ml-2">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
