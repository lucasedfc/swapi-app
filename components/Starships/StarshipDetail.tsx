import React from "react";
import { Grid, Typography, Card, CardContent, CardMedia, List, ListItem, ListItemText } from "@mui/material";

const StarshipDetail = ({starship}: any) => {
    
    const STAR_WARS_BANNER = "https://wallpaperaccess.com/full/496873.jpg";

    return (
        <Card elevation={6} >
            <CardContent>
                <Typography color={"primary"}  variant="h4" component="h1" sx={{ fontWeight: "bold" }}>{starship.name}</Typography>
                <Typography variant="body2">Star Wars Starship</Typography>
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
                                    primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>Model</Typography>}
                                    secondary={<Typography variant="body2">{starship.model}</Typography>} />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <ListItemText
                                    primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>Manufacturer</Typography>}
                                    secondary={<Typography variant="body2">{starship.manufacturer}</Typography>} />
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem disablePadding>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <ListItemText
                                    primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>Max Speed</Typography>}
                                    secondary={<Typography variant="body2">{starship.max_atmosphering_speed}</Typography>} />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <ListItemText
                                    primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>Class</Typography>}
                                    secondary={<Typography variant="body2">{starship.starship_class}</Typography>} />
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem disablePadding>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <ListItemText
                                    primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>cargo capacity</Typography>}
                                    secondary={<Typography variant="body2">{starship.cargo_capacity}</Typography>} />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <ListItemText
                                    primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>Cost in Credits</Typography>}
                                    secondary={<Typography variant="body2">{starship.cost_in_credits}</Typography>} />
                            </Grid>
                        </Grid>
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
};

export default StarshipDetail;