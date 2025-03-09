"use client";

import { AddCircleOutlineOutlined, RemoveCircleOutlineOutlined } from "@mui/icons-material";
import { Box, Button, Divider, IconButton, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const QuantityControl = ({ quantity, onChange }: { quantity: number; onChange: (amount: number) => void }) => (
    <Box display="flex" alignItems="center" gap={1}>
        <Typography color="#036A47" fontWeight="normal">Quantity:</Typography>
        <IconButton onClick={() => onChange(-1)} aria-label="decrease quantity">
            <RemoveCircleOutlineOutlined />
        </IconButton>
        <TextField
            value={quantity}
            onChange={(e) => onChange(Number(e.target.value) - quantity)}
            size="small"
            variant="outlined"
            type="number"
            inputProps={{ style: { textAlign: "center", width: 60 } }}
        />
        <IconButton onClick={() => onChange(1)} aria-label="increase quantity">
            <AddCircleOutlineOutlined />
        </IconButton>
    </Box>
);

const SubtotalSection = ({ subtotal }: { subtotal: string }) => (
    <Box display="flex" justifyContent="space-between" mt={2}>
        <Typography color="#036A47" fontWeight="normal">Subtotal (2 items):</Typography>
        <Typography color="#036A47" fontWeight="bolder">{subtotal}</Typography>
    </Box>
);

const ShoppingCart = () => {
    const [quantity, setQuantity] = useState<number>(1);

    const handleQuantityChange = (amount: number) => {
        setQuantity((prevQuantity) => Math.max(prevQuantity + amount, 1));
    };

    return (
        <Box sx={{ backgroundColor: "#E3E6E6", p: 2, minHeight: "100vh" }}>
            <Box display="flex" justifyContent="space-between" px={22} gap={2}>
                {/* Cart Section */}
                <Box flex={1}>
                    <Box bgcolor="#FFFFFF" p={2}>
                        <Typography variant="h6" fontWeight="bolder" color="#000000">Shopping Cart</Typography>
                        <Typography color="#036A47" textAlign="right">Price</Typography>
                        <Divider />

                        <Box display="flex" mt={2} gap={3}>
                            <Image src="https://via.placeholder.com/150?text=Product+1" alt="Knifes" width={200} height={200} style={{ borderRadius: 8 }} />
                            <Box flex={1}>

                                <Box display="flex" flexDirection="row" justifyContent="space-between">
                                    <Typography color="#000000">Knife Sets for Kitchen with Block, HUNTER.DUAL 15 Pcs Kitchen Knife Set with Block Self Sharpening, Dishwasher Safe, Anti-slip Handle, Black</Typography>
                                    <Typography fontWeight="bolder" color="#036A47">$49.99</Typography>
                                </Box>

                                <Typography mt={2} fontSize={14} color="#036A47">In Stock</Typography>

                                <Box display="flex" mt={2} gap={1} alignItems="center">
                                    <QuantityControl quantity={quantity} onChange={handleQuantityChange} />
                                    <Divider orientation="vertical" flexItem />
                                    {["Delete", "Save for later", "Compare with similar items", "Share"].map((action) => (
                                        <Button key={action} size="small" sx={{ textTransform: "none" }}>{action}</Button>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                        <Divider sx={{ my: 2 }} />

                        
                        <Box display="flex" mt={2} gap={3}>
                            <Image src="https://via.placeholder.com/150?text=Product+1" alt="Knifes" width={200} height={200} style={{ borderRadius: 8 }} />
                            <Box flex={1}>

                                <Box display="flex" flexDirection="row" justifyContent="space-between">
                                    <Typography color="#000000">Knife Sets for Kitchen with Block, HUNTER.DUAL 15 Pcs Kitchen Knife Set with Block Self Sharpening, Dishwasher Safe, Anti-slip Handle, Black</Typography>
                                    <Typography fontWeight="bolder" color="#036A47">$49.99</Typography>
                                </Box>

                                <Typography mt={2} fontSize={14} color="#036A47">In Stock</Typography>

                                <Box display="flex" mt={2} gap={1} alignItems="center">
                                    <QuantityControl quantity={quantity} onChange={handleQuantityChange} />
                                    <Divider orientation="vertical" flexItem />
                                    {["Delete", "Save for later", "Compare with similar items", "Share"].map((action) => (
                                        <Button key={action} size="small" sx={{ textTransform: "none" }}>{action}</Button>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                        <Divider sx={{ my: 2 }} />
                        
                        <SubtotalSection subtotal="$119.98" />
                    </Box>

                    <Typography mt={2} fontSize={14} color="#000000">The price and availability of items at Hula.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item&#39;s most recent price. Learn more</Typography>

                </Box>

                {/* Checkout Summary */}
                <Box minWidth="20%">
                    <Box bgcolor="#FFFFFF" p={2}>
                        <SubtotalSection subtotal="$119.98" />
                        <Button
                            variant="contained"
                            size="small"
                            fullWidth
                            sx={{ textTransform: "none", mt: 2, borderRadius: 5, backgroundColor: "#FFA41C" }}
                        >
                            Proceed to checkout
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ShoppingCart;
