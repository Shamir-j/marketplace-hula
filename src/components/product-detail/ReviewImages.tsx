"use client";

import React from "react";
import { Box, Typography, Link } from "@mui/material";

interface ReviewImagesProps {
    reviewImages: string[];
}

const ReviewImages: React.FC<ReviewImagesProps> = ({ reviewImages }) => {
    return (
        <Box sx={{ marginBottom: 4 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
                <Typography sx={{ fontSize: "16px", fontWeight: "700", color: "#0F1111" }}>
                    Reviews with images
                </Typography>
                <Link
                    href="#"
                    sx={{
                        fontSize: "13px",
                        color: "#007185",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline", color: "#c45500" }
                    }}
                >
                    See all photos
                </Link>
            </Box>
            <Box sx={{ display: "flex", gap: 1, overflowX: "auto" }}>
                {reviewImages.map((img, index) => (
                    <Box
                        key={index}
                        component="img"
                        src={img}
                        alt={`Review ${index + 1}`}
                        sx={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                            borderRadius: "4px",
                            cursor: "pointer",
                            "&:hover": { opacity: 0.8 }
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default ReviewImages;
