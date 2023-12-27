import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = process.env.NEXT_PUBLIC_BACKEND_URL;

console.log(URL);

type Post = {
  _id: string;
  title: string;
  author: string;
  description: string;
  content: string;
  image: string;
};

export const postAPI = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], null>({
      query: () => "posts",
    }),
  }),
});

export const { useGetPostsQuery } = postAPI;
