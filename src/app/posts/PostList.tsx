"use client";

import { useState, useEffect, useMemo } from "react";
import axios from "axios";
// import { Post } from "../../types/Post";
import { CommentBox } from "./CommentBox";
import { GetStaticProps } from "next";
import { RxAvatar } from "react-icons/rx";

type Post = {
  id: number;
  title: string;
  content: string;
};

type Data = {
  id: number;
  topic: string;
  category: string;
  content: string;
  created_by: string;
  avatar: string;
};

export function PostList() {
  const [data, setData] = useState<Data[]>([]);
  const [error, setError] = useState<string | null>(null);

  const posts = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      title: `Post Title ${i + 1}`,
      content: `This is the content of post ${i + 1}. It is a randomly generated text.`,
    }));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/posts", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    fetchData();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 gap-4 gap-y-4 min-h-screen bg-white">
      {data.map((data) => (
        <div key={data.id} className="border p-4 rounded-lg shadow-lg">
          <div className="flex">
            {data.avatar ? (
              <div>avatar</div>
            ) : (
              <div className="flex items-center justify-center mx-2">
                <RxAvatar />
              </div>
            )}
            <h1 className="text-xl font-semibold">{data.created_by}</h1>
          </div>
          <h2 className="text-xl font-semibold">{data.topic}</h2>
          <p className="text-gray-600">{data.category}</p>
          <p className="text-gray-600">{data.content}</p>
        </div>
      ))}
    </div>
  );
}
