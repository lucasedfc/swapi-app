import React from "react";
import { Paper, Typography, Grid, List, ListItem, ListItemText, Box, Divider } from "@mui/material";

const Starships = ({ starships } : any) => {
    return (
        (starships.length === 0) ? null :
            <Paper elevation={6} sx={{ padding: 2 }}>
                <Typography variant="h5" component="h2" sx={{ fontWeight: "bold" }}>Starships</Typography>
                {starships.map((s: any, index : number) => {
                    return (
                        <Box key={index}>
                            <List dense={true} disablePadding>
                                <ListItem disablePadding>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6} sm={6} md={6} lg={6}>
                                            <ListItemText
                                                primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>Name</Typography>}
                                                secondary={<Typography variant="body2">{s.name}</Typography>} />
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={6} lg={6}>
                                            <ListItemText
                                                primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>Model</Typography>}
                                                secondary={<Typography variant="body2">{s.model}</Typography>} />
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <ListItem disablePadding>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6} sm={6} md={6} lg={6}>
                                            <ListItemText
                                                primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>Manufacturer</Typography>}
                                                secondary={<Typography variant="body2">{s.manufacturer}</Typography>} />
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={6} lg={6}>
                                            <ListItemText
                                                primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>Class</Typography>}
                                                secondary={<Typography variant="body2">{s.vehicle_class}</Typography>} />
                                        </Grid>
                                    </Grid>
                                </ListItem>
                            </List>
                            {(index !== (starships.length - 1)) ? <Divider /> : null}
                        </Box>
                    );
                })}
            </Paper>
    );
};

export default Starships;