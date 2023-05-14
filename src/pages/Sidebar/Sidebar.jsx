import React from "react";
import { useState, useEffect } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import LittleBlogCard from "../LittleBlogCard/LittleBlogCard";
import Tags from "../../components/Tags";
import data from '../../data/blogs.json'


const titleStyles = {
  color: "white",
  fontWeight: "700",
  fontSize: "22px",
  margin: "3% 0 4% 5%"
};

export default function Sidebar() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(data["'blogs"])
  }, []);

  return (
    <div className="Sidebar">
      <div className="latestBlogs">
        <Typography
          component="p"
          variant="p"
          sx={titleStyles}
        >
          Latest posts
        </Typography>
        {blogs.slice(5,7).map((blog, id) => (
          <LittleBlogCard key={id} data={blog} />
        ))}         
          <Typography component="p" variant="p" sx={titleStyles}>
            Tags
          </Typography>
        <Tags />
       
      </div>
    </div>
  );
}
