// src/components/CreatePost/CreatePost.tsx
import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { db } from '../Firebase/config';

const CreatePost: React.FC = () => {
  const [message, setMessage] = useState('');
  const { currentUser } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) return;

    try {
      await addDoc(collection(db, "posts"), {
        name: currentUser.displayName || currentUser.email,
        description: currentUser.email,
        message: message,
        photoURL: currentUser.photoURL || 'default_profile_pic_url',
        timestamp: serverTimestamp(),
      });
      setMessage('');
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4">
      <textarea
        className="w-full p-2 border rounded"
        placeholder="What's on your mind?"
        value={message}
        onChange={e => setMessage(e.target.value)}
        required
      />
      <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
