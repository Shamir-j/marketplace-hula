"use client";

import { Box, Typography, InputBase, IconButton, Button, MenuItem, Select } from "@mui/material";
import { Search, ShoppingCart, Menu as MenuIcon } from "@mui/icons-material";
import React, { useState } from "react";

const Header = () => {
    const [, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedValue, setSelectedValue] = useState("option1"); // Set initial state for "All Departments"

    const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedValue(event.target.value);
    };


    const whiteTextButtonStyle = { color: "white", textTransform: "none" };

    return (
        <Box>
            <Box sx={{ backgroundColor: "#036A47", color: "white", padding: "8px 16px" }}>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography
                        variant="body2"
                        sx={{ alignSelf: "center", padding: 2, fontSize: 20, fontWeight: "bolder" }}
                    >
                        Hula Market
                    </Typography>

                    <Box
                        display="flex"
                        alignItems="left"
                        sx={{
                            backgroundColor: "white",
                            borderRadius: 1,
                            flexGrow: 1,
                            maxWidth: 1500,
                            marginX: 2,
                            padding: "0px 0px"
                        }}
                    >

                        <Select
                            value={selectedValue}
                            onChange={handleChange}
                            displayEmpty
                            autoWidth={true}


                        >
                            <MenuItem value="option1">All Departments</MenuItem>
                            <MenuItem value="option2">Electronics & Gadgets</MenuItem>
                            <MenuItem value="option3">Clothing & Accessories</MenuItem>
                            <MenuItem value="option4">Health & Wellness</MenuItem>
                            <MenuItem value="option5">Beauty & Personal Care</MenuItem>
                            <MenuItem value="option6">Home & Kitchen</MenuItem>
                            <MenuItem value="option7">Sports & Outdoors</MenuItem>
                            <MenuItem value="option8">Books & Stationery</MenuItem>
                            <MenuItem value="option9">Toys & Games</MenuItem>
                            <MenuItem value="option10">Baby Products</MenuItem>
                            <MenuItem value="option11">Automotive Supplies</MenuItem>
                            <MenuItem value="option12">Grocery & Gourmet Food</MenuItem>
                            <MenuItem value="option13">Jewelry & Watches</MenuItem>
                            <MenuItem value="option14">Office Supplies & Equipment</MenuItem>
                            <MenuItem value="option15">Pet Supplies</MenuItem>

                        </Select>
                        <InputBase sx={{ marginLeft: 1, fontWeight: "bolder" }} placeholder="Search Hula Market" fullWidth={true} />

                        <Box display="flex" sx={{ backgroundColor: "red", padding: 1, borderTopRightRadius: 2,borderTopLeftRadius: 2 }}>
                            <IconButton type="submit" sx={{ color: "#fff" }}>
                                <Search />
                            </IconButton>
                        </Box>
                    </Box>


                    <Box display="flex" alignItems="center">
                        <Button color="inherit" sx={whiteTextButtonStyle}>Hello, sign in</Button>
                        <Button color="inherit" sx={whiteTextButtonStyle}>Account & Lists</Button>
                        <Button color="inherit" sx={whiteTextButtonStyle}>Returns & Orders</Button>
                        <IconButton color="inherit" sx={{ color: "white" }}>
                            <ShoppingCart />
                        </IconButton>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ backgroundColor: "#085749", color: "white", padding: "8px 16px" }}>
                <Box display="flex" alignItems="center">
                    <IconButton onClick={handleMenuClick} sx={{ color: "white" }}>
                        <MenuIcon />
                    </IconButton>

                    <Box display="flex" alignItems="center" sx={{ marginX: 2 }}>
                        {["Today's Deals", "Customer Service", "Registry", "Gift Cards", "Sell"].map((label) => (
                            <Button key={label} color="inherit" sx={whiteTextButtonStyle}>{label}</Button>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;
