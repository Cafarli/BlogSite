import { Box, TextField, Typography, Button } from "@mui/material";
import bg from "../../images/loginImage.jpg";
import logo from "../../images/dailyTechSmall.png";
import { Link } from "react-router-dom";

export default function SignUp() {
  const boxStyle = {
    width: "35%",
    backgroundColor: "white",
    margin: "3% auto",
    position: "relative",
    p: "4% 3%",
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
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: 'url("https://media.istockphoto.com/id/1177726999/photo/bonneville-salt-flats-abstract-bokeh-view-of-mountains-silhouette-and-sunset-sunlight-circles.jpg?s=612x612&w=0&k=20&c=Q6W3rc7vcOND28xHegcrf2iF5p9nC9emaAFfisPm4wQ=")'
      }}
    >
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
          Sign Up
        </Typography>
        <form sx={{ width: "100%" }}>
          <TextField
            label="Enter email"
            type="email"
            variant="outlined"
            sx={{ display: "block", width: "100%", m: "5% 0" }}
            InputProps={{
              sx: inputStyles,
            }}
            InputLabelProps={{
              style: labelStyles,
            }}
            required
          />
          <TextField
            label="Enter password"
            type="password"
            variant="outlined"
            sx={{ display: "block", width: "100%", m: "5% 0" }}
            InputProps={{
              sx: inputStyles,
            }}
            InputLabelProps={{
              style: labelStyles,
            }}
            required
          />
          <TextField
            label="Enter password again"
            type="password"
            variant="outlined"
            sx={{ display: "block", width: "100%", m: "5% 0" }}
            InputProps={{
              sx: inputStyles,
            }}
            InputLabelProps={{
              style: labelStyles,
            }}
            required
          />
          <Button
          type="submit"
            sx={{
              width: "40%",
              backgroundColor: "#191970",
              color: "white",
              p: "3% 0",
              m: "2% 0 0 0",
              borderRadius: "30px",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
          >
            Sign Up
          </Button>
        </form>
        <Typography sx={{ fontSize: "14px", m: "7% auto 0 auto", color:"gray", }}>
          Do you have an account? <Link to="/login" style={{ color:"#191970", textDecoration:"none", }}>Login</Link>
        </Typography>
      </Box>
    </div>
  );
}
