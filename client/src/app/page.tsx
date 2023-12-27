"use client";

import React from "react";
import { useGetPostsQuery } from "@/redux/services/postsAPI";
import BlogSection from "@/components/Components/BlogSection";
import Loader from "@/components/UI/Loaders/Loader";
import ContactForm from "@/components/Components/ContactForm";

function page() {
  const { data, isFetching, error } = useGetPostsQuery(null);

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#f7f7f7] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              El deporte, una fuente de pasión
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              El deporte es pasión, superación y salud. En este blog, te cuento
              todo sobre el olimpismo, el atletismo y la educación física.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/blog"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Blog
              </a>
              <a
                href="/libros"
                className="text-sm font-semibold leading-6 text-gray-900 "
              >
                Mis libros sobre el deporte <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <a href="/blog">
              <p className="font-semibold hover:underline z-10 mt-2 text-lg leading-8 text-gray-600 ">
                Blogs recientes
              </p>
            </a>
          </div>
          {isFetching ? (
            <div className="flex justify-center pt-[200px]">
              <Loader />
            </div>
          ) : (
            <BlogSection data={data} />
          )}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default page;
