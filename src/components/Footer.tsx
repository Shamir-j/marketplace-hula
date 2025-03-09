"use client";

import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Footer = () => {
    const whiteTextButtonStyle = {
        color: "white",
        textTransform: "none",
        "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
        },
    };

    const policyLinks = [
        { label: "Condition of Use", path: "/conditions-of-use" },
        { label: "Privacy Notice", path: "/privacy-notice" },
        { label: "Consumer Health Data Privacy Disclosure", path: "/health-privacy" },
        { label: "Your Ads Privacy Choices", path: "/ads-privacy" },
    ];

    // Use state to manage the year, initialized with a fallback
    const [currentYear, setCurrentYear] = useState<number | string>("");

    // Set the year only on client-side mount
    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <Box sx={{ width: "100%" }}>
            {/* Top Section */}
            <Box
                sx={{
                    padding: "20px",
                    backgroundColor: "#f5f5f5",
                    display: "flex",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                    gap: 2,
                }}
            >
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                        Get to Know Us
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                        Make Money with Us
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                        Hula Payment Products
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                        Let Us Help You
                    </Typography>
                </Box>
            </Box>

            {/* Middle Section with Navigation */}
            <Box
                sx={{
                    backgroundColor: "#085749",
                    color: "white",
                    padding: "8px 16px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: 1,
                    }}
                >
                    {policyLinks.map((policy) => (
                        <Button
                            key={policy.label}
                            color="inherit"
                            sx={{ ...whiteTextButtonStyle, mx: 1 }}
                            component={Link}
                            href={policy.path}
                        >
                            {policy.label}
                        </Button>
                    ))}
                </Box>
            </Box>

            {/* Bottom Section with Dynamic Year */}
            <Box
                sx={{
                    textAlign: "center",
                    padding: "10px",
                    backgroundColor: "#f5f5f5",
                }}
            >
                <Typography variant="body2">
                    © {currentYear || "Loading..."}, Hula Holding or its affiliates
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;