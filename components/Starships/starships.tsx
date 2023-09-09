import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import StarshipDetail from "./StarshipDetail";

const StarWarsStarships = ({ starWarsStarships }: any) => {  
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    return (
        // render every character from starWarsPlanet
        <Grid container spacing={2}>
            {starWarsStarships.map((starship: any) => (
                <Grid item xs={12} sm={12} md={4} lg={4} key={starship.name}>
                <Box className={hoveredCard === starship.name ? 'cardZoom' : ""}
                                    onMouseEnter={() => setHoveredCard(starship.name)}
                                    onMouseLeave={() => setHoveredCard(null)}>
                  <StarshipDetail  starship={starship} />
                </Box>
              </Grid>
            ))}
        </Grid>
    );
};

export default StarWarsStarships;