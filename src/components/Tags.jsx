import { Typography } from "@mui/material";
import { useState } from "react";
// icons
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
  padding: "1.5% 4%",
  cursor: "pointer",
  m: 1,
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

export default function Tags() {
  const [tags, setTags] = useState([
    "Travel",
    "Technology",
    "Food",
    "Health",
    "Nature",
    "Lifestyle",
    "Inspiration",
  ]);
  return (
    <div className="home-tags" style={{ display: "flex", flexWrap: "wrap" }}>
      {tags.map((tag, ind) => (
        <Typography
          key={ind}
          variant="p"
          component="p"
          className="blogCategory"
          sx={[categoryStyles, {}]}
        >
          <TbPointFilled className={tag} />
          {tag}
        </Typography>
      ))}
    </div>
  );
}
