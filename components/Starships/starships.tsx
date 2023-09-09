import React from "react";
import { Grid, Box } from "@mui/material";
import StarshipDetail from "./StarshipDetail";

const StarWarsStarships = ({ starWarsStarships }: any) => {  
    
    return (
        // render every character from starWarsPlanet
        <Grid container spacing={2}>
            {starWarsStarships.map((starship: any) => (
                <Grid item xs={12} sm={12} md={4} lg={4} key={starship.name}>
                <Box>
                  <StarshipDetail  starship={starship} />
                </Box>
              </Grid>
            ))}
        </Grid>
    );
};

export default StarWarsStarships;