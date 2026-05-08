"use client";

import React from "react";
import { Box, Typography, List, ListItem, Divider } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

interface DepartmentsDropdownProps {
    open: boolean;
    onClose: () => void;
}

const DepartmentsDropdown: React.FC<DepartmentsDropdownProps> = ({ open, onClose }) => {
    const departments = [
        { name: "Arts & Crafts", hasSubmenu: true },
        { name: "Automotive", hasSubmenu: true },
        { name: "Baby", hasSubmenu: true },
        { name: "Beauty & Personal Care", hasSubmenu: true },
        { name: "Books", hasSubmenu: true },
        { name: "Boys' Fashion", hasSubmenu: true },
        { name: "Computers", hasSubmenu: true },
        { name: "Deals", hasSubmenu: false },
        { name: "Digital Music", hasSubmenu: true },
        { name: "Electronics", hasSubmenu: true },
        { name: "Girls' Fashion", hasSubmenu: true },
        { name: "Health & Household", hasSubmenu: true },
        { name: "Home & Kitchen", hasSubmenu: true },
        { name: "Industrial & Scientific", hasSubmenu: true },
        { name: "Kindle Store", hasSubmenu: true },
        { name: "Luggage", hasSubmenu: true },
        { name: "Men's Fashion", hasSubmenu: true },
        { name: "Movies & TV", hasSubmenu: true },
        { name: "Music, CDs & Vinyl", hasSubmenu: true },
        { name: "Pet Supplies", hasSubmenu: true },
        { name: "Prime Video", hasSubmenu: false },
        { name: "Software", hasSubmenu: true },
        { name: "Sports & Outdoors", hasSubmenu: true },
        { name: "Tools & Home Improvement", hasSubmenu: true },
        { name: "Toys & Games", hasSubmenu: true },
        { name: "Video Games", hasSubmenu: true },
        { name: "Women's Fashion", hasSubmenu: true },
    ];

    if (!open) return null;

    return (
        <>
            {/* Backdrop */}
            <Box
                sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1200,
                }}
                onClick={onClose}
            />

            {/* Dropdown Content */}
            <Box
                sx={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    width: "360px",
                    maxHeight: "90vh",
                    overflowY: "auto",
                    backgroundColor: "#fff",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    zIndex: 1300,
                    borderRadius: "0 0 4px 4px",
                }}
            >
                {/* Header */}
                <Box
                    sx={{
                        padding: "16px 20px",
                        backgroundColor: "#f0f2f2",
                        borderBottom: "1px solid #ddd",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "18px",
                            fontWeight: "700",
                            color: "#0F1111",
                        }}
                    >
                        Shop by Department
                    </Typography>
                </Box>

                {/* Departments List */}
                <List sx={{ padding: 0 }}>
                    {departments.map((dept, index) => (
                        <React.Fragment key={dept.name}>
                            <ListItem
                                sx={{
                                    padding: "12px 20px",
                                    cursor: "pointer",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    "&:hover": {
                                        backgroundColor: "#f0f2f2",
                                    },
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        color: "#0F1111",
                                        fontWeight: "400",
                                    }}
                                >
                                    {dept.name}
                                </Typography>
                                {dept.hasSubmenu && (
                                    <ChevronRight
                                        sx={{
                                            fontSize: "18px",
                                            color: "#767676",
                                        }}
                                    />
                                )}
                            </ListItem>
                            {index < departments.length - 1 && (
                                <Divider sx={{ margin: 0 }} />
                            )}
                        </React.Fragment>
                    ))}
                </List>

                {/* Footer Links */}
                <Box
                    sx={{
                        padding: "16px 20px",
                        backgroundColor: "#f0f2f2",
                        borderTop: "1px solid #ddd",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: "700",
                            color: "#0F1111",
                            marginBottom: "12px",
                        }}
                    >
                        Help & Settings
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                color: "#0F1111",
                                cursor: "pointer",
                                "&:hover": {
                                    textDecoration: "underline",
                                    color: "#c45500",
                                },
                            }}
                        >
                            Your Account
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                color: "#0F1111",
                                cursor: "pointer",
                                "&:hover": {
                                    textDecoration: "underline",
                                    color: "#c45500",
                                },
                            }}
                        >
                            Customer Service
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                color: "#0F1111",
                                cursor: "pointer",
                                "&:hover": {
                                    textDecoration: "underline",
                                    color: "#c45500",
                                },
                            }}
                        >
                            Sign in
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default DepartmentsDropdown;
