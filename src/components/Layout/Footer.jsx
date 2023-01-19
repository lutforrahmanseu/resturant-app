import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          bgcolor: "#1A1A19",
          color: "goldenrod",
          p: 3,
        }}
      >
        <Box
          sx={{
            my: 2,
            "& svg": {
              fontSize: "2rem",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              // transform: "translate(5px)",
              // transition: "all 400ms",
            },
          }}
        >
          <a href="https://www.facebook.com/">
            <FacebookIcon></FacebookIcon>
          </a>
          <a href="/">
            <InstagramIcon></InstagramIcon>
          </a>
        </Box>
        <Typography
          variant="h5"
          sx={{ "@media (max-width:600px)": { fontSize: "1rem" } }}
        >
          All Right Reserved &copy; Lutfor Rahman || 2023
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
