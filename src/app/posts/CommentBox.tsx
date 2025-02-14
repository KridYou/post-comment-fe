import { useState } from "react";
import axios from "axios";
import { Comment } from "../../types/Post";

export function CommentBox({
  postId,
  refreshPosts,
}: {
  postId: number;
  refreshPosts: () => void;
}) {
  const [comment, setComment] = useState<Comment | null>(null);

  const addComment = async () => {
    if (!comment?.content.trim()) return;
    await axios.post(`${process.env.API_BASE}/posts/${postId}/comments`, {
      content: comment,
    });
    setComment(null);
    refreshPosts();
  };

  return <div className="mt-2">comment box</div>;
}
