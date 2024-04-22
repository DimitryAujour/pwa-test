import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box, Grid } from '@mui/material';

function StepComponent({ step }) {
    const mediaStyle = {
        width: '80%', // Use 100% of the grid item container
        maxHeight: '500px',
        marginTop: '2rem',
        objectFit: 'contain',
    };

    const videoStyle = {
        width: '50%', // Video takes 50% width and is centered
        maxHeight: '500px',
        objectFit: 'contain',
        marginTop: '20px',
        marginLeft: 'auto', // Center the video horizontally
        marginRight: 'auto'
    };

    return (
        <Box sx={{ paddingTop: '150px' }}>
            <Card raised>
                <CardContent>
                    <Typography variant="h5">{step.title}</Typography>
                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                        <Grid item xs={12} md={6}>
                            <Typography>{step.description}</Typography>
                        </Grid>
                        {step.images.map((image, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <CardMedia
                                    component="img"
                                    sx={mediaStyle}
                                    image={image}
                                    alt={`${step.title} image ${index + 1}`}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    {step.video && (
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                            <CardMedia
                                component="video"
                                controls
                                sx={videoStyle}
                                src={step.video}
                                title={step.title}
                            />
                        </Box>
                    )}
                </CardContent>
            </Card>
        </Box>
    );
}

export default StepComponent;
