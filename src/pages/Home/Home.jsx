import "./Home.css";
import BlogCard from "../BlogCard/BlogCard";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import LittleBlogCard from "../LittleBlogCard/LittleBlogCard";

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
          <Typography component="p" variant="p" sx={{fontSize:" 22px", fontWeight:"500"}}>Latest posts</Typography>
        {blogs.slice(0,3).map((blog,id) => (
          <LittleBlogCard key={id} data={blog}/>
        ))}
        </div>
    </div>
  );
}
// export const blogLoader = async () => {
//   const res = await fetch("http://localhost:4000/'blogs");
//   return res.json();
// };
