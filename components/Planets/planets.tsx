import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import PlanetDetail from "./PlanetDetail";

const StarWarsPlanets = ({ starWarsPlanets }: any) => {

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    
    return (
        <Grid container spacing={2}>
            {starWarsPlanets.map((planet: any) => (
                <Grid item xs={12} sm={12} md={4} lg={4} key={planet.name}>
                <Box className={hoveredCard === planet.name ? 'cardZoom' : ""}
                                    onMouseEnter={() => setHoveredCard(planet.name)}
                                    onMouseLeave={() => setHoveredCard(null)}>
                  <PlanetDetail  {...planet} />
                </Box>
              </Grid>
            ))}
        </Grid>
    );
};

export default StarWarsPlanets;