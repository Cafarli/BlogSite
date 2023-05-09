import { Card, CardContent, CardMedia, Box } from "@mui/material";
import { Typography } from "@mui/material";
// icons
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";

export default function LittleBlogCard(props) {
  return (
    <Card
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        border: "none",
        boxShadow: "none",
        m: 1,
      }}
    >
      <CardMedia
        sx={{
          width: "25%",
          height: "90px",
          borderRadius: "20px",
          "&:hover": {
            transform: "scale(1.01)",
          },
        }}
        component="img"
        image={props.data.imageUrl}
        alt="add to json file"
      />
      <CardContent sx={{width:"70%"}}>
        <Typography
          component="p"
          variant="p"
          sx={{
            fontSize: "16px",
            textDecoration: "underline",
            textDecorationColor: "transparent",
            transition: "all 0.5s",
            cursor: "pointer",
            "&:hover": {
              textDecorationColor: "red",
            },
          }}
        >
          {props.data.blogName}
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
            color: "gray",
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
