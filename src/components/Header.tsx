"use client";

import { Box, Typography, InputBase, IconButton, Button, MenuItem, Select, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import { Search, ShoppingCart, Menu as MenuIcon, Close as CloseIcon, AccountCircle, LocationOn, Language } from "@mui/icons-material";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("option1");

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedValue(event.target.value);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const topMenuItems = ["Video", "Deals", "Books", "Hula Basics", "Buy Again", "Best Sellers"];
    const bottomMenuItems = ["Today's Deals", "Customer Service", "Registry", "Gift Cards", "Sell"];

    return (
        <Box>
            {/* Main Header */}
            <Box sx={{ backgroundColor: "#036A47", color: "white", padding: { xs: "8px 12px", sm: "8px 16px" } }}>
                <Box display="flex" alignItems="center" justifyContent="space-between" gap={{ xs: 1, sm: 2 }}>
                    {/* Left: Logo, Menu Icon (Mobile), & Delivery Location */}
                    <Box display="flex" alignItems="center" gap={{ xs: 1, sm: 1.5 }}>
                        {isMobile && (
                            <IconButton
                                onClick={toggleMobileMenu}
                                sx={{ color: "white", padding: "8px" }}
                                size="small"
                            >
                                <MenuIcon />
                            </IconButton>
                        )}
                        <Link href="/" style={{ textDecoration: "none" }}>
                            <Typography
                                sx={{
                                    fontSize: { xs: "16px", sm: "22px" },
                                    fontWeight: "900",
                                    color: "white",
                                    cursor: "pointer",
                                    "&:hover": { opacity: 0.8 },
                                    whiteSpace: "nowrap",
                                }}
                            >
                                Hula Market
                            </Typography>
                        </Link>

                        {/* Desktop Only: Deliver To Location - Next to Logo */}
                        {!isMobile && (
                            <Box display="flex" alignItems="center" gap={0.5} sx={{ cursor: "pointer", "&:hover": { opacity: 0.8 }, paddingLeft: 2 }}>
                                <LocationOn sx={{ fontSize: "16px" }} />
                                <Box>
                                    <Typography sx={{ fontSize: "11px", opacity: 0.9 }}>Deliver to Kenya</Typography>
                                    <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>Nairobi & KOYONZO</Typography>
                                </Box>
                            </Box>
                        )}
                    </Box>

                    {/* Center: Search Bar - Desktop Only */}
                    {!isMobile && (
                        <Box
                            display="flex"
                            alignItems="stretch"
                            sx={{
                                backgroundColor: "white",
                                borderRadius: "4px",
                                width: "70%",
                                overflow: "hidden",
                            }}
                        >
                            <Select
                                value={selectedValue}
                                onChange={handleChange}
                                displayEmpty
                                sx={{
                                    minWidth: "80px",
                                    paddingX: 1,
                                    backgroundColor: "#f3f3f3",
                                    border: "none",
                                    borderRight: "1px solid #ddd",
                                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                                    fontSize: "13px",
                                }}
                                size="small"
                            >
                                <MenuItem value="option1">All</MenuItem>
                                <MenuItem value="option2">Electronics</MenuItem>
                                <MenuItem value="option3">Clothing</MenuItem>
                                <MenuItem value="option4">Health & Wellness</MenuItem>
                                <MenuItem value="option5">Beauty & Personal Care</MenuItem>
                                <MenuItem value="option6">Home & Kitchen</MenuItem>
                                <MenuItem value="option7">Sports & Outdoors</MenuItem>
                                <MenuItem value="option8">Books & Stationery</MenuItem>
                                <MenuItem value="option9">Toys & Games</MenuItem>
                                <MenuItem value="option10">Baby Products</MenuItem>
                            </Select>
                            <InputBase
                                sx={{
                                    flex: 1,
                                    paddingX: 1.5,
                                    fontWeight: "500",
                                    fontSize: "14px",
                                }}
                                placeholder="Search Hula Market"
                            />
                            <IconButton
                                type="submit"
                                sx={{
                                    backgroundColor: "#FF9900",
                                    borderRadius: "0px 4px 4px 0px",
                                    color: "white",
                                    padding: "8px 16px",
                                    "&:hover": { backgroundColor: "#e68a00" },
                                }}
                                size="small"
                            >
                                <Search sx={{ fontSize: "20px" }} />
                            </IconButton>
                        </Box>
                    )}

                    {/* Right: Account, Orders, Cart, Language */}
                    <Box display="flex" alignItems="center" gap={{ xs: 0.5, sm: 1.5 }}>
                        {/* Language Button - Desktop Only */}
                        {!isMobile && (
                            <Button
                                color="inherit"
                                sx={{
                                    textTransform: "none",
                                    fontSize: "13px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "4px",
                                    padding: "4px 8px",
                                    "&:hover": { opacity: 0.8 },
                                }}
                            >
                                <Language sx={{ fontSize: "16px" }} />
                                EN
                            </Button>
                        )}

                        {/* Account Button */}
                        {!isMobile ? (
                            <Button
                                color="inherit"
                                sx={{
                                    textTransform: "none",
                                    fontSize: "13px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    padding: "4px 8px",
                                    "&:hover": { opacity: 0.8 },
                                }}
                            >
                                <Typography sx={{ fontSize: "11px", opacity: 0.9 }}>Hello, Sign in</Typography>
                                <Typography sx={{ fontSize: "13px", fontWeight: "bold" }}>Account & Lists</Typography>
                            </Button>
                        ) : (
                            <Box display="flex" alignItems="center" gap="4px">
                                <Typography sx={{ fontSize: "12px" }}>Sign in</Typography>
                                <IconButton color="inherit" sx={{ color: "white", padding: "4px" }}>
                                    <AccountCircle sx={{ fontSize: "24px" }} />
                                </IconButton>
                            </Box>
                        )}

                        {/* Orders Button - Desktop Only */}
                        {!isMobile && (
                            <Button
                                color="inherit"
                                sx={{
                                    textTransform: "none",
                                    fontSize: "13px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    padding: "4px 8px",
                                    "&:hover": { opacity: 0.8 },
                                }}
                            >
                                <Typography sx={{ fontSize: "11px", opacity: 0.9 }}>Returns</Typography>
                                <Typography sx={{ fontSize: "13px", fontWeight: "bold" }}>& Orders</Typography>
                            </Button>
                        )}

                        {/* Cart */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: "4px", padding: "4px 8px", position: "relative" }}>
                            <IconButton color="inherit" sx={{ color: "white", padding: "4px", position: "relative" }}>
                                <ShoppingCart sx={{ fontSize: { xs: "24px", sm: "28px" } }} />
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: "-4px",
                                        right: "-8px",
                                        backgroundColor: "#FF9900",
                                        color: "#036A47",
                                        borderRadius: "50%",
                                        width: "22px",
                                        height: "22px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "12px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    0
                                </Box>
                            </IconButton>
                            {!isMobile && (
                                <Typography sx={{ fontSize: "13px", fontWeight: "bold", cursor: "pointer" }}>
                                    Cart
                                </Typography>
                            )}
                        </Box>
                    </Box>
                </Box>

                {/* Mobile: Search Bar Below Main Header */}
                {isMobile && (
                    <Box
                        display="flex"
                        alignItems="stretch"
                        sx={{
                            backgroundColor: "white",
                            borderRadius: "4px",
                            marginTop: "8px",
                            overflow: "hidden",
                        }}
                    >
                        <InputBase
                            sx={{
                                flex: 1,
                                paddingX: 1.5,
                                fontWeight: "500",
                                fontSize: "14px",
                            }}
                            placeholder="Search Hula Market"
                        />
                        <IconButton
                            type="submit"
                            sx={{
                                backgroundColor: "#FF9900",
                                borderRadius: "0px",
                                color: "white",
                                padding: "8px 12px",
                                "&:hover": { backgroundColor: "#e68a00" },
                            }}
                            size="small"
                        >
                            <Search sx={{ fontSize: "18px" }} />
                        </IconButton>
                    </Box>
                )}
            </Box>

            {/* Mobile: Deliver To Location - Below Search */}
            {isMobile && (
                <Box sx={{ backgroundColor: "#036A47", color: "white", padding: "8px 12px", fontSize: "12px" }}>
                    <Box display="flex" alignItems="center" gap={0.5} sx={{ cursor: "pointer", "&:hover": { opacity: 0.8 } }}>
                        <LocationOn sx={{ fontSize: "14px" }} />
                        <Typography sx={{ fontSize: "12px" }}>Deliver to Shamir - Nairobi 6 KOYONZO</Typography>
                    </Box>
                </Box>
            )}

            {/* Navigation Menu */}
            {!isMobile ? (
                // Desktop: Dark green navigation bar
                <Box sx={{ backgroundColor: "#085749", color: "white", padding: "8px 16px" }}>
                    <Box display="flex" alignItems="center" gap={2}>
                        {bottomMenuItems.map((label) => (
                            <Button
                                key={label}
                                color="inherit"
                                sx={{
                                    textTransform: "none",
                                    fontSize: "13px",
                                    fontWeight: "500",
                                    padding: "4px 8px",
                                    "&:hover": { backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "4px" },
                                }}
                            >
                                {label}
                            </Button>
                        ))}
                    </Box>
                </Box>
            ) : (
                // Mobile: Horizontal scrolling menu items below deliver location
                <Box sx={{ backgroundColor: "#085749", color: "white", padding: "0px", overflowX: "auto", scrollBehavior: "smooth" }}>
                    <Box display="flex" gap={0} sx={{ minWidth: "fit-content" }}>
                        {topMenuItems.map((label) => (
                            <Button
                                key={label}
                                color="inherit"
                                sx={{
                                    textTransform: "none",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    padding: "8px 12px",
                                    whiteSpace: "nowrap",
                                    borderRadius: "0px",
                                    "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                                }}
                            >
                                {label}
                            </Button>
                        ))}
                    </Box>
                </Box>
            )}

            {/* Mobile Drawer Menu */}
            <Drawer
                anchor="left"
                open={mobileMenuOpen}
                onClose={toggleMobileMenu}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: "280px",
                        backgroundColor: "#f5f5f5",
                    },
                }}
            >
                <Box
                    sx={{
                        padding: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "#036A47",
                        color: "white",
                    }}
                >
                    <Typography sx={{ fontWeight: "bold" }}>Hula Market Menu</Typography>
                    <IconButton onClick={toggleMobileMenu} sx={{ color: "white" }}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <List>
                    {[...topMenuItems, ...bottomMenuItems, "Account & Lists", "Returns & Orders"].map((label) => (
                        <ListItem component="button" key={label} onClick={toggleMobileMenu} sx={{ textAlign: "left" }}>
                            <ListItemText
                                primary={label}
                                primaryTypographyProps={{ sx: { fontWeight: "500", color: "#036A47", fontSize: "14px" } }}
                            />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};

export default Header;
