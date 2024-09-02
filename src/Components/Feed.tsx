/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../Firebase/config';
import CreatePost from './CreatePost';
import Post from './Post';

interface PostData {
  id: string;
  data: {
    name: string;
    description: string;
    message: string;
    photoURL: string;
    timestamp: any;
  };
}

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data() as PostData['data'], // Type assertion here
      })));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex-1 p-4">
      <CreatePost />
      {posts.map(post => (
        <Post key={post.id} id={post.id} data={post.data} />
      ))}
    </div>
  );
};

export default Feed;
