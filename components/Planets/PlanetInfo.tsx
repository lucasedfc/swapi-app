import React from "react";
import { Grid, Typography, Card, CardContent, CardMedia, List, ListItem, ListItemText } from "@mui/material";

const PlanetsInfo = ({ starWarsPlanet: starWarsPlanet }: any) => {
    const STAR_WARS_BANNER = "https://wallpaperaccess.com/full/496873.jpg";

    return (
        <Card elevation={6} >
            <CardContent>
                <Typography color={"primary"}  variant="h4" component="h1" sx={{ fontWeight: "bold" }}>{starWarsPlanet.name}</Typography>
                <Typography variant="body2">Star Wars Planet</Typography>
            </CardContent>
            <CardMedia
                component="img"
                height="350"
                src={STAR_WARS_BANNER}
                alt="Star Wars Banner" />
            <CardContent>
                <List dense={true} disablePadding>
                    <ListItem disablePadding>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <ListItemText
                                    primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>population</Typography>}
                                    secondary={<Typography variant="body2">{starWarsPlanet.population}</Typography>} />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <ListItemText
                                    primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>surface_water</Typography>}
                                    secondary={<Typography variant="body2">{starWarsPlanet.surface_water}</Typography>} />
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem disablePadding>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <ListItemText
                                    primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>terrain</Typography>}
                                    secondary={<Typography variant="body2">{starWarsPlanet.terrain}</Typography>} />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <ListItemText
                                    primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>gravity</Typography>}
                                    secondary={<Typography variant="body2">{starWarsPlanet.gravity}</Typography>} />
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem disablePadding>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <ListItemText
                                    primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>climate</Typography>}
                                    secondary={<Typography variant="body2">{starWarsPlanet.climate}</Typography>} />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <ListItemText
                                    primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>orbital_period</Typography>}
                                    secondary={<Typography variant="body2">{starWarsPlanet.orbital_period}</Typography>} />
                            </Grid>
                        </Grid>
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
};

export default PlanetsInfo;