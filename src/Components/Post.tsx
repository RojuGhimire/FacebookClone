/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/Post/Post.tsx
import React, { useEffect, useState } from 'react';
import { collection, addDoc, query, onSnapshot, orderBy, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { db } from '../Firebase/config';

interface PostProps {
  id: string;
  data: {
    name: string;
    description: string;
    message: string;
    photoURL: string;
    timestamp: any;
  };
}

interface Comment {
  id: string;
  data: {
    name: string;
    message: string;
    timestamp: any;
  };
}

const Post: React.FC<PostProps> = ({ id, data }) => {
  const { currentUser } = useAuth();
  const [comments, setComments] = useState<Comment[]>([]);
  const [comment, setComment] = useState('');

  useEffect(() => {
    const q = query(collection(db, "posts", id, "comments"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, snapshot => {
      setComments(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data() as Comment['data'], // Type assertion here
      })));
    });

    return () => unsubscribe();
  }, [id]);

  const handleComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) return;

    try {
      await addDoc(collection(db, "posts", id, "comments"), {
        name: currentUser.displayName || currentUser.email,
        message: comment,
        timestamp: serverTimestamp(),
      });
      setComment('');
    } catch (err) {
      console.error("Error adding comment: ", err);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <div className="flex items-center mb-2">
        <img src={data.photoURL} alt={data.name} className="h-10 w-10 rounded-full mr-2" />
        <div>
          <h4 className="font-bold">{data.name}</h4>
          <p className="text-sm text-gray-500">{new Date(data.timestamp?.toDate()).toLocaleString()}</p>
        </div>
      </div>
      <p className="mb-2">{data.message}</p>
      {/* Like, Comment, Share Buttons */}
      <div className="flex space-x-4 text-gray-500">
        <button className="flex items-center space-x-1">
          {/* Like Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M...Z" /> {/* Replace with actual path */}
          </svg>
          <span>Like</span>
        </button>
        <button className="flex items-center space-x-1">
          {/* Comment Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M...Z" /> {/* Replace with actual path */}
          </svg>
          <span>Comment</span>
        </button>
        <button className="flex items-center space-x-1">
          {/* Share Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M...Z" /> {/* Replace with actual path */}
          </svg>
          <span>Share</span>
        </button>
      </div>
      {/* Comments Section */}
      <div className="mt-4">
        {comments.map(comment => (
          <div key={comment.id} className="flex items-center mb-2">
            <img src="default_profile_pic_url" alt={comment.data.name} className="h-8 w-8 rounded-full mr-2" />
            <div>
              <h5 className="font-semibold">{comment.data.name}</h5>
              <p className="text-sm">{comment.data.message}</p>
              <p className="text-xs text-gray-400">{new Date(comment.data.timestamp?.toDate()).toLocaleString()}</p>
            </div>
          </div>
        ))}
        <form onSubmit={handleComment} className="flex items-center mt-2">
          <input
            type="text"
            className="flex-1 p-2 border rounded"
            placeholder="Write a comment..."
            value={comment}
            onChange={e => setComment(e.target.value)}
            required
          />
          <button type="submit" className="ml-2 text-blue-500">Post</button>
        </form>
      </div>
    </div>
  );
};

export default Post;
