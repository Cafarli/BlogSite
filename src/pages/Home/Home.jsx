import "./Home.css";
import BlogCard from "../BlogCard/BlogCard";
import { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";


export default function Home() {
  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    fetch("http://localhost:4000/'blogs")
      .then((response) => response.json())
      .then((json) => setBlogs(json));
  }, []);

  return (
    <div className="Home">
      <div className="blogs">
        {blogs.slice(1,3).map((blog, id) => (
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
