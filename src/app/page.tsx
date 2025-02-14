import { PostList } from "./posts/PostList";

const HomePage = () => {
  return (
    <h1 className="text-3xl text-red-600 underline">
      <PostList />
    </h1>
  );
};

export default HomePage;
