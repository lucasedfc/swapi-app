import React from "react";
import { Paper, Typography, Grid, List, ListItem, ListItemText, Box, Divider } from "@mui/material";

const Vechicles = ({ vehicles } : any) => {
    return (
        (vehicles.length === 0) ? null :
            <Paper elevation={6} sx={{ padding: 2 }}>
                <Typography variant="h5" component="h2" sx={{ fontWeight: "bold" }}>Vehicles</Typography>
                {vehicles.map((v: any, index : number) => {
                    return (
                        <Box key={index}>
                            <List dense={true} disablePadding>
                                <ListItem disablePadding>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6} sm={6} md={6} lg={6}>
                                            <ListItemText
                                                primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>Name</Typography>}
                                                secondary={<Typography variant="body2">{v.name}</Typography>} />
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={6} lg={6}>
                                            <ListItemText
                                                primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>Model</Typography>}
                                                secondary={<Typography variant="body2">{v.model}</Typography>} />
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <ListItem disablePadding>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6} sm={6} md={6} lg={6}>
                                            <ListItemText
                                                primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>Manufacturer</Typography>}
                                                secondary={<Typography variant="body2">{v.manufacturer}</Typography>} />
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={6} lg={6}>
                                            <ListItemText
                                                primary={<Typography variant="body1" component="h2" sx={{ fontWeight: "bold" }}>Class</Typography>}
                                                secondary={<Typography variant="body2">{v.vehicle_class}</Typography>} />
                                        </Grid>
                                    </Grid>
                                </ListItem>
                            </List>
                            {(index !== (vehicles.length - 1)) ? <Divider /> : null}
                        </Box>
                    );
                })}
            </Paper>
    );
};

export default Vechicles;