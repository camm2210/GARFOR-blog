"use client";
import React from "react";
import { useGetPostsQuery } from "@/redux/services/postsAPI";
import Loader from "@/components/UI/Loaders/Loader";
import Blogcard from "@/components/Components/Blogcard";
import SearchBar from "@/components/UI/SearchBar/SearchBar";

function Blog() {
  const { data, isFetching, error } = useGetPostsQuery(null);

  return (
    <div className="bg-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Artículos de interés sobre Atletismo y Olimpismo
          </p>
        </div>
        <div className="z-40">
          <SearchBar />
        </div>
        {isFetching ? (
          <div className="flex justify-center pt-[200px]">
            <Loader />
          </div>
        ) : (
          <div className="z-10">
            <Blogcard data={data} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog;
