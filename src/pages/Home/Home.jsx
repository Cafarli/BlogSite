import "./Home.css";
import BlogCard from "../BlogCard/BlogCard";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import LittleBlogCard from "../LittleBlogCard/LittleBlogCard";
// icons
import { TbPointFilled } from "react-icons/tb";


// category styles
const categoryStyles = {
  "& > .Nature": {
    color: "green",
  },
  "& > .Technology": {
    color: "#f18509",
  },
  "& > .Inspiration": {
    color: "#04baf6",
  },
  "& > .Food": {
    color: "#B43ADF",
  },
  "& > .Health": {
    color: "#1dbf2f",
  },
  "& > .Lifestyle": {
    color: "#4d61ff",
  },
  "& > .Travel": {
    color: "#E10689",
  },
};


export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState([
    "Travel",
    "Technology",
    "Food",
    "Health",
    "Nature",
    "Lifestlye",
    "Inspiration",
  ]);

  useEffect(() => {
    fetch("http://localhost:4000/'blogs")
      .then((response) => response.json())
      .then((json) => setBlogs(json));
  }, []);

  return (
    <div className="Home">
      <div className="blogs">
        {blogs.map((blog, id) => (
          <BlogCard key={id} data={blog} />
        ))}
      </div>
      <div className="latestBlogs">
        <Typography
          component="p"
          variant="p"
          sx={{ fontSize: " 22px", fontWeight: "500" }}
        >
          Latest posts
        </Typography>
        {blogs.slice(0, 3).map((blog, id) => (
          <LittleBlogCard key={id} data={blog} />
        ))}
          <Typography
            component="p"
            variant="p"
            sx={{ fontSize: " 22px", fontWeight: "500", mt: 6, mb:4 }}
          >
            Tags
          </Typography>
        <div className="home-tags">
          {tags.map((tag, ind) => (
            <Typography
              key={ind}
              variant="p"
              component="p"
              className="blogCategory"
              sx={[categoryStyles, {
                pb: 1,
                pr: 2,
                pt: 0.5,
                pl: 1,
                m: 1,
                width: "max-content",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                borderRadius: "15px",
                backgroundColor: "#ebebeb",
                transition: "all 0.5s",
                "&:hover": {
                  backgroundColor: "#d4d6d5",
                },
              }]}
            >
              <TbPointFilled className={tag} />
              {tag}
            </Typography>
          ))}
        </div>
      </div>
    </div>
  );
}
