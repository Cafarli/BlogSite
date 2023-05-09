import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import photo from "../../images/blogImg.jpg";
import { Typography, createTheme } from "@mui/material";
// icons
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { TbPointFilled } from "react-icons/tb";

// common styles
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

export default function BlogCard(props) {
  const theme = createTheme({
    spacing: 10,
  });

  return (
    <Card
      variant="outlined"
      sx={{ p: 2,mt:2 , mb:4 , display: "flex",alignItems: "center", width: "100%", borderRadius: "20px" }}
    >
      {/* Blog image */}
      <CardMedia
        sx={{
          width: "37%",
          height: "300px",
          borderRadius: "20px",
          "&:hover": {
            transform: "scale(1.01)",
          },
        }}
        component="img"
        image={props.data.imageUrl}
        alt="Space"
      />
      <Box sx={{ display: "flex", width: "60%", p: 2}}>
        <CardContent sx={{ flex: "1 0 auto", width: "100%" }}>
          {/* category */}
          <Typography
            variant="p"
            component="p"
            className="blogCategory"
            sx={[
              categoryStyles,
              {
                pb: 1,
                pr: 2,
                pt: 0.5,
                pl: 1,
                mb: 2,
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
              },
            ]}
          >
            <TbPointFilled className={props.data.category} />{" "}
            {props.data.category}
          </Typography>
          {/* Blog Title */}
          <Typography
            sx={{
              font: "bold",
              cursor: "pointer",
              textDecorationColor: "transparent",
              textDecorationThickness: 1,
              textUnderlineOffset: "3px",
              "&:hover": {
                textDecoration: "underline",
                textDecorationThickness: 2,
                textDecorationColor: "blue",
              },
            }}
            variant="h4"
          >
            {props.data.blogName}
          </Typography>
          <Typography
            variant="p"
            component="p"
            sx={{
              mb: 2,
              mt: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {props.data.content}
          </Typography>
          <Box
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
