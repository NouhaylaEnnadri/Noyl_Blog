import React from "react";
import { Category, PostCard, PostWidget } from "@/components";

export default function Home() {
  return (
    <>
      <div className=" rounded- mt-4 mb-8 mx-4 sm:mx-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Section */}
          <div className=" bg-accent  rounded-3xl lg:col-span-2 col-span-1 border-r border-gray-300 lg:sticky lg:top-16">
            <div className="rounded-lg p-4 lg:sticky lg:top-16">
              <h2 className="text-lg hidden lg:block font-semibold border-b border-gray-200 pb-2 mb-4">
                Topics
              </h2>
              <Category />
            </div>
          </div>

          {/* Main Content and Right Section */}
          <div className=" bg-indigo-400 rounded-3xl lg:col-span-10 col-span-1 flex flex-col lg:flex-row gap-6">
            {/* Main Posts Section */}
            <div className="lg:w-3/5 p-4 sm:p-6 space-y-6">
              {/* Search Bar for Smaller Screens */}
              <div className="lg:hidden mb-4">
                <label className="input input-bordered input-secondary flex items-center gap-2">
                  <input type="text" className="grow" placeholder="Search" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>

              {/* Post Cards */}
              <PostCard />
            </div>

            {/* Right Section */}
            <div className="bg-secondary lg:w-2/5 p-4 border-l border-gray-300 flex flex-col">
              {/* Sticky Search Bar */}
              <div className="sticky top-16 p-4 shadow-md mb-4 bg-white">
                <label className="input input-bordered input-secondary flex items-center gap-2">
                  <input type="text" className="grow" placeholder="Search" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>

              <div className="p-4 rounded-lg shadow-md border-gray-300 flex-grow overflow-y-auto">
                <PostWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
