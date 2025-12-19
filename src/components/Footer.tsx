"use client";

import { Box, Typography, Button, Grid2, Divider } from "@mui/material";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Footer = () => {
    const whiteTextButtonStyle = {
        color: "white",
        textTransform: "none",
        fontSize: "0.875rem",
        "&:hover": {
            textDecoration: "underline",
        },
    };

    const footerSections = [
        {
            title: "Get to Know Us",
            links: [
                { label: "Careers", path: "#" },
                { label: "Blog", path: "#" },
                { label: "About Hula", path: "/about-hula" },
                { label: "Investor Relations", path: "#" },
                { label: "Hula Devices", path: "#" },
                { label: "Hula Science", path: "#" },
            ],
        },
        {
            title: "Make Money with Us",
            links: [
                { label: "Sell products on Hula", path: "#" },
                { label: "Sell on Hula Business", path: "#" },
                { label: "Sell apps on Hula", path: "#" },
                { label: "Become an Affiliate", path: "#" },
                { label: "Advertise Your Products", path: "#" },
                { label: "Self-Publish with Us", path: "#" },
                { label: "Host an Hula Hub", path: "#" },
                { label: "See More Make Money with Us", path: "#" },
            ],
        },
        {
            title: "Hula Payment Products",
            links: [
                { label: "Hula Business Card", path: "#" },
                { label: "Shop with Points", path: "#" },
                { label: "Reload Your Balance", path: "#" },
                { label: "Hula Currency Converter", path: "#" },
            ],
        },
        {
            title: "Let Us Help You",
            links: [
                { label: "Hula and COVID-19", path: "#" },
                { label: "Your Account", path: "#" },
                { label: "Your Orders", path: "#" },
                { label: "Shipping Rates & Policies", path: "/shipping-rates-policies" },
                { label: "Returns & Replacements", path: "/returns-replacements" },
                { label: "Manage Your Content and Devices", path: "#" },
                { label: "Help", path: "#" },
            ],
        },
    ];

    const bottomSections = [
        {
            title: "Hula Music",
            links: [
                { label: "Stream millions of songs", path: "#" },
                { label: "Hula Music Unlimited", path: "#" },
            ],
        },
        {
            title: "Hula Ads",
            links: [
                { label: "Reach customers", path: "#" },
                { label: "Let customers shop your store", path: "#" },
            ],
        },
        {
            title: "6pm",
            links: [
                { label: "Shop in brands", path: "#" },
                { label: "Spend less on shoes", path: "#" },
            ],
        },
        {
            title: "AbeBooks",
            links: [
                { label: "Books, art & collectibles", path: "#" },
            ],
        },
        {
            title: "ACX",
            links: [
                { label: "Audiobook Publishing", path: "#" },
                { label: "Made Easy", path: "#" },
            ],
        },
        {
            title: "Sell on Hula",
            links: [
                { label: "Start a Selling Account", path: "#" },
            ],
        },
        {
            title: "Veeqo",
            links: [
                { label: "Shipping Software", path: "#" },
                { label: "Inventory Management", path: "#" },
            ],
        },
    ];

    const [currentYear, setCurrentYear] = useState<number | string>("");

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <Box sx={{ width: "100%" }}>
            {/* Back to Top */}
            <Box
                sx={{
                    padding: "15px",
                    backgroundColor: "#37475a",
                    textAlign: "center",
                    color: "white",
                    cursor: "pointer",
                    "&:hover": {
                        backgroundColor: "#5a6c7d",
                    },
                }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                <Typography variant="body2">Back to top</Typography>
            </Box>

            {/* Main Footer Content */}
            <Box
                sx={{
                    backgroundColor: "#232f3e",
                    color: "white",
                    paddingTop: "50px",
                    paddingBottom: "50px",
                    paddingLeft: "15%",
                    paddingRight: "15%",
                }}
            >
                {/* Top 4 Columns */}
                <Grid2 container spacing={6} sx={{ mb: 4 }}>
                    {footerSections.map((section, index) => (
                        <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    fontWeight: "bold",
                                    mb: 2,
                                    fontSize: "0.9rem",
                                    letterSpacing: "0.5px",
                                }}
                            >
                                {section.title}
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                                {section.links.map((link) => (
                                    <Button
                                        key={link.label}
                                        component={Link}
                                        href={link.path}
                                        sx={{
                                            ...whiteTextButtonStyle,
                                            fontSize: "0.825rem",
                                            justifyContent: "flex-start",
                                            padding: "0",
                                            minWidth: "auto",
                                            lineHeight: "1.5",
                                        }}
                                    >
                                        {link.label}
                                    </Button>
                                ))}
                            </Box>
                        </Grid2>
                    ))}
                </Grid2>

                <Divider sx={{ backgroundColor: "#444", my: 4 }} />
                {/* Bottom Links Grid */}
                <Grid2 container spacing={3} sx={{ mb: 4 }}>
                    {bottomSections.map((section, index) => (
                        <Grid2 size={{ xs: 12, sm: 6, md: 2 }} key={index}>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontWeight: "700",
                                    mb: 1.5,
                                    fontSize: "0.75rem",
                                    color: "#aaa",
                                    letterSpacing: "0.5px",
                                    textTransform: "capitalize",
                                }}
                            >
                                {section.title}
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                {section.links.map((link) => (
                                    <Button
                                        key={link.label}
                                        component={Link}
                                        href={link.path}
                                        sx={{
                                            color: "#ccc",
                                            textTransform: "none",
                                            fontSize: "0.8rem",
                                            justifyContent: "flex-start",
                                            padding: "0",
                                            minWidth: "auto",
                                            lineHeight: "1.4",
                                            "&:hover": {
                                                color: "white",
                                                textDecoration: "underline",
                                            },
                                        }}
                                    >
                                        {link.label}
                                    </Button>
                                ))}
                            </Box>
                        </Grid2>
                    ))}
                </Grid2>

                <Divider sx={{ backgroundColor: "#444", my: 4 }} />

                {/* Bottom Footer */}
                <Box sx={{ textAlign: "center", color: "#999" }}>
                    <Box
                        sx={{
                            mb: 2,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: 0,
                        }}
                    >
                        <Button
                            component={Link}
                            href="/conditions-of-use"
                            sx={{
                                color: "#ccc",
                                textTransform: "none",
                                fontSize: "0.8rem",
                                px: 1,
                                "&:hover": {
                                    color: "white",
                                },
                            }}
                        >
                            Conditions of Use
                        </Button>
                        <Typography sx={{ color: "#666", px: 0.5 }}>|</Typography>
                        <Button
                            component={Link}
                            href="/privacy-notice"
                            sx={{
                                color: "#ccc",
                                textTransform: "none",
                                fontSize: "0.8rem",
                                px: 1,
                                "&:hover": {
                                    color: "white",
                                },
                            }}
                        >
                            Privacy Notice
                        </Button>
                        <Typography sx={{ color: "#666", px: 0.5 }}>|</Typography>
                        <Button
                            component={Link}
                            href="/consumer-health-data-privacy"
                            sx={{
                                color: "#ccc",
                                textTransform: "none",
                                fontSize: "0.8rem",
                                px: 1,
                                "&:hover": {
                                    color: "white",
                                },
                            }}
                        >
                            Consumer Health Data Privacy Disclosure
                        </Button>
                        <Typography sx={{ color: "#666", px: 0.5 }}>|</Typography>
                        <Button
                            component={Link}
                            href="/ads-privacy-choices"
                            sx={{
                                color: "#ccc",
                                textTransform: "none",
                                fontSize: "0.8rem",
                                px: 1,
                                "&:hover": {
                                    color: "white",
                                },
                            }}
                        >
                            Your Ads Privacy Choices
                        </Button>
                    </Box>

                    <Typography variant="body2" sx={{ fontSize: "0.75rem", color: "#999", mt: 2 }}>
                        © {currentYear || "Loading..."}, Hula Holding or its affiliates
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;