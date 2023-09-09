import React from "react";
import { Grid, Typography, Card, CardContent, CardMedia, List, ListItem, ListItemText } from "@mui/material";
import { getImageByEpisode } from "../People/utils";

const FilmDetail = ({ film }: any) => {

    return (
        <Card elevation={6}>
            <CardContent>
                <Typography color={"primary"} variant="h4" component="h1" sx={{ fontWeight: "bold" }}>{film.title}</Typography>
                <Typography variant="body2">Star Wars Film</Typography>
            </CardContent>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <CardMedia
                        component="img"
                        src={getImageByEpisode(film.episode_id).src}
                        alt="Star Wars Banner"
                        style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <CardContent>
                        <List dense={true} disablePadding>
                            <ListItem disablePadding>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <ListItemText
                                            primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>Sinopsis</Typography>}
                                            secondary={<Typography variant="body2">{film.opening_crawl}</Typography>} />
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem disablePadding>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <ListItemText
                                            primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>Director</Typography>}
                                            secondary={<Typography variant="body2">{film.director}</Typography>} />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <ListItemText
                                            primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>Release date</Typography>}
                                            secondary={<Typography variant="body2">{film.release_date}</Typography>} />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <ListItemText
                                            primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>Producer</Typography>}
                                            secondary={<Typography variant="body2">{film.producer}</Typography>} />
                                    </Grid>
                                </Grid>
                            </ListItem>
                        </List>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    );
};

export default FilmDetail;
