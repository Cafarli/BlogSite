import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
// icons
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link } from "react-router-dom";
import SingleTag from "../../components/SingleTag";



export default function BlogCard(props) {


  return (
    <Card
      className="blogCard"
      variant="outlined"
      sx={{
        pr: 3,
        pl: 3,
        mt: 2,
        mb: 4,
        display: "flex",
        alignItems: "center",
        width: "95%",
        borderRadius: "20px",
      }}
    >
      {/* Blog image */}
      <CardMedia
        sx={{
          width: "35%",
          height: "200px",
          borderRadius: "20px",
          "&:hover": {
            transform: "scale(1.01)",
          },
        }}
        component="img"
        image={props.data.imageUrl}
        alt="Space"
      />
      <Box sx={{ display: "flex", width: "60%", p: 2 }}>
        <CardContent sx={{ flex: "1 0 auto", width: "100%" }}>
          {/* category */}
          <SingleTag category={props.data.category}/>
          {/* Blog Title */}
          <Link
            to={`/blogs/${props.data.blogID}`}
            className="blogTitle"
            style={{
              font: "bold",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <Typography
              sx={{
                textDecorationColor: "transparent",
                textDecorationThickness: 1,
                textUnderlineOffset: "3px",
                transition: "all 1s",
                transitionTimingFunction: "ease-in-out",
                "&:hover": {
                  textDecoration: "underline",
                  textDecorationThickness: 2,
                  textDecorationColor: "#0181B0",
                },
              }}
              variant="h5"
            >
              {props.data.blogName}
            </Typography>
          </Link>
          <Typography
            variant="p"
            component="p"
            sx={{
              mb: 2,
              mt: 2,
              overflow: "hidden",
              whiteSpace: "nowrap",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              textOverflow: "ellipsis",
            }}
          >
            {props.data.content}
          </Typography>
          <Box
            className="blogCard-Detail"
            sx={{
              width: "60%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "14px",
                color: "gray",
              }}
            >
              <CalendarMonthIcon sx={{ pr: 1, fontSize: "18px" }} />
              {props.data.blogDate}
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "14px",
                color: "gray",
              }}
            >
              <WatchLaterOutlinedIcon sx={{ pr: 1, fontSize: "18px" }} />
              {props.data.blogReadMin} min read
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
