import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import Layout from "../../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 5,
          ml: 10,
          "& h4": {
            fontWeight: "bold",
            mb: 2,
          },
        }}
      >
        <Typography variant="h4">Contact My Restaurant </Typography>
        <p>
          If you are visiting Dhaka then one thing you should always bear in
          mind that Dhaka has a distinct taste for fusion food. We all taste
          continental food from every corner of world due to increased
          globalization but when anyone is visiting Dhaka they should bear in
          mind to taste the change. The rich spice culture in Southeast Asia is
          highly upheld by Dhaka
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={"paper"}>
          <Table aria-label="contact table">
            <TableHead>
              <TableCell
                sx={{ bgcolor: "black", color: "white", fontSize: "20px" }}
                align="center"
              >
                Contact Details
              </TableCell>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} />
                  +8808756421(tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: "skyblue", pt: 1 }} />
                  Help@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "skyblue", pt: 1 }} />
                  12345678
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
