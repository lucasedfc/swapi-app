import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import CharacterDetail from './CharacterDetail';

const StarWarsPeople = ({ starWarsPeople }: any) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  return (
    <Grid container spacing={2}>
      {starWarsPeople.map((character: any) => (
        <Grid item xs={12} sm={12} md={4} lg={4} key={character.name}>
          <Box className={hoveredCard === character.name ? 'cardZoom' : ""}
                                    onMouseEnter={() => setHoveredCard(character.name)}
                                    onMouseLeave={() => setHoveredCard(null)}>
            <CharacterDetail character={character} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default StarWarsPeople;
