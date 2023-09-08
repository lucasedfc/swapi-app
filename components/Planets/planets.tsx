import React from "react";
import { Grid, Box } from "@mui/material";
import PlanetCard from "./PlanetCard";

const StarWarsPlanets = ({ starWarsPlanets }: any) => {
    
    return (
        // render every character from starWarsPlanet
        <Grid container spacing={2}>
            {starWarsPlanets.map((planet: any) => (
                <Grid item xs={12} sm={12} md={4} lg={4} key={planet.name}>
                <Box>
                  <PlanetCard  starWarsPlanet={planet} />
                </Box>
              </Grid>
            ))}
        </Grid>
    );
};

export default StarWarsPlanets;