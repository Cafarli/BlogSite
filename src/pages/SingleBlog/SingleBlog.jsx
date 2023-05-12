import { Box, Typography } from '@mui/material';
import data from "../../data/blogs.json";
import { useParams } from 'react-router-dom';

export default function SingleBlog() {
    const {id} = useParams();

    const blogData = data['\'blogs'].filter(blog => blog.blogID===id)[0];
  return (
    <div className="SingleBlog">
        <figure>
            <img src={blogData['imageUrl']} alt={blogData['blogName']}></img>
            <figcaption>{blogData['blogName']}</figcaption>
        </figure>
        <Box>
            <Typography>{blogData['blogName']}</Typography>
            <Box>
            <Typography></Typography>
            <Typography></Typography>
            <Typography></Typography>
            </Box>
            <Typography></Typography>
        </Box>
    </div>
  )
}
