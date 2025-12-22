"use client";

import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";

interface Review {
    id: number;
    author: string;
    rating: number;
    title: string;
    content: string;
    date: string;
    verified: boolean;
    size?: string;
    color?: string;
    helpful: number;
}

interface ReviewCardProps {
    review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
    return (
        <Box
            sx={{
                borderBottom: "1px solid #ddd",
                paddingBottom: 3,
                marginBottom: 3
            }}
        >
            <Box sx={{ display: "flex", gap: 2, marginBottom: 1 }}>
                <Avatar sx={{ width: 40, height: 40, backgroundColor: "#232f3e" }}>
                    {review.author[0]}
                </Avatar>
                <Box>
                    <Typography sx={{ fontSize: "14px", fontWeight: "700", color: "#0F1111" }}>
                        {review.author}
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 1 }}>
                <Typography sx={{ color: "#FFA41C", fontSize: "14px" }}>
                    {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                </Typography>
                <Typography sx={{ fontSize: "14px", fontWeight: "700", color: "#0F1111" }}>
                    {review.title}
                </Typography>
            </Box>

            <Typography sx={{ fontSize: "12px", color: "#565959", marginBottom: 1 }}>
                Reviewed in the United States on {review.date}
            </Typography>

            {(review.size || review.color) && (
                <Typography sx={{ fontSize: "12px", color: "#565959", marginBottom: 1 }}>
                    {review.size && `Size: ${review.size}`}
                    {review.size && review.color && " | "}
                    {review.color && `Color: ${review.color}`}
                    {review.verified && (
                        <Box component="span" sx={{ color: "#007185", marginLeft: 1 }}>
                            Verified Purchase
                        </Box>
                    )}
                </Typography>
            )}

            <Typography sx={{ fontSize: "14px", color: "#0F1111", marginBottom: 2 }}>
                {review.content}
            </Typography>

            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Typography sx={{ fontSize: "12px", color: "#565959" }}>
                    {review.helpful} people found this helpful
                </Typography>
                <Button
                    size="small"
                    sx={{
                        textTransform: "none",
                        fontSize: "12px",
                        color: "#0F1111",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        padding: "4px 12px",
                        "&:hover": { backgroundColor: "#f0f0f0" }
                    }}
                >
                    Helpful
                </Button>
                <Button
                    size="small"
                    sx={{
                        textTransform: "none",
                        fontSize: "12px",
                        color: "#0F1111",
                        "&:hover": { textDecoration: "underline" }
                    }}
                >
                    Report
                </Button>
            </Box>
        </Box>
    );
};

export default ReviewCard;
