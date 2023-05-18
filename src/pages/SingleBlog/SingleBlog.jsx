import { Box, Typography } from "@mui/material";
import data from "../../data/blogs.json";
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
// icons
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { TbPointFilled } from "react-icons/tb";
import Share from "../../components/Share";
import SingleTag from "../../components/SingleTag";

export default function SingleBlog() {
  const { id } = useParams();

  const blogData = data["'blogs"].filter((blog) => blog.blogID === id)[0];
  const titleStyle = {
    fontSize: "30px",
    fontWeight: "bold",
    margin: "3% 0 0 0",
  };
  const addInfo = {
    color: "#808495",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    margin: "6% 0",
  };

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
    padding: "1% 2%",
    cursor: "pointer",
    margin: "6% 0 0% 0",
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
  };
  return (
    // SingleBlog css in App.css
    <div className="SingleBlog">
      <Box sx={{display:"flex", justifyContent:"space-between"}}>
        <Box
          sx={{
            width: "59%",
            backgroundColor: "white",
            p: "2% 1%",
            borderRadius: "30px",
          }}
        >
          <figure>
            <img
              style={{
                objectFit: "cover",
                width: "100%",
                borderRadius: "30px",
              }}
              src={blogData["imageUrl"]}
              alt={blogData["blogName"]}
            ></img>
            <figcaption
              style={{
                color: "#2d3350",
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              {blogData["blogName"]}
            </figcaption>
          </figure>
          <Box sx={{ width: "90%", margin: "auto" }}>
            <SingleTag category={blogData["category"]}/>
            <Typography sx={titleStyle}>{blogData["blogName"]}</Typography>
            <Box
              sx={{
                width: "60%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={addInfo}>
                <PersonOutlineIcon
                  sx={{ color: "#cfd0d4", fontSize: "21px", pr: "5px" }}
                />{" "}
                {blogData["blogger"]}
              </Typography>
              <Typography sx={addInfo}>
                <CalendarMonthIcon
                  sx={{ color: "#cfd0d4", fontSize: "21px", pr: "5px" }}
                />
                {blogData["blogDate"]}
              </Typography>
              <Typography sx={addInfo}>
                <WatchLaterOutlinedIcon
                  sx={{ color: "#cfd0d4", fontSize: "21px", pr: "5px" }}
                />{" "}
                {blogData["blogReadMin"]} min read
              </Typography>
            </Box>
            {blogData["content"].split("\n").map((data, index) => (
              <Typography key={index}>
                {data}
                <br />
                <br />
              </Typography>
            ))}
          </Box>
        </Box>
        <Box sx={{ width: "33%" }}>
          <Sidebar />
        </Box>
      </Box>
      <Share />
    </div>
  );
}
