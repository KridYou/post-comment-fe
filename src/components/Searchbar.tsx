"use client";
import Link from "next/link";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

const Searchbar = () => {
  const [rotated, setRotated] = useState(false);
  return (
    <>
      <div className="flex-1 w-[535px] border border-2 border-gray-300 rounded-md">
        <form className="flex">
          <div className="flex justify-center items-center px-2 text-xl">
            <CiSearch />
          </div>
          <input
            type="text"
            placeholder="Search"
            // value={query}
            // onChange={(e) => setQuery(e.target.value)}
            className="flex-grow p-2 border-none focus:outline-none rounded-lg"
          />
        </form>
      </div>
      <div className="flex w-[215px] justify-between h-full">
        <button
          className="w-[105px] flex justify-center items-center"
          onClick={() => setRotated(!rotated)}
          aria-expanded={rotated}
        >
          <p>Community</p>
          <RiArrowDropDownLine
            className={`text-2xl transition-transform duration-300 ${
              rotated ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
        <button className="w-[105px] flex justify-center items-center rounded-md bg-Green-Success">
          <p>Create +</p>
        </button>
      </div>
    </>
  );
};

export default Searchbar;
