import { Typography } from "@mui/material";
import { TbPointFilled } from "react-icons/tb";

// category styles
const categoryStyles = {
  "& > .Nature": {
    color: "green",
  },
  "& > .Technology": {
    color: "#f18509",
  },
  "& > .Inspiration": {
    color: "#04baf6",
  },
  "& > .Food": {
    color: "#B43ADF",
  },
  "& > .Health": {
    color: "#1dbf2f",
  },
  "& > .Lifestyle": {
    color: "#4d61ff",
  },
  "& > .Travel": {
    color: "#E10689",
  },
  padding: "1% 2%",
  cursor: "pointer",
  margin: "6% 0 3% 0",
  width: "max-content",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  borderRadius: "15px",
  transition: "all 0.5s",
  "&:hover": {
    backgroundColor: "#d4d6d5",
  },
};

export default function SingleTag(props) {

    return (
    <Typography
      variant="p"
      component="p"
      className="blogCategory"
      sx={[categoryStyles]}
    >
      <TbPointFilled className={props.category} /> {props.category}
    </Typography>
  );
}
