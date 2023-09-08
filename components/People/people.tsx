import React from "react";
import { Grid, Box } from "@mui/material";
import Character from "../Character/Character";

const StarWarsPeople = ({ starWarsPeople }: any) => {
    
    return (
        // render every character from starWarsPeople
        <Grid container spacing={2}>
            {starWarsPeople.map((character: any) => (
                <Grid item xs={12} sm={12} md={4} lg={4} key={character.name}>
                <Box>
                  <Character  starWarsCharacter={character} />
                </Box>
              </Grid>
            ))}
        </Grid>
    );
};

export default StarWarsPeople;