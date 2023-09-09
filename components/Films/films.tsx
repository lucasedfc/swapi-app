import React, { useState } from "react";
import { Grid, Card, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import { getImageByEpisode } from "../People/utils";

const StarWarsFilms = ({ starWarsFilms }: any) => {  
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    
    return (
        // render every character from starWarsPlanet
        <Paper elevation={6} sx={{ padding: 2 }}>
            <Typography variant="h5" component="h2" sx={{ fontWeight: "bold" }}>Films</Typography>
            <Grid container spacing={2} marginTop={0}>
                {starWarsFilms.map((film: any, index: number) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                            <Card  elevation={0}
                                    className={hoveredCard === index ? 'cardZoom' : ""}
                                    onMouseEnter={() => setHoveredCard(index)}
                                    onMouseLeave={() => setHoveredCard(null)}>
                                <CardMedia
                                    component="img"
                                    height="500"
                                    src={getImageByEpisode(film.episode_id).src}
                                    alt="Star Wars Banner" />
                                <CardContent sx={{ padding: 0.5 }}>
                                    <Typography variant="subtitle1" component="div" mt={1} sx={{ fontWeight: "bold" }}>{film.title} ({film.episode_id})</Typography>
                                    <Typography variant="caption" component="div" mt={0.3}>{film.director}</Typography>
                                    <Typography variant="caption" component="div" mt={0.3}>{film.producer}</Typography>
                                    <Typography variant="caption" component="div" mt={0.3}>{film.release_date}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Paper>
    );
};

export default StarWarsFilms;