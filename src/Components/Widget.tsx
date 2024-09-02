import React from 'react';
import { FaUserFriends, FaBirthdayCake, FaBullhorn } from 'react-icons/fa';

const Widgets: React.FC = () => {
  // Example contacts data
  const contacts = ['John Doe', 'Jane Smith', 'Mike Johnson'];
  
  // Example sponsored ads data
  const sponsored = [
    { id: 1, name: 'Ad 1', url: 'https://example.com/ad1', imageUrl: '/ad1.png' },
    { id: 2, name: 'Ad 2', url: 'https://example.com/ad2', imageUrl: '/ad2.png' }
  ];
  
  // Example birthdays data
  const birthdays = ['Alice Wonderland', 'Bob Marley'];

  return (
    <div className="w-60 p-4 bg-white h-screen sticky top-16 space-y-4">
      {/* Contacts Widget */}
      <div className="mb-4">
        <h3 className="font-bold mb-2 flex items-center space-x-2">
          <FaUserFriends className="text-blue-500" />
          <span>Contacts</span>
        </h3>
        <ul className="space-y-2">
          {contacts.map(contact => (
            <li key={contact} className="flex items-center space-x-2">
              <img src="/default-avatar.png" alt={contact} className="h-8 w-8 rounded-full" />
              <span>{contact}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Sponsored Widget */}
      <div className="mb-4">
        <h3 className="font-bold mb-2 flex items-center space-x-2">
          <FaBullhorn className="text-blue-500" />
          <span>Sponsored</span>
        </h3>
        <ul className="space-y-4">
          {sponsored.map(ad => (
            <li key={ad.id} className="flex items-center space-x-2">
              <img src={ad.imageUrl} alt={ad.name} className="h-8 w-8 rounded-md" />
              <a href={ad.url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500">
                {ad.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Birthdays Widget */}
      <div className="mb-4">
        <h3 className="font-bold mb-2 flex items-center space-x-2">
          <FaBirthdayCake className="text-blue-500" />
          <span>Birthdays</span>
        </h3>
        <ul className="space-y-2">
          {birthdays.map(birthday => (
            <li key={birthday} className="flex items-center space-x-2">
              <FaBirthdayCake className="text-pink-500" />
              <span>{birthday}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* More widgets can be added similarly */}
    </div>
  );
};

export default Widgets;
