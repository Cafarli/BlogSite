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
import { Link } from "react-router-dom";

const titleStyles = {
  fontWeight: "700",
  fontSize: "23px",
  mb: 4,
};
const privacyStyles = {
  fontSize: "16px",
  mr: 3,
  mb: 3,
  color: "black",
  textDecoration: "underline",
  textDecorationColor: "transparent",
  left: "50%",
  transition: "all 0.5s ease",
  cursor: "pointer",
  "&:hover": {
    textDecorationColor: "black",
    textDecorationThickness: 2,
    left: "0%",
  },
};
const copyrightStyles = {
  fontSize: "14px",
  color: "white",
};

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
                color: "white",
                "&:focus": {
                  color: "white",
                },
              },
            }}
            InputLabelProps={{
              style: {
                color: "white",
                "&:focus": {
                  color: "white",
                },
              },
            }}
          />
          <Button
            variant="text"
            sx={{
              width: "30%",
              backgroundColor: "black",
              color: "white",
              height: "56px",
              borderTopRightRadius: "50px",
              borderBottomRightRadius: "50px",
              borderTopLeftRadius: "0px",
              borderBottomLeftRadius: "0px",
              "&:hover": {
                backgroundColor: "#E0EDF5",
                color: "black",
              },
            }}
          >
            Subscribe
          </Button>
        </div>
      </div>
      <Grid
        className="footer-second"
        container
        sx={{ pr: 4, pl: 4, mt: 6, mb: 6 }}
      >
        {/* LOGO */}
        <Grid item md={4}>
          <Box
            component="img"
            src={logo}
            sx={{ height: "70%", width: "50%" }}
          />
        </Grid>
        {/* LEGAL */}
        <Grid
          item
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center ",
          }}
        >
          <Typography component="p" variant="p" sx={[titleStyles]}>
            Legal
          </Typography>
          <div
            className="privacy"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Link to="/privacy">
              <Typography component="p" variant="p" sx={privacyStyles}>
                Privacy Policy
              </Typography>
            </Link>
            <Link to="/terms">
              <Typography component="p" variant="p" sx={privacyStyles}>
                Terms and conditions
              </Typography>
            </Link>
            <Link to="/contact">
              <Typography component="p" variant="p" sx={privacyStyles}>
                Contact
              </Typography>
            </Link>
          </div>
        </Grid>
        {/* FOLLOW US */}
        <Grid item md={4} sx={{ display: "flex", justifyContent: "center" }}>
          <div className="follow-us">
            <Typography component="p" variant="p" sx={[titleStyles]}>
              Follow us
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                className="footer-avatar facebook"
                sx={{ mr: 2, color: "#1877f2" }}
              >
                <GrFacebookOption />
              </Avatar>
              <Avatar className="footer-avatar github" sx={{ mr: 2, color: "black" }}>
                <GrGithub />
              </Avatar>
              <Avatar
                className="footer-avatar twitter"
                sx={{ mr: 2, color: "#1da1f2" }}
              >
                <GrTwitter />
              </Avatar>
              <Avatar
                className="footer-avatar insta"
                sx={{ mr: 2, color: "#c13584" }}
              >
                <GrInstagram />
              </Avatar>
            </Box>
          </div>
        </Grid>
      </Grid>
      <div className="copyrightBox">
        <Typography component="p" variant="p" sx={copyrightStyles}>
          Copyright © {new Date().getFullYear()}{" "}
        </Typography>
        <Typography component="p" variant="p" sx={copyrightStyles}>
          Powered by T.Jafarli
        </Typography>
      </div>
    </div>
  );
}
