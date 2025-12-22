"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

interface BrandSectionProps {
    title: string;
    image: string;
    description?: string;
}

const BrandSection: React.FC<BrandSectionProps> = ({ title, image, description }) => {
    return (
        <Box sx={{ marginTop: 4, backgroundColor: "#fff", padding: 3, borderRadius: "4px" }}>
            <Typography sx={{ fontSize: "18px", fontWeight: "700", color: "#0F1111", marginBottom: 2 }}>
                {title}
            </Typography>
            <Box
                component="img"
                src={image}
                alt={title}
                sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "4px",
                    objectFit: "cover"
                }}
            />
            {description && (
                <Typography sx={{ fontSize: "14px", color: "#0F1111", marginTop: 2 }}>
                    {description}
                </Typography>
            )}
        </Box>
    );
};

export default BrandSection;
