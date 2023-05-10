import React from "react";
import { useState, useEffect } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import LittleBlogCard from "../LittleBlogCard/LittleBlogCard";
import Tags from "../../components/Tags/Tags";
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
    fetch("http://localhost:4000/'blogs")
      .then((response) => response.json())
      .then((json) => setBlogs(json));
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
        {blogs.slice(0, 3).map((blog, id) => (
          <LittleBlogCard key={id} data={blog} />
        ))}
        
          <Typography
            component="p"
            variant="p"
            sx={titleStyles}
          >
            Follow us
          </Typography>
        <div className="follow-us">
          <Box sx={{ display: "flex" }}>
            <Avatar sx={{ mr: 1, color: "#1877f2", bgcolor: "#eff1f4" }}>
              <GrFacebookOption />
            </Avatar>
            <Avatar sx={{ mr: 1, color: "black", bgcolor: "#eff1f4" }}>
              <GrGithub />
            </Avatar>
            <Avatar sx={{ mr: 1, color: "#1da1f2", bgcolor: "#eff1f4" }}>
              <GrTwitter />
            </Avatar>
            <Avatar sx={{ mr: 1, color: "#c13584", bgcolor: "#eff1f4" }}>
              <GrInstagram />
            </Avatar>
          </Box>
        </div>
          <Typography component="p" variant="p" sx={titleStyles}>
            Tags
          </Typography>
        <Tags />
        <div className="privacy" style={{display: "flex"}}>
          <Typography component="p" variant="p" sx={privacyStyles} >
            About
          </Typography>
          <Typography component="p" variant="p" sx={privacyStyles} >
            Privacy Policy
          </Typography>
          <Typography component="p" variant="p" sx={privacyStyles} >
            Terms and conditions
          </Typography>
          <Typography component="p" variant="p" sx={privacyStyles} >
            Help
          </Typography>
        </div>
      </div>
    </div>
  );
}
