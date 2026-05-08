"use client";

import { Box, Typography, InputBase, IconButton, Button, MenuItem, Select, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import { Search, ShoppingCart, Menu as MenuIcon, Close as CloseIcon, AccountCircle, LocationOn, Language, ChevronRight, ArrowDropDown } from "@mui/icons-material";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("All");

    const handleChange = (event: any) => {
        setSelectedValue(event.target.value);
    };

    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
    const toggleDesktopMenu = () => setDesktopMenuOpen(!desktopMenuOpen);

    return (
        <Box>
            <Box sx={{ backgroundColor: "#036A47", color: "white", padding: "8px 16px" }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        {isMobile && (
                            <IconButton onClick={toggleMobileMenu} sx={{ color: "white" }} size="small">
                                <MenuIcon />
                            </IconButton>
                        )}
                        <Link href="/" style={{ textDecoration: "none" }}>
                            <Typography sx={{ fontSize: "22px", fontWeight: "900", color: "white", cursor: "pointer" }}>
                                Hula Market
                            </Typography>
                        </Link>
                        {!isMobile && (
                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, cursor: "pointer", paddingLeft: 2 }}>
                                <LocationOn sx={{ fontSize: "16px" }} />
                                <Box>
                                    <Typography sx={{ fontSize: "11px", opacity: 0.9 }}>Deliver to Kenya</Typography>
                                    <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>Nairobi & Westlands</Typography>
                                </Box>
                            </Box>
                        )}
                    </Box>

                    {!isMobile && (
                        <Box sx={{ display: "flex", flex: 1, margin: "0 20px", backgroundColor: "white", borderRadius: "4px" }}>
                            <Select
                                value={selectedValue}
                                onChange={handleChange}
                                displayEmpty
                                IconComponent={ArrowDropDown}
                                size="small"
                                sx={{
                                    minWidth: "60px",
                                    backgroundColor: "#f3f3f3",
                                    borderRight: "1px solid #cdcdcd",
                                    borderRadius: "4px 0 0 4px",
                                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                                }}
                            >
                                <MenuItem value="All">All</MenuItem>
                                <MenuItem value="Electronics">Electronics</MenuItem>
                            </Select>
                            <InputBase sx={{ flex: 1, padding: "0 10px" }} placeholder="Search Hula Market" />
                            <IconButton sx={{ backgroundColor: "#febd69", borderRadius: "0 4px 4px 0" }}>
                                <Search />
                            </IconButton>
                        </Box>
                    )}

                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Box sx={{ cursor: "pointer" }}>
                            <Typography sx={{ fontSize: "12px" }}>Hello, sign in</Typography>
                            <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>Account & Lists</Typography>
                        </Box>
                        <Link href="/cart" style={{ textDecoration: "none", color: "white" }}>
                            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                <ShoppingCart sx={{ fontSize: "32px" }} />
                                <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>Cart</Typography>
                            </Box>
                        </Link>
                    </Box>
                </Box>
            </Box>

            <Drawer anchor="left" open={mobileMenuOpen || desktopMenuOpen} onClose={() => { setMobileMenuOpen(false); setDesktopMenuOpen(false); }}>
                <Box sx={{ width: 300 }}>
                    <Box sx={{ padding: "20px 16px", backgroundColor: "#232f3e", color: "white" }}>
                        <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>Hello, sign in</Typography>
                    </Box>
                    <List>
                        {["Home", "Today's Deals", "Customer Service"].map((item) => (
                            <ListItem key={item}>
                                <ListItemText primary={item} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
};

export default Header;
