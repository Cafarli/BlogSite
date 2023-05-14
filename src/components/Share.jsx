import { Typography, Avatar, Box } from "@mui/material";
// icons
import {
  GrFacebookOption,
  GrTwitter,
  GrInstagram,
} from "react-icons/gr";
import {RiWhatsappFill} from "react-icons/ri";
import {MdEmail} from "react-icons/md";
import {AiOutlineLink} from "react-icons/ai";

export default function Share() {
    const titleStyle = {
        fontSize: "20px",
        fontWeight: "bold",
        margin: "0 0 3% 0",
    }
  return (
    <div className="Share">
      <Typography sx={titleStyle} >Share this article</Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Avatar sx={{ mr: 3, color: "#1877f2", bgcolor: "#eff1f4" }}>
          <GrFacebookOption />
        </Avatar>
        <Avatar sx={{ mr: 3, color: "#1da1f2", bgcolor: "#eff1f4" }}>
          <GrTwitter />
        </Avatar>
        <Avatar sx={{ mr: 3, color: "#c13584", bgcolor: "#eff1f4" }}>
          <GrInstagram />
        </Avatar>
        <Avatar sx={{ mr: 3, color: "#075E54", bgcolor: "#eff1f4" }}>
          <RiWhatsappFill />
        </Avatar>
        <Avatar sx={{ mr: 3, color: "#4285F4", bgcolor: "#eff1f4" }}>
          <MdEmail />
        </Avatar>
        <Avatar sx={{ mr: 3, color: "#fb2576", bgcolor: "#eff1f4" }}>
          <AiOutlineLink />
        </Avatar>
      </Box>
    </div>
  );
}
