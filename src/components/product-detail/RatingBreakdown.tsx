"use client";

import React from "react";
import { Box, Typography, LinearProgress, Link } from "@mui/material";

interface RatingBreakdownProps {
    averageRating: number;
    totalReviews: number;
    ratingBreakdown: { stars: number; percentage: number }[];
}

const RatingBreakdown: React.FC<RatingBreakdownProps> = ({
    averageRating,
    totalReviews,
    ratingBreakdown
}) => {
    return (
        <Box sx={{ flex: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 1 }}>
                <Typography sx={{ color: "#FFA41C", fontSize: "18px" }}>
                    {"★".repeat(Math.floor(averageRating))}{"☆".repeat(5 - Math.floor(averageRating))}
                </Typography>
                <Typography sx={{ fontSize: "16px", fontWeight: "700", color: "#0F1111" }}>
                    {averageRating} out of 5
                </Typography>
            </Box>
            <Typography sx={{ fontSize: "14px", color: "#565959", marginBottom: 2 }}>
                {totalReviews.toLocaleString()} global ratings
            </Typography>

            {/* Rating bars */}
            {ratingBreakdown.map((item) => (
                <Box key={item.stars} sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 0.5 }}>
                    <Link
                        href="#"
                        sx={{
                            fontSize: "14px",
                            color: "#007185",
                            textDecoration: "none",
                            minWidth: "50px",
                            "&:hover": { textDecoration: "underline", color: "#c45500" }
                        }}
                    >
                        {item.stars} star
                    </Link>
                    <LinearProgress
                        variant="determinate"
                        value={item.percentage}
                        sx={{
                            flex: 1,
                            height: "20px",
                            borderRadius: "4px",
                            backgroundColor: "#f0f0f0",
                            "& .MuiLinearProgress-bar": {
                                backgroundColor: "#FFA41C"
                            }
                        }}
                    />
                    <Typography sx={{ fontSize: "14px", color: "#007185", minWidth: "35px" }}>
                        {item.percentage}%
                    </Typography>
                </Box>
            ))}

            <Link
                href="#"
                sx={{
                    fontSize: "13px",
                    color: "#007185",
                    textDecoration: "none",
                    display: "block",
                    marginTop: 2,
                    "&:hover": { textDecoration: "underline", color: "#c45500" }
                }}
            >
                How customer reviews and ratings work
            </Link>
        </Box>
    );
};

export default RatingBreakdown;
