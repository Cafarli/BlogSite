import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import "./Footer.css";
import logo from "../../images/dailyTech.png";
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
  fontSize: "23px",
  mb:4
};
const privacyStyles = {
  fontSize: "16px",
  mr: 3,
  mb: 3,
  color: "black",
  textDecoration: "underline",
  textDecorationColor: "transparent",
  cursor: "pointer",
  "&:hover": {
    textDecorationColor: "#fb2576",
    textDecorationThickness: 2,
  },
};
const copyrightStyles ={
  fontSize: '14px',
  color: "#1a1a1a"
}

export default function Footer() {
  return (
    <div className="Footer">
      <div className="newsletter">
        <div style={{ width: "40%" }}>
          <Typography component="h3" variant="h3" sx={{ fontWeight: 500 }}>
            Newsletter
          </Typography>
          <Typography
            component="p"
            variant="p"
            sx={{ fontSize: "16px", mt: 3 }}
          >
            Get the latest posts delivered straight to your inbox.
          </Typography>
        </div>
        <div style={{ width: "50%" }}>
          <TextField
            id="newsletterEmail"
            variant="outlined"
            label="Your email"
            InputProps={{
              sx: {
                width: "100%",
                pl: 2,
                borderTopRightRadius: "0px",
                borderBottomRightRadius: "0px",
                borderTopLeftRadius: "50px",
                borderBottomLeftRadius: "50px",
                color: "black",
              },
            }}
          />
          <Button
            variant="text"
            sx={{
              width: "30%",
              backgroundColor: "#fb2576",
              color: "white",
              height: "56px",
              borderTopRightRadius: "50px",
              borderBottomRightRadius: "50px",
              borderTopLeftRadius: "0px",
              borderBottomLeftRadius: "0px",
              "&:hover": {
                backgroundColor: "#f76ea2",
              },
            }}
          >
            Subscribe
          </Button>
        </div>
      </div>
      <Grid container sx={{pr:4, pl:4,mt:6,mb:6}}>
        {/* LOGO */}
        <Grid item md={4}>
          <Box component="img" src={logo} sx={{height:"70%", width:"50%"}} />
        </Grid>
        {/* LEGAL */}
        <Grid item md={4}>
            <Typography
              component="p"
              variant="p"
              sx={[titleStyles]}
            >
              Legal
            </Typography>
          <div className="privacy" style={{ display: "flex", flexDirection: 'column' }}>
            <Typography component="p" variant="p" sx={privacyStyles}>
              Privacy Policy
            </Typography>
            <Typography component="p" variant="p" sx={privacyStyles}>
              Terms and conditions
            </Typography>
            <Typography component="p" variant="p" sx={privacyStyles}>
              Help
            </Typography>
          </div>
        </Grid>
        {/* FOLLOW US */}
        <Grid item md={4} sx={{ display: "flex", justifyContent:'center' }}>
          <div className="follow-us">
            <Typography
              component="p"
              variant="p"
              sx={[titleStyles]}
            >
              Follow us
            </Typography>
            <Box sx={{ display: "flex", justifyContent:'center' }}>
              <Avatar sx={{ mr: 2, color: "#1877f2", bgcolor: "#eff1f4" }}>
                <GrFacebookOption />
              </Avatar>
              <Avatar sx={{ mr: 2, color: "black", bgcolor: "#eff1f4" }}>
                <GrGithub />
              </Avatar>
              <Avatar sx={{ mr: 2, color: "#1da1f2", bgcolor: "#eff1f4" }}>
                <GrTwitter />
              </Avatar>
              <Avatar sx={{ mr: 2, color: "#c13584", bgcolor: "#eff1f4" }}>
                <GrInstagram />
              </Avatar>
            </Box>
          </div>
        </Grid>
      </Grid>
      <div className="copyrightBox">
        <Typography component="p" variant="p" sx={copyrightStyles}>Copyright © {new Date().getFullYear()} </Typography>
        <Typography component="p" variant="p"sx={copyrightStyles}>Powered by T.Jafarli</Typography>
      </div>
    </div>
  );
}
