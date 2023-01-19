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
          p: 3,
        }}
      >
        <Box
          sx={{
            my: 2,
            "& svg": {
              fontSize: "2rem",
              cursor: "pointer",
              color: "white",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translate(5px)",
              transition: "all 400ms",
            },
          }}
        >
          <FacebookIcon></FacebookIcon>

          <InstagramIcon></InstagramIcon>
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": { fontSize: "1rem" },
            color: "goldenrod",
          }}
        >
          All Right Reserved &copy; Lutfor Rahman || 2023
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
