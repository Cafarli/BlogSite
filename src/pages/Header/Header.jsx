import {
  Box,
  Paper,
  Typography,
  InputBase,
  IconButton,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import logo from "../../images/daillyTechWhite.png";
import { Link } from "react-router-dom";
// icons
import React, { useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  const linkStyles = {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
  };

  const textStyles = {
    fontSize: "17px",
    color: "white",
  };
  const categoryTextStyles = {
    fontSize: "15px",
    color: "black",
    width: "100%",
  };

  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(event) {
    console.log(event.currentTarget);
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  // light/dark mode
  const [day, setDay] = useState("sun");
  function handleDay() {
    if (day === "sun") {
      setDay("moon");
      document.body.classList.add("dark");
    } else {
      setDay("sun");
      document.body.classList.remove("dark");
    }
  }

  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        alignItems: "center",
        boxShadow: "0 5px 10px",
        padding: "2% 5%",
        margin: "0 0 4% 0",
        position: "sticky",
        top: "0px",
        zIndex: "1000",
      }}
      className="Header"
    >
      <Box
        sx={{
          width: "40%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Link style={linkStyles} to="/">
          <Typography sx={textStyles}>Home</Typography>
        </Link>

        <Button
          sx={textStyles}
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          onMouseOver={handleClick}
        >
          Categories
        </Button>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{ onMouseLeave: handleClose }}
          sx={{ columnCount: 2 }}
        >
          <Link style={linkStyles}>
            <MenuItem onClick={handleClose} sx={categoryTextStyles}>
              Technology
            </MenuItem>
          </Link>
          <Link style={linkStyles}>
            <MenuItem onClick={handleClose} sx={categoryTextStyles}>
              Travel
            </MenuItem>
          </Link>
          <Link style={linkStyles}>
            <MenuItem onClick={handleClose} sx={categoryTextStyles}>
              Health
            </MenuItem>
          </Link>
          <Link style={linkStyles}>
            <MenuItem onClick={handleClose} sx={categoryTextStyles}>
              Nature
            </MenuItem>
          </Link>
          <Link style={linkStyles}>
            <MenuItem onClick={handleClose} sx={categoryTextStyles}>
              Lifestyle
            </MenuItem>
          </Link>
          <Link style={linkStyles}>
            <MenuItem onClick={handleClose} sx={categoryTextStyles}>
              Inspirataion
            </MenuItem>
          </Link>
        </Menu>
      </Box>
      <Box sx={{ width: "20%", display: "flex", alignItems: "center" }}>
        <Link to="sign-up" style={{width: "40%", margin: "0 auto"}}>
        <img
          alt="logo"
          src={logo}
          style={{ objectFit: "cover", width: "100%" }}
        /></Link>
      </Box>
      <Box
        sx={{
          width: "40%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Link style={linkStyles} to="sign-up">
          <Typography sx={textStyles}>Sign Up</Typography>
        </Link>
        <Link style={linkStyles}>
          <Typography>
            {day === "sun" ? (
              <BiSun onClick={handleDay} style={{ fontSize: "20px" }} />
            ) : (
              <BiMoon onClick={handleDay} style={{ fontSize: "20px" }} />
            )}
          </Typography>
        </Link>
        <Paper>
          <InputBase
            sx={{ ml: 1 }}
            placeholder="Search posts, tags ... "
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>
    </div>
  );
}
