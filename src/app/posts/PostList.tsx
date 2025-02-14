"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Post } from "../../types/Post";
import { CommentBox } from "./CommentBox";

export function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await axios.get<Post[]>(`${process.env.API_BASE}/posts`);
    setPosts(response.data);
  };

  return <div>post list</div>;
}
