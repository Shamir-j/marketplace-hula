import React, { useState } from 'react';
import { Paper, Box, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

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
            "https://placehold.co/600x400?text=Second+Image+4",
            "https://placehold.co/600x400?text=Second+Image+5",
            "https://placehold.co/600x400?text=Second+Image+6",
            "https://placehold.co/600x400?text=Second+Image+7",
            "https://placehold.co/600x400?text=Second+Image+8",
            "https://placehold.co/600x400?text=Second+Image+9",
            "https://placehold.co/600x400?text=Second+Image+10",
            "https://placehold.co/600x400?text=Second+Image+11",
            "https://placehold.co/600x400?text=Second+Image+12"
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
    const [currentSlide, setCurrentSlide] = useState(0);
    const scrollRef = React.useRef<HTMLDivElement>(null);

    const handleNext = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += 200;
        }
    };

    const handlePrev = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= 200;
        }
    };

    return (
        <Box sx={{ position: 'relative', width: '100%' }}>
            <Paper sx={{ position: 'relative', overflow: 'hidden', height: 250 }}>
                <Box display="flex" justifyContent="space-between" alignItems="center" padding={2} height="100%">
                    <IconButton onClick={handlePrev} sx={{ position: 'absolute', left: 8, zIndex: 10 }}>
                        <ChevronLeft />
                    </IconButton>

                    <Box
                        ref={scrollRef}
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 2,
                            height: "100%",
                            overflowX: "auto",
                            overflowY: "hidden",
                            scrollBehavior: "smooth",
                            "&::-webkit-scrollbar": {
                                height: "8px"
                            },
                            "&::-webkit-scrollbar-track": {
                                background: "#f1f1f1",
                                borderRadius: "10px"
                            },
                            "&::-webkit-scrollbar-thumb": {
                                background: "#888",
                                borderRadius: "10px",
                                "&:hover": {
                                    background: "#555"
                                }
                            },
                            flex: 1,
                            margin: '0 50px',
                            padding: '0 10px'
                        }}
                    >
                        {items[currentSlide].images.map((image, idx) => (
                            <Box
                                key={idx}
                                component="img"
                                src={image}
                                alt={`${items[currentSlide].name} - Image ${idx + 1}`}
                                sx={{
                                    minWidth: "150px",
                                    height: "100%",
                                    borderRadius: 1,
                                    objectFit: "cover",
                                    flexShrink: 0
                                }}
                            />
                        ))}
                    </Box>

                    <IconButton onClick={handleNext} sx={{ position: 'absolute', right: 8, zIndex: 10 }}>
                        <ChevronRight />
                    </IconButton>
                </Box>
            </Paper>

            {/* Slide Indicators */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, marginTop: 2 }}>
                {items.map((_, index) => (
                    <Box
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        sx={{
                            width: currentSlide === index ? 16 : 12,
                            height: currentSlide === index ? 16 : 12,
                            borderRadius: '50%',
                            backgroundColor: currentSlide === index ? '#1976d2' : '#ccc',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default ExampleCarousel;
