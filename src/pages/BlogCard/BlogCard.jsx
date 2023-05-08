import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import photo from "../../images/blogImg.jpg";
import { Typography } from "@mui/material";
// icons
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { TbPointFilled } from "react-icons/tb";
// common styles
const commonStyles = {
  bgcolor: "background.paper",
  m: 1,
  border: 1,
  width: "5rem",
  height: "5rem",
};

export default function BlogCard() {
  const theme = {
    spacing: 10,
  };
  return (
    <Card
      variant="outlined"
      sx={{ p: 2, display: "flex", width: "100%", borderRadius: '20px' }}
    >
      <CardMedia
        sx={{ width: "37%", borderRadius: '20px', transformOrigin: 'center', '&:hover':{
            transform: 'scale(1.01)'
        } }}
        component="img"
        image={photo}
        alt="Space"
      />
      <Box sx={{ display: "flex", width: "60%", p: 1 }}>
        <CardContent sx={{ flex: "1 0 auto", width: "100%" }}>
          <Typography variant="p" component="p" sx={{ pb: 0.5, pr:1, pt:0.5, pl:1, mb:2, width:'15%', display:'flex', alignItems: 'center', justifyContent: 'space-around' , borderRadius: "15px", backgroundColor: '#ebebeb','&:hover':{
            backgroundColor: '#cbe8f5'
          } }}>
            <TbPointFilled style={{color: 'blue'}} /> Nature
          </Typography>
          <Typography
            sx={{
              font: "bold",
              cursor:'pointer',
              textDecorationColor: "transparent",
              textDecorationThickness: 1,
              textUnderlineOffset: "3px",
              transition: 'all .020s',
              "&:hover": {
                textDecoration: "underline",
                textDecorationThickness: 2,
                textDecorationColor: "blue",
              },
            }}
            variant="h4"
          >
            Autumn is a second spring when every leaf is a flower
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
            She then expatiated very warmly upon the advantages I should reap
            from her plan; talked in a high style of my future grandeur; assured
            me how heartily I should despise almost
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
              May 8, 2023
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "14px",
                color: "gray",
              }}
            >
              <WatchLaterOutlinedIcon sx={{ pr: 1, fontSize: "18px" }} />2 min
              read
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
