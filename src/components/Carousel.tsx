import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Box } from '@mui/material';

interface CarouselItemProps {
    item: {
        name: string;
        description: string;
        images: string[]; // Array of unique images for each slide
    };
}

const items = [
    {
        name: "First Slide",
        description: "This is the description for the first slide.",
        images: [
            "https://placehold.co/600x400?text=First+Image+1",
            "https://placehold.co/600x400?text=First+Image+2",
            "https://placehold.co/600x400?text=First+Image+3",
            "https://placehold.co/600x400?text=First+Image+1",
            "https://placehold.co/600x400?text=First+Image+2",
            "https://placehold.co/600x400?text=First+Image+3",
            "https://placehold.co/600x400?text=First+Image+1",
            "https://placehold.co/600x400?text=First+Image+2",
            "https://placehold.co/600x400?text=First+Image+3",
            "https://placehold.co/600x400?text=First+Image+1",
            "https://placehold.co/600x400?text=First+Image+2",
            "https://placehold.co/600x400?text=First+Image+3",
        ]
    },
    {
        name: "Second Slide",
        description: "This is the description for the second slide.",
        images: [
            "https://placehold.co/600x400?text=Second+Image+1",
            "https://placehold.co/600x400?text=Second+Image+2",
            "https://placehold.co/600x400?text=Second+Image+3",
            "https://placehold.co/600x400?text=Second+Image+1",
            "https://placehold.co/600x400?text=Second+Image+2",
            "https://placehold.co/600x400?text=Second+Image+3",
            "https://placehold.co/600x400?text=Second+Image+1",
            "https://placehold.co/600x400?text=Second+Image+2",
            "https://placehold.co/600x400?text=Second+Image+3",
            "https://placehold.co/600x400?text=Second+Image+1",
            "https://placehold.co/600x400?text=Second+Image+2",
            "https://placehold.co/600x400?text=Second+Image+3"
        ]
    },
    {
        name: "Third Slide",
        description: "This is the description for the third slide.",
        images: [
            "https://placehold.co/600x400?text=Third+Image+1",
            "https://placehold.co/600x400?text=Third+Image+2",
            "https://placehold.co/600x400?text=Third+Image+3",
            "https://placehold.co/600x400?text=Third+Image+1",
            "https://placehold.co/600x400?text=Third+Image+2",
            "https://placehold.co/600x400?text=Third+Image+3",
            "https://placehold.co/600x400?text=Third+Image+1",
            "https://placehold.co/600x400?text=Third+Image+2",
            "https://placehold.co/600x400?text=Third+Image+3",
            "https://placehold.co/600x400?text=Third+Image+1",
            "https://placehold.co/600x400?text=Third+Image+2",
            "https://placehold.co/600x400?text=Third+Image+3"
        ]
    }
];

const ExampleCarousel: React.FC = () => {
    return (
        <Carousel
            animation="slide"
            interval={4000}          // Time in milliseconds each slide is shown
            indicators={false}        // Shows dots to indicate the number of slides
            navButtonsAlwaysVisible  // Always shows the next/previous buttons
        >
            {items.map((item, index) => (
                <CarouselItem key={index} item={item} />
            ))}
        </Carousel>
    );
};

const CarouselItem: React.FC<CarouselItemProps> = ({ item }) => {
    return (
        <Paper sx={{ position: 'relative', overflow: 'hidden', height: 250 }}>
            <Box display="flex" justifyContent="space-around" alignItems="center" padding={2} height="100%">
                <Box sx={{ display: "flex", flexDirection: "row", gap: 2, height: "100%" }}>
                    {item.images.map((image, idx) => (
                        <Box
                            key={idx}
                            component="img"
                            src={image}
                            alt={`${item.name} - Image ${idx + 1}`}
                            sx={{
                                width: "150px",
                                height: "100%", // Match the Paper's height
                                borderRadius: 1,
                                objectFit: "cover",
                            }}
                        />
                    ))}
                </Box>
            </Box>
        </Paper>
    );
};

export default ExampleCarousel;
