import React from 'react';
import { Paper, Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
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
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.down("md"));
    
    const scrollRef = React.useRef<HTMLDivElement>(null);

    const handleNext = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += isMobile ? 600 : isTablet ? 800 : 1000;
        }
    };

    const handlePrev = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= isMobile ? 600 : isTablet ? 800 : 1000;
        }
    };

    // Responsive heights and sizes
    const carouselHeight = isMobile ? 200 : isTablet ? 240 : 300;
    const imageWidth = isMobile ? "140px" : isTablet ? "180px" : "200px";
    const buttonSize = isMobile ? "small" : "medium";
    const marginX = isMobile ? "32px" : isTablet ? "40px" : "50px";

    return (
        <Box sx={{ position: 'relative', width: '100%' }}>
            <Paper 
                sx={{ 
                    position: 'relative', 
                    overflow: 'hidden', 
                    height: { xs: carouselHeight, sm: carouselHeight + 20 },
                    backgroundColor: "#fff",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
                }}
            >
                <Box display="flex" justifyContent="space-between" alignItems="center" height="100%">
                    {/* Left Arrow */}
                    <IconButton 
                        onClick={handlePrev} 
                        size={buttonSize}
                        sx={{ 
                            position: 'absolute', 
                            left: { xs: "4px", sm: "8px" }, 
                            zIndex: 10,
                            backgroundColor: "rgba(255,255,255,0.9)",
                            transition: "all 0.2s ease",
                            "&:hover": {
                                backgroundColor: "rgba(255,255,255,1)",
                                transform: "scale(1.1)"
                            }
                        }}
                    >
                        <ChevronLeft sx={{ fontSize: { xs: "20px", sm: "24px" } }} />
                    </IconButton>

                    {/* Scrollable Image Container */}
                    <Box
                        ref={scrollRef}
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: { xs: 1.5, sm: 2 },
                            height: "100%",
                            overflowX: "auto",
                            overflowY: "hidden",
                            scrollBehavior: "smooth",
                            "&::-webkit-scrollbar": {
                                height: "6px"
                            },
                            "&::-webkit-scrollbar-track": {
                                background: "#f1f1f1",
                                borderRadius: "10px"
                            },
                            "&::-webkit-scrollbar-thumb": {
                                background: "#036A47",
                                borderRadius: "10px",
                                "&:hover": {
                                    background: "#024936"
                                }
                            },
                            flex: 1,
                            marginX: marginX,
                            padding: { xs: "8px 0", sm: "10px 0" }
                        }}
                    >
                        {items[0].images.map((image, idx) => (
                            <Box
                                key={idx}
                                component="img"
                                src={image}
                                alt={`Product ${idx + 1}`}
                                sx={{
                                    minWidth: imageWidth,
                                    height: "100%",
                                    borderRadius: "6px",
                                    objectFit: "cover",
                                    flexShrink: 0,
                                    transition: "transform 0.2s ease",
                                    "&:hover": {
                                        transform: "scale(1.05)"
                                    }
                                }}
                            />
                        ))}
                    </Box>

                    {/* Right Arrow */}
                    <IconButton 
                        onClick={handleNext} 
                        size={buttonSize}
                        sx={{ 
                            position: 'absolute', 
                            right: { xs: "4px", sm: "8px" }, 
                            zIndex: 10,
                            backgroundColor: "rgba(255,255,255,0.9)",
                            transition: "all 0.2s ease",
                            "&:hover": {
                                backgroundColor: "rgba(255,255,255,1)",
                                transform: "scale(1.1)"
                            }
                        }}
                    >
                        <ChevronRight sx={{ fontSize: { xs: "20px", sm: "24px" } }} />
                    </IconButton>
                </Box>
            </Paper>
        </Box>
    );
};

export default ExampleCarousel;
