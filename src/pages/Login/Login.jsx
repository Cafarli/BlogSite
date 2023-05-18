import { Box, TextField, Typography, Button } from "@mui/material";
import bg from "../../images/loginImage.jpg";
import logo from "../../images/dailyTechSmall.png";
import { Link } from "react-router-dom";

export default function Login() {
  const boxStyle = {
    width: "35%",
    backgroundColor: "white",
    margin: "3% auto 0 auto",
    position: "relative",
    p: "5% 3%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    borderRadius: "30px",
    boxShadow: "0 1px 15px rgba(0,0,0,0.15)",
  };
  const inputStyles = {
    color: "black",
    width: "100%",
    borderColor: "red",
    borderRadius: "30px",
    pl: "5%",
    "&:focus": {
      borderColor: "red",
      color: "black",
    },
  };
  const labelStyles = {
    color: "black",
    "&:focus": {
      borderColor: "red",
      color: "black",
    },
  };
  return (
    <div
      className="Login"
      style={{
        width: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        objectFit: "cover",
      }}
    >
      <img
        alt="background"
        src={bg}
        style={{ position: "absolute", width: "100%" }}
      />
      <Box sx={boxStyle}>
        <img
          alt="logo"
          src={logo}
          style={{ width: "12%", margin: "3% auto" }}
        />
        <Typography
          sx={{
            fontSize: "35px",
            fontWeight: "bold",
            margin: "3% auto",
            color: "#191970",
          }}
        >
          Login
        </Typography>
        <Box sx={{ width: "100%" }}>
          <TextField
            label="Your name"
            variant="outlined"
            sx={{ display: "block", width: "100%", m: "5% 0" }}
            InputProps={{
              sx: inputStyles,
            }}
            InputLabelProps={{
              style: labelStyles,
            }}
          />
          <TextField
            label="Your email"
            variant="outlined"
            sx={{ display: "block", width: "100%", m: "5% 0" }}
            InputProps={{
              sx: inputStyles,
            }}
            InputLabelProps={{
              style: labelStyles,
            }}
          />
          <Button
            sx={{
              width: "40%",
              backgroundColor: "#191970",
              color: "white",
              p: "3% 0",
              m: "4% 0 0 0",
              borderRadius: "30px",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
          >
            Login
          </Button>
        </Box>
        <Typography sx={{ fontSize: "14px", m: "7% auto 0 auto", color:"gray", }}>
          Don't you have an account? <Link to="/sign-in" style={{ color:"#191970", textDecoration:"none", }}>Sign In</Link>
        </Typography>
      </Box>
    </div>
  );
}
