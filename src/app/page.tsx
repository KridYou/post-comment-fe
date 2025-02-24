import Searchbar from "@/components/Searchbar";
import { PostList } from "./posts/PostList";

const HomePage = () => {
  return (
    <div className="w-full">
      <div className="fixed flex items-center justify-center h-[40px] mt-[30px] mb-[20px]">
        <Searchbar />
      </div>
      <div className="flex-1 flex flex-col pt-[90px] ">
        <PostList />
      </div>
    </div>
  );
};

export default HomePage;
