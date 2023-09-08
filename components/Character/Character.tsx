import React from "react";
import { Grid, Box } from "@mui/material";
import CharacterInfo from "./CharacterInfo";

const Character = ({ starWarsCharacter }: any) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={2} lg={12}>
                <Box>
                    <CharacterInfo starWarsCharacter={starWarsCharacter} />
                </Box>
            
            </Grid>
            
        </Grid>
    );
};

export default Character;