import { Grid } from "@mui/material";
import BlogCard from "../BlogCard/BlogCard";

export default function Blogs() {
  return (
    <Grid container>
        <Grid item md={7} spacing={1}>
            
            <BlogCard />
        </Grid>
        <Grid item md={5}></Grid>
    </Grid>
  )
}
