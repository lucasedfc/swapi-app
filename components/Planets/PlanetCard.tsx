import React from "react";
import { Grid, Box } from "@mui/material";
import PlanetsInfo from "./PlanetInfo";

const PlanetCard = ({ starWarsPlanet }: any) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Box>
                    <PlanetsInfo starWarsPlanet={starWarsPlanet} />
                </Box>
            
            </Grid>
            
        </Grid>
    );
};

export default PlanetCard;