"use client";

import React from "react";
import { Box, Typography, Button, Link, Checkbox, FormControlLabel } from "@mui/material";
import { LocationOn } from "@mui/icons-material";

interface ProductPurchaseProps {
    price: number;
    shippingCost: number;
    deliveryDate: string;
}

const ProductPurchase: React.FC<ProductPurchaseProps> = ({
    price,
    shippingCost,
    deliveryDate
}) => {
    return (
        <Box
            sx={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "20px",
                backgroundColor: "#fff",
                position: "sticky",
                top: "20px"
            }}
        >
            {/* Price */}
            <Typography sx={{ fontSize: "28px", fontWeight: "400", color: "#0F1111", marginBottom: 1 }}>
                ${price.toFixed(2)}
            </Typography>

            {/* Shipping Info */}
            <Typography sx={{ fontSize: "12px", color: "#565959", marginBottom: 1 }}>
                ${shippingCost.toFixed(2)} Shipping & Import Charges to Kenya{" "}
                <Link href="#" sx={{ color: "#007185", fontSize: "12px" }}>
                    Details
                </Link>
            </Typography>

            {/* Delivery Location */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, marginBottom: 2 }}>
                <LocationOn sx={{ fontSize: "16px", color: "#565959" }} />
                <Link
                    href="#"
                    sx={{
                        fontSize: "12px",
                        color: "#007185",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline", color: "#c45500" }
                    }}
                >
                    Deliver to Kenya
                </Link>
            </Box>

            {/* Delivery Date */}
            <Typography sx={{ fontSize: "18px", color: "#007600", fontWeight: "700", marginBottom: 1 }}>
                Delivery {deliveryDate}
            </Typography>

            <Typography sx={{ fontSize: "14px", color: "#007600", marginBottom: 2 }}>
                Or fastest delivery {deliveryDate}
            </Typography>

            {/* Stock Status */}
            <Typography sx={{ fontSize: "18px", color: "#007600", fontWeight: "400", marginBottom: 2 }}>
                In Stock
            </Typography>

            {/* Seller Info */}
            <Box sx={{ marginBottom: 2 }}>
                <Box sx={{ display: "flex", gap: 1, fontSize: "12px", color: "#565959", marginBottom: 0.5 }}>
                    <Typography sx={{ fontSize: "12px", color: "#565959" }}>Ships from</Typography>
                    <Typography sx={{ fontSize: "12px", color: "#0F1111" }}>Hula</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 1, fontSize: "12px", color: "#565959" }}>
                    <Typography sx={{ fontSize: "12px", color: "#565959" }}>Sold by</Typography>
                    <Typography sx={{ fontSize: "12px", color: "#0F1111" }}>Hey Dude Official</Typography>
                </Box>
            </Box>

            {/* Returns */}
            <Box sx={{ marginBottom: 2 }}>
                <Typography sx={{ fontSize: "12px", color: "#565959" }}>Returns</Typography>
                <Link
                    href="#"
                    sx={{
                        fontSize: "12px",
                        color: "#007185",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" }
                    }}
                >
                    30-day refund/replacement
                </Link>
            </Box>

            {/* Payment */}
            <Box sx={{ marginBottom: 2 }}>
                <Typography sx={{ fontSize: "12px", color: "#565959" }}>Payment</Typography>
                <Link
                    href="#"
                    sx={{
                        fontSize: "12px",
                        color: "#007185",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" }
                    }}
                >
                    Secure transaction
                </Link>
            </Box>

            {/* Add to Cart Button */}
            <Button
                fullWidth
                sx={{
                    backgroundColor: "#FFD814",
                    color: "#0F1111",
                    fontSize: "13px",
                    fontWeight: "400",
                    padding: "8px",
                    borderRadius: "20px",
                    textTransform: "none",
                    marginBottom: 1,
                    "&:hover": {
                        backgroundColor: "#F7CA00"
                    }
                }}
            >
                Add to Cart
            </Button>

            {/* Buy Now Button */}
            <Button
                fullWidth
                sx={{
                    backgroundColor: "#FFA41C",
                    color: "#0F1111",
                    fontSize: "13px",
                    fontWeight: "400",
                    padding: "8px",
                    borderRadius: "20px",
                    textTransform: "none",
                    marginBottom: 2,
                    "&:hover": {
                        backgroundColor: "#FA8900"
                    }
                }}
            >
                Buy Now
            </Button>

            {/* Gift Receipt Checkbox */}
            <FormControlLabel
                control={<Checkbox size="small" />}
                label={
                    <Typography sx={{ fontSize: "12px", color: "#0F1111" }}>
                        Add a gift receipt for easy returns
                    </Typography>
                }
                sx={{ marginBottom: 2 }}
            />

            {/* Add to List Link */}
            <Link
                href="#"
                sx={{
                    fontSize: "13px",
                    color: "#007185",
                    textDecoration: "none",
                    display: "block",
                    "&:hover": { textDecoration: "underline", color: "#c45500" }
                }}
            >
                Add to List
            </Link>
        </Box>
    );
};

export default ProductPurchase;
