import React from "react";
import { Paper, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { getImageByEpisode } from "./utils";

const Films = ({ films }: any) => {
    return (
        <Paper elevation={6} sx={{ padding: 2 }}>
            <Typography variant="h5" component="h2" sx={{ fontWeight: "bold" }}>Films</Typography>
            <Grid container spacing={2} marginTop={0}>
                {films.map((film: any, index: number) => {
                    return (
                        <Grid item xs={6} sm={4} md={4} lg={4} key={index}>
                            <Card elevation={0}>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    src={getImageByEpisode(film.episode_id).src}
                                    alt="Star Wars Banner" />
                                <CardContent sx={{ padding: 0.5 }}>
                                    <Typography variant="subtitle1" component="div" mt={1} sx={{ fontWeight: "bold" }}>{film.title}</Typography>
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

export default Films;