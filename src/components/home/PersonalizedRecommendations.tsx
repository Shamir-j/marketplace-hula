"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

const PersonalizedRecommendations: React.FC = () => {
    return (
        <Box sx={{ width: "100%", backgroundColor: "#ffffff", marginTop: 4, paddingY: 4 }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                maxWidth: "1400px",
                margin: "0 auto"
            }}>
                <Typography
                    sx={{
                        fontSize: { xs: "18px", sm: "20px", md: "22px" },
                        fontWeight: "700",
                        color: "#232f3e"
                    }}
                >
                    See personalized recommendations
                </Typography>
                <Box
                    component="button"
                    sx={{
                        backgroundColor: "#FFD700",
                        color: "#000",
                        border: "none",
                        padding: "10px 80px",
                        fontSize: "16px",
                        fontWeight: "600",
                        borderRadius: "4px",
                        cursor: "pointer",
                        width: "100%",
                        maxWidth: "250px",
                        "&:hover": {
                            backgroundColor: "#FFC700"
                        }
                    }}
                >
                    Sign in
                </Box>
                <Typography
                    sx={{
                        fontSize: "14px",
                        color: "#0066c0",
                        cursor: "pointer",
                        textDecoration: "underline",
                        "&:hover": {
                            color: "#c45911"
                        }
                    }}
                >
                    New customer? Start here.
                </Typography>
            </Box>
        </Box>
    );
};

export default PersonalizedRecommendations;
