import { Box, Paper, Typography, InputBase, IconButton } from "@mui/material";
import logo from "../../images/daillyTechWhite.png";
import { Link } from "react-router-dom";
// icons
import { BiMoon } from "react-icons/bi";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
    const linkStyles = {
        textDecoration: "none",
        color: "white",
        fontSize: "18px",
    }
  return (
    <div style={{ width: "90%", display: "flex", alignItems:"center" , backgroundColor:"#262626", padding:"2% 5%", margin:"0 0 4% 0" }} className="Header">
      <Box
        sx={{ width: "40%", display: "flex", justifyContent: "space-around" }}
      >
        <Link style={linkStyles}>
          <Typography>Home</Typography>
        </Link>
        <Link style={linkStyles}>
          <Typography>Categories</Typography>
        </Link>
        <Link  style={linkStyles}>
          <Typography>Contact</Typography>
        </Link>
      </Box>
      <Box sx={{ width: "20%", display: "flex", alignItems: "center" }}>
        <img
          alt="logo"
          src={logo}
          style={{ objectFit: "cover", width: "50%", margin: "0 auto" }}
        />
      </Box>
      <Box
        sx={{ width: "40%", display: "flex", justifyContent: "space-around" }}
      >
      <Link style={linkStyles}>
          <Typography>Sign Up</Typography>
        </Link>
        <Link style={linkStyles}>
          <Typography>
            <BiMoon style={{ fontSize: "20px" }} />
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
