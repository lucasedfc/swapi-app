import React from "react";
import { Grid, Box } from "@mui/material";
import CharacterInfo from "./CharacterInfo";
import Films from "./CharacterFilms";
import Species from "./CharacterSpecies";
import Vechicles from "./CharacterVehicles";
import Starships from "./CharacterStarships";

const SWCharacter = ({ starWarsCharacter }: any) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4} lg={4} >
                <Box>
                    <CharacterInfo character={starWarsCharacter} />
                </Box>        
                <Box marginTop={2}>
                    <Species species={starWarsCharacter.species} />
                </Box>        
                <Box marginTop={2}>
                    <Vechicles vehicles={starWarsCharacter.vehicles} />
                </Box>        
                <Box marginTop={2}>
                    <Starships starships={starWarsCharacter.starships} />
                </Box>        
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>                
                <Box marginTop={2}>
                    <Films films={starWarsCharacter.films} />
                </Box>
            </Grid>
        </Grid>
    );
};

export default SWCharacter;