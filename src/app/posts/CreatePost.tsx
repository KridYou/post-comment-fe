import { useState } from "react";
import axios from "axios";
import { Post } from "@/types/Post";

export function CreatePost({ onPostCreated }: { onPostCreated: () => void }) {
  const [newPost, setNewPost] = useState<Post[]>([]);

  const createPost = async () => {
    if (newPost.some((post) => !post.content.trim())) return;
    await axios.post(`${process.env.API_BASE}/posts`, { content: newPost });
    setNewPost([]);
    onPostCreated();
  };

  return (
    <div>creat post</div>
  );
}
