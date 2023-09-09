import React from "react";
import { Grid, Box } from "@mui/material";
import PlanetDetail from "./PlanetDetail";

const StarWarsPlanets = ({ starWarsPlanets }: any) => {

  
    
    return (
        // render every character from starWarsPlanet
        <Grid container spacing={2}>
            {starWarsPlanets.map((planet: any) => (
                <Grid item xs={12} sm={12} md={4} lg={4} key={planet.name}>
                <Box>
                  <PlanetDetail  planet={planet} />
                </Box>
              </Grid>
            ))}
        </Grid>
    );
};

export default StarWarsPlanets;