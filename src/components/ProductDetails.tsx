"use client";

import React, { useState } from "react";
import {
    Box,
    TextField,
    Button,
    Divider,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemText,
    Rating,
    Typography,
} from "@mui/material";
import Image from "next/image";
import {
    AddCircleOutlineOutlined,
    LocationOnOutlined,
    RemoveCircleOutlineOutlined,
} from "@mui/icons-material";
import { features } from "@/app/constants/constants";

const ProductDetailsPage: React.FC = () => {
    const [quantity, setQuantity] = useState<number>(1);

    const handleQuantityChange = (amount: number) => {
        setQuantity((prevQuantity) => Math.max(prevQuantity + amount, 1));
    };

    return (
        <Box sx={{ backgroundColor: "#E3E6E6", p: 2, minHeight: "100vh" }}>
            <Box display="flex" justifyContent="space-between" px={20}>
                <Box width="40%" mr={1}>
                    <Image
                        src="https://via.placeholder.com/150?text=Product+1"
                        alt="Knifes"
                        width={500}
                        height={500}
                        style={{ borderRadius: 8, width: "100%" }}
                    />
                </Box>

                <Box width="30%" mx={1}>
                    <Typography color="black" textAlign="left" mb={2}>
                        Knife Sets for Kitchen with Block, HUNTER.DUAL 15 Pcs Kitchen Knife Set with Block Self Sharpening, Dishwasher Safe, Anti-slip Handle, Black
                    </Typography>

                    <Link component="button" variant="body2" onClick={() => console.info("Redirecting to OLANLY Store...")}>
                        Visit the OLANLY Store
                    </Link>

                    <Box display="flex" alignItems="center" gap={0.5} mb={1} mt={1}>
                        <Typography color="textSecondary">4.4</Typography>
                        <Rating value={4.4} precision={0.1} readOnly size="small" />
                        <Typography color="textSecondary">3,000 ratings</Typography>
                    </Box>

                    <Typography color="textSecondary">9K+ bought in the past month</Typography>
                    <Divider sx={{ my: 2 }} />

                    <Box>
                        <Typography color="textSecondary">-13% $69.99</Typography>
                        <Typography color="textSecondary" mt={1}>List Price: $79.99</Typography>
                        <Typography color="textSecondary" mt={1}>Join Prime to buy this item at $49.98</Typography>

                        {[{
                            label: "Color", value: "Chrome"
                        }, {
                            label: "Brand", value: "Veken"
                        }, {
                            label: "Style", value: "Modern"
                        }, {
                            label: "Shape", value: "Rectangular"
                        }, {
                            label: "Material", value: "Acrylonitrile Butadiene Styrene"
                        }, {
                            label: "Finished Type", value: "Polished"
                        }].map((item) => (
                            <Box display="flex" alignItems="center" gap={1} mt={2} key={item.label}>
                                <Typography color="black" fontWeight="bold">{item.label}:</Typography>
                                <Typography color="black">{item.value}</Typography>
                            </Box>
                        ))}
                    </Box>

                    <Divider sx={{ my: 1 }} />

                    <Box>
                        <Typography color="textSecondary" mt={5} fontWeight="bold">About this item</Typography>
                        <List>
                            {features.map((feature, index) => (
                                <ListItem key={index} disableGutters>
                                    <ListItemText
                                        primary={<Typography fontWeight="bold" color="black">{feature.title}</Typography>}
                                        secondary={<Typography color="black">{feature.description}</Typography>}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Box>

                <Box width="20%" ml={1}>
                    <Box
                        sx={{
                            width: "100%",
                            border: 0.5,
                            borderColor: "gray",
                            borderRadius: 2,
                            display: "flex",
                            flexDirection: "column",
                            p: 2,
                        }}
                    >
                        {[
                            "$69.99",
                            "$98.08 Shipping & Import Fee",
                            "Deposit to Kenya Details",
                            "Delivery Wednesday, November 20",
                            "Or fastest delivery Monday, November 18. Order within 22 hrs 17 mins",
                        ].map((text, idx) => (
                            <Typography key={idx} color="#000000" mt={1} textAlign="left">{text}</Typography>
                        ))}

                        <Box display="flex" alignItems="center" gap={1} mt={2}>
                            <LocationOnOutlined sx={{ color: "#036A47", fontSize: 16 }} />
                            <Typography color="#036A47" fontSize={14}>Delivery to Kenya</Typography>
                        </Box>

                        <Typography color="#036A47" mt={2} textAlign="left">In Stock</Typography>

                        <Box display="flex" alignItems="center" gap={1} mt={2}>
                            <Typography color="#036A47" textAlign="left" fontWeight="normal">
                                Quantity:
                            </Typography>

                            <IconButton onClick={() => handleQuantityChange(-1)} aria-label="decrease quantity">
                                <RemoveCircleOutlineOutlined />
                            </IconButton>

                            <TextField
                                value={quantity}
                                onChange={(e) => setQuantity(Math.max(Number(e.target.value), 1))}
                                slotProps={{
                                    input: {
                                        style: { textAlign: "center", width: 60 },
                                    },
                                }}
                                size="small"
                                variant="outlined"
                                type="number"
                            />

                            <IconButton onClick={() => handleQuantityChange(1)} aria-label="increase quantity">
                                <AddCircleOutlineOutlined />
                            </IconButton>
                        </Box>


                        {["Add to Cart", "Buy Now"].map((label, idx) => (
                            <Button
                                key={label}
                                variant="contained"
                                fullWidth
                                sx={{
                                    backgroundColor: idx === 0 ? "#FFD814" : "#FFA41C",
                                    color: "#000000",
                                    textTransform: "none",
                                    borderRadius: 20,
                                    mt: 2,
                                }}
                            >
                                {label}
                            </Button>
                        ))}

                        <Box mt={4} display="flex" flexDirection="row">
                            <Box flex={1}>
                                <Typography color="#000000" textAlign="left">Ships from</Typography>
                            </Box>
                            <Box flex={2}>
                                <Typography color="#036A47" textAlign="left">Hula Market</Typography>
                            </Box>
                        </Box>

                        <Box mt={2} display="flex" flexDirection="row">
                            <Box flex={1}>
                                <Typography color="#000000" textAlign="left">Sold by</Typography>
                            </Box>
                            <Box flex={2}>
                                <Typography color="#036A47" textAlign="left">Bree Style</Typography>
                            </Box>
                        </Box>

                        <Box mt={2} display="flex" flexDirection="row">
                            <Box flex={1}>
                                <Typography color="#000000" textAlign="left">Returns</Typography>
                            </Box>
                            <Box flex={2}>
                                <Typography color="#036A47" textAlign="left">Returnable until Jan 31, 2025</Typography>
                            </Box>
                        </Box>

                        <Box mt={2} display="flex" flexDirection="row">
                            <Box flex={1}>
                                <Typography color="#000000" textAlign="left">Packaging</Typography>
                            </Box>
                            <Box flex={2}>
                                <Typography color="#036A47" textAlign="left">Ships in product packaging</Typography>
                            </Box>
                        </Box>

                        <Box mt={2} display="flex" flexDirection="row">
                            <Box flex={1}>
                                <Typography color="#000000" textAlign="left">Payment</Typography>
                            </Box>
                            <Box flex={2}>
                                <Typography color="#036A47" textAlign="left">Secure transaction</Typography>
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ProductDetailsPage;
