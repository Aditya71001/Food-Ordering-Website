import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

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
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        Welcome to My Restaurant, your ultimate destination for delicious meals delivered right to your doorstep! We pride ourselves on providing a seamless and convenient experience for all food enthusiasts.

Discover a world of culinary delights with our extensive menu featuring a diverse range of cuisines, from comforting classics to exotic specialties. Whether you're craving Italian pasta, spicy Indian curry, or indulgent desserts, we have something to satisfy every palate and craving.

At this website, we prioritize quality and freshness in every dish we offer. Our curated selection of partner restaurants and chefs ensures that each meal is prepared with the finest ingredients and utmost care. From farm-fresh produce to premium cuts of meat, we source only the best to ensure a delightful dining experience with every bite.
        </p>
        <br />
        <p>
        Join our community of food lovers today and embark on a gastronomic journey like no other. Experience convenience, variety, and flavor all in one place, only at food ordering website.

Bon appétit!
        </p>
      </Box>
    </Layout>
  );
};

export default About;