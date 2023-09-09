import React from "react";
import { Grid, Typography, Card, CardContent, CardMedia, List, ListItem, ListItemText } from "@mui/material";

const CharacterInfo = ({character}: any) => {
    
    const STAR_WARS_BANNER = "https://wallpaperaccess.com/full/496873.jpg";

    return (
        <Card elevation={6} >
            <CardContent>
                <Typography color={"primary"}  variant="h4" component="h1" sx={{ fontWeight: "bold" }}>{character.name}</Typography>
                <Typography variant="body2">Star Wars Character</Typography>
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
                                    primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>Height (cm)</Typography>}
                                    secondary={<Typography variant="body2">{character.height}</Typography>} />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <ListItemText
                                    primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>Weight (kg)</Typography>}
                                    secondary={<Typography variant="body2">{character.mass}</Typography>} />
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem disablePadding>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <ListItemText
                                    primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>Hair Color</Typography>}
                                    secondary={<Typography variant="body2">{character.hair_color}</Typography>} />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <ListItemText
                                    primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>Skin Color</Typography>}
                                    secondary={<Typography variant="body2">{character.skin_color}</Typography>} />
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem disablePadding>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <ListItemText
                                    primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>Gender</Typography>}
                                    secondary={<Typography variant="body2">{character.gender}</Typography>} />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <ListItemText
                                    primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>Birth Year</Typography>}
                                    secondary={<Typography variant="body2">{character.birth_year}</Typography>} />
                            </Grid>
                        </Grid>
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
};

export default CharacterInfo;