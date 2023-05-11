import "./Home.css";
import BlogCard from "../BlogCard/BlogCard";
import { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import data from '../../data/blogs.json'
import { Outlet } from "react-router-dom";

export default function Home() {
  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    setBlogs(data["'blogs"])
  }, []);
  console.log(blogs);
  return (
    <div className="Home">
      <div className="blogs">
        {blogs.slice(0,5).map((blog, id) => (
          <BlogCard key={id} data={blog} />
        ))}
      </div>
      <div className="home-side">
        <Sidebar />
      </div>
      <Outlet/>
    </div>
  );
}
