import { Typography, Box, TextField, FormControl, Button } from "@mui/material";
import "./Contact.css";

export default function Contact() {
  const inputStyles = {
    borderRadius: "30px",
    pl: "10px",
    color: "black",
    borderColor: "black",
    "&:focus": {
      borderColor: "black",
      color: "black",
    },
  };
  const labelStyles = {
    color: "black",
    "&:focus": {
      borderColor: "black",
      color: "black",
    },
  };
  return (
    <div className="Contact">
      <Box sx={{ width: "70%", m: "0 auto", textAlign: "center" }}>
        <Typography sx={{ fontSize: "37px", fontWeight: "bold" }}>
          Contact
        </Typography>
        <Typography sx={{ m: "5px 0" }}>
          Hi! Do you have any questions or suggestions about this site? Send me
          a message using below form. I will get back to you as soon as
          possible.
        </Typography>
      </Box>
      <Box
        sx={{
          margin: "5% auto",
          width: "60%",
          borderRadius: "30px",
          boxShadow: "0px 1px 20px rgba(0,0,0,0.15)",
          backgroundColor: "white",
        }}
      >
        <FormControl
          style={{
            width: "80%",
            m: "0 auto",
            padding: "7% 10% 5% 10%",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <TextField
              label="Fullname"
              sx={{ width: "100%", margin: "2% auto" }}
              InputProps={{
                sx: inputStyles,
              }}
              InputLabelProps={{ style: labelStyles }}
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <TextField
              label="Email"
              sx={{ width: "100%", margin: "2% auto" }}
              InputProps={{
                sx: inputStyles,
              }}
              InputLabelProps={{ style: labelStyles }}
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <TextField
              label="Subject"
              sx={{ width: "100%", margin: "2% auto" }}
              InputProps={{
                sx: inputStyles,
              }}
              InputLabelProps={{ style: labelStyles }}
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <TextField
              label="Message"
              sx={{ width: "100%", margin: "2% auto" }}
              InputProps={{
                sx: inputStyles,
              }}
              InputLabelProps={{ style: labelStyles }}
              multiline
              minRows={5}
            />
          </Box>
          <Button
            type="submit"
            sx={{
              width: "35%",
              p: "2% 0",
              m: "5% auto 3% auto",
              backgroundColor: "#0181B0",
              color: "white",
              borderRadius: "30px",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
          >
            Send
          </Button>
        </FormControl>
      </Box>
    </div>
  );
}
