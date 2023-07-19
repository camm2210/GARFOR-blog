import NavBar from "@/components/NavBar";
import Posts from "@/components/posts";
import axios from "axios";
import { API } from "../../config";

const data = async () => {
  const blog = await axios.get(`${API}posts`);
  return blog.data;
};

const Blog = async () => {
  const posts = await data();

  return (
    <>
      <NavBar />
      <Posts posts={posts} />
    </>
  );
};

export default Blog;
