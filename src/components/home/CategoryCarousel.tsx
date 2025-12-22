"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import ExampleCarousel from "@/components/Carousel";

interface CategoryCarouselProps {
    title: string;
}

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({ title }) => {
    return (
        <Box sx={{ width: "100%", marginTop: 2 }}>
            <Typography
                variant="h6"
                sx={{
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                    fontWeight: "700",
                    color: "#232f3e",
                    marginBottom: "12px"
                }}
            >
                {title}
            </Typography>
            <ExampleCarousel />
        </Box>
    );
};

export default CategoryCarousel;
