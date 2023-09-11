import { Card, CardContent, CardMedia, Box } from "@mui/material";
import { Typography } from "@mui/material";
// icons
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import { Link } from "react-router-dom";

export default function LittleBlogCard(props) {
  return (
    <Card
    className="LittleBlogCard"
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        border: "none",
        boxShadow: "none",
        m: 1,
        backgroundColor: "transparent",
      }}
    >
      <Link to={props.data.blogID} style={{ width: "25%", height: "90px" }}>
        <CardMedia
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "20px",
            "&:hover": {
              transform: "scale(1.01)",
            },
          }}
          component="img"
          image={props.data.imageUrl}
          alt="add to json file"
        />
      </Link>
      <CardContent sx={{ width: "70%" }}>
        <Link to={props.data.blogID} style={{textDecoration: "none"}}>
        <Typography
          component="p"
          variant="p"
          sx={{
            fontSize: "16px",
            color: "white",
            textDecoration: "underline",
            textDecorationColor: "transparent",
            transition: "all 0.5s",
            cursor: "pointer",
            "&:hover": {
              textDecorationColor: "white",
            },
          }}
        >
          {props.data.blogName}
        </Typography></Link>
        <Box
          className="lbc-detail"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
            color: "#cfd0d4",
          }}
        >
          <Typography
            component="p"
            variant="p"
            sx={{ display: "flex", alignItems: "center", fontSize: "14px" }}
          >
            <WatchLaterOutlinedIcon sx={{ fontSize: "15px", mr: 0.5 }} />
            {props.data.blogReadMin} min read
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
