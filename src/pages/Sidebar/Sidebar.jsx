import React from "react";
import { useState, useEffect } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import LittleBlogCard from "../LittleBlogCard/LittleBlogCard";
import Tags from "../../components/Tags/Tags";
import data from '../../data/blogs.json'
// icons
import {
  GrFacebookOption,
  GrTwitter,
  GrInstagram,
  GrGithub,
} from "react-icons/gr";

const titleStyles = {
  color: "black",
  fontWeight: "700",
  fontSize: "22px",
  mt: 5,
  mb: 2
};
const privacyStyles = {
  fontSize: "14px",
  color: "gray",
  mr: 3,
  mt: 5,
  textDecoration: "underline",
  textDecorationColor: "transparent",
  cursor: "pointer",
  "&:hover": {
    textDecorationColor: "#fb2576",
    textDecorationThickness: 2,
  },
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
