import React from "react";

type Post = {
  _id: string;
  title: string;
  author: string;
  description: string;
  content: string;
  image: string;
};

function BlogSection(data: any) {
  const posts = data.data;

  return (
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {posts.map((post: Post) => (
        <div
          key={post._id}
          className="flex max-w-xl flex-col hover:scale-105 items-start justify-between"
        >
          <div>
            <img
              className="w-[50%] rounded-lg "
              src={post.image}
              alt="imagen"
            ></img>

            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                <a>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                {post.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogSection;
