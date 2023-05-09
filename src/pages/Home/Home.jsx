import "./Home.css";
import BlogCard from "../BlogCard/BlogCard";
import { useState, useEffect } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/'blogs")
    .then(response => response.json())
    .then(json => setBlogs(json))
    }, []);


  return (
    <div className="Home">
      <div className="blogs">
        {blogs.map((blog,id) => (
          <BlogCard key={id} data={blog}/>
        ))}
        </div>
        <div className="latestBlogs">

        </div>
    </div>
  );
}
// export const blogLoader = async () => {
//   const res = await fetch("http://localhost:4000/'blogs");
//   return res.json();
// };
