import { Box, Typography } from "@mui/material";
import React from "react";
import Layout from "../../components/Layout/Layout";
import "./About.css";
const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: "5px",
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media(max-width:600px)": {
            mt: 0,
            fontSize: "1rem",
          },
        }}
      >
        <Typography variant="h4">Well come to Restaurant</Typography>
        <br />
        <p>
          If you are visiting Dhaka then one thing you should always bear in
          mind that Dhaka has a distinct taste for fusion food. We all taste
          continental food from every corner of world due to increased
          globalization but when anyone is visiting Dhaka they should bear in
          mind to taste the change. The rich spice culture in Southeast Asia is
          highly upheld by Dhaka, and almost all the restaurants provide the
          best of these spicy cuisine but with a fusion taste.
        </p>
        <br />
        <p>
          One of the most famous food in Bangladesh is “Biryani”, if you’re a
          big fan of Indian food then I’m sure enough you’ve come across this
          term, but biryani in Dhaka is something you should try just to ensure
          yourself that your aren’t left to the open allegation of not trying
          the Biryani made in Dhaka which is hauntingly delicious. “Haji’s
          biryani” which is located in old Town in the South of the capital is
          the most popular Biryani house in Dhaka. And residents of Dhaka is
          quite crazy about it.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
