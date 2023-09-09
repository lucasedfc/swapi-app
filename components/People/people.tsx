import React from 'react';
import { Grid, Box } from '@mui/material';
import CharacterDetail from './CharacterDetail';

const StarWarsPeople = ({ starWarsPeople }: any) => {
  return (
    <Grid container spacing={2}>
      {starWarsPeople.map((character: any) => (
        <Grid item xs={12} sm={12} md={4} lg={4} key={character.name}>
          <Box>
            <CharacterDetail character={character} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default StarWarsPeople;
