import React from "react";
import { Grid, Typography, Card, CardContent, CardMedia, List, ListItem, ListItemText } from "@mui/material";
import { getImageByEpisode } from "../People/utils";

const FilmDetail = ({film}: any) => {
    
    return (
        <>
        <Card elevation={6} >
            <CardContent>
                <Typography color={"primary"}  variant="h4" component="h1" sx={{ fontWeight: "bold" }}>{film.title}</Typography>
                <Typography variant="body2">Star Wars Film</Typography>
            </CardContent>
            <CardMedia
                component="img"
                height="350"
                src={getImageByEpisode(film.episode_id).src}
                alt="Star Wars Banner" />
            <CardContent>
                <List dense={true} disablePadding>
                    <ListItem disablePadding>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <ListItemText
                                    primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>Sinopsis</Typography>}
                                    secondary={<Typography variant="body2">{film.opening_crawl}</Typography>} />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <ListItemText
                                    primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>director</Typography>}
                                    secondary={<Typography variant="body2">{film.director}</Typography>} />
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem disablePadding>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <ListItemText
                                    primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>release_date</Typography>}
                                    secondary={<Typography variant="body2">{film.release_date}</Typography>} />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <ListItemText
                                    primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>producer</Typography>}
                                    secondary={<Typography variant="body2">{film.producer}</Typography>} />
                            </Grid>
                        </Grid>
                    </ListItem>                    
                </List>
            </CardContent>
        </Card>
        </>
    );
};

export default FilmDetail;