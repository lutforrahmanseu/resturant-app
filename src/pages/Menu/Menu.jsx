import React from "react";
import Layout from "./../../components/Layout/Layout";
import { MenuList } from "../../data/data.js";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
const Menu = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 3 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
              ></CardMedia>
              <CardContent>
                <Typography variant="h4" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2" gutterBottom component={"div"}>
                  {menu.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
