import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { locations } from "../data/data";
import CarouselCard from "./CarouselCard";

const LocationsCards = () => {
  const [cards] = React.useState(locations);
  if (!cards.length) {
    return null;
  }
  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cards.map((location) => {
          return (
            <Grid key={location.id} item xs={12} sm={6} md={6} lg={3}>
              <CarouselCard location={location} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default LocationsCards;
