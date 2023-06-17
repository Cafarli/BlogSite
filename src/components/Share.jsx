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
      <Box className="share-box" sx={{ display: "flex", justifyContent: "center" }}>
        <Avatar sx={{ mr: 3, color: "#1877f2", bgcolor: "#eff1f4", boxShadow:"0 0 5px", "&:hover": {color: "white", bgcolor: "#1877f2"} }}>
          <GrFacebookOption />
        </Avatar>
        <Avatar sx={{ mr: 3, color: "#1da1f2", bgcolor: "#eff1f4", boxShadow:"0 0 5px", "&:hover": {color: "white", bgcolor: "#1da1f2"} }}>
          <GrTwitter />
        </Avatar>
        <Avatar sx={{ mr: 3, color: "#c13584", bgcolor: "#eff1f4", boxShadow:"0 0 5px", "&:hover": {color: "white", bgcolor: "#c13584"} }}>
          <GrInstagram />
        </Avatar>
        <Avatar sx={{ mr: 3, color: "#25d366", bgcolor: "#eff1f4", boxShadow:"0 0 5px", "&:hover": {color: "white", bgcolor: "#25d366"} }}>
          <RiWhatsappFill />
        </Avatar>
        <Avatar sx={{ mr: 3, color: "#4285F4", bgcolor: "#eff1f4", boxShadow:"0 0 5px", "&:hover": {color: "white", bgcolor: "#4285F4"} }}>
          <MdEmail />
        </Avatar>
        <Avatar sx={{ mr: 3, color: "#fb2576", bgcolor: "#eff1f4", boxShadow:"0 0 5px", "&:hover": {color: "white", bgcolor: "#fb2576"} }}>
          <AiOutlineLink />
        </Avatar>
      </Box>
    </div>
  );
}
