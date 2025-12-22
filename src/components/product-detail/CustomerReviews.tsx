"use client";

import React from "react";
import { Box, Typography, Button, Link } from "@mui/material";
import RatingBreakdown from "./RatingBreakdown";
import CustomersSay from "./CustomersSay";
import ReviewImages from "./ReviewImages";
import ReviewCard from "./ReviewCard";

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

interface CustomerReviewsProps {
    averageRating: number;
    totalReviews: number;
    ratingBreakdown: { stars: number; percentage: number }[];
    customersSay: string;
    topReviews: Review[];
    reviewImages?: string[];
}

const CustomerReviews: React.FC<CustomerReviewsProps> = ({
    averageRating,
    totalReviews,
    ratingBreakdown,
    customersSay,
    topReviews,
    reviewImages
}) => {
    return (
        <Box sx={{ marginTop: 4, backgroundColor: "#fff", padding: 3, borderRadius: "4px" }}>
            {/* Customer reviews header */}
            <Typography sx={{ fontSize: "24px", fontWeight: "700", color: "#0F1111", marginBottom: 3 }}>
                Customer reviews
            </Typography>

            <Box sx={{ display: "flex", gap: 4, marginBottom: 4 }}>
                {/* Left: Rating Summary */}
                <RatingBreakdown
                    averageRating={averageRating}
                    totalReviews={totalReviews}
                    ratingBreakdown={ratingBreakdown}
                />

                {/* Right: Customers say */}
                <CustomersSay customersSay={customersSay} />
            </Box>

            {/* Review images */}
            {reviewImages && reviewImages.length > 0 && (
                <ReviewImages reviewImages={reviewImages} />
            )}

            {/* Review this product */}
            <Box sx={{ marginBottom: 4 }}>
                <Typography sx={{ fontSize: "18px", fontWeight: "700", color: "#0F1111", marginBottom: 1 }}>
                    Review this product
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#565959", marginBottom: 2 }}>
                    Share your thoughts with other customers
                </Typography>
                <Button
                    variant="outlined"
                    sx={{
                        borderColor: "#ddd",
                        color: "#0F1111",
                        fontSize: "13px",
                        textTransform: "none",
                        padding: "8px 24px",
                        borderRadius: "8px",
                        "&:hover": {
                            backgroundColor: "#f0f0f0",
                            borderColor: "#ddd"
                        }
                    }}
                >
                    Write a customer review
                </Button>
            </Box>

            {/* Top reviews */}
            <Typography sx={{ fontSize: "18px", fontWeight: "700", color: "#0F1111", marginBottom: 3 }}>
                Top reviews from the United States
            </Typography>

            {topReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
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
                See more reviews
            </Link>
        </Box>
    );
};

export default CustomerReviews;
