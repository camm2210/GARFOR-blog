import Posts from "@/components/Posts";
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
      <div className="container d-flex">
        <Posts posts={posts} />
      </div>
    </>
  );
};

export default Blog;
