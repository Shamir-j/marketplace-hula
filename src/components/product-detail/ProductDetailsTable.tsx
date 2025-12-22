"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

interface ProductDetail {
    label: string;
    value: string;
}

interface ProductDetailsTableProps {
    details: ProductDetail[];
}

const ProductDetailsTable: React.FC<ProductDetailsTableProps> = ({ details }) => {
    return (
        <Box sx={{ marginTop: 4 }}>
            <Typography
                sx={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#0F1111",
                    marginBottom: 2
                }}
            >
                Product details
            </Typography>
            <Box sx={{ border: "1px solid #ddd", borderRadius: "4px", overflow: "hidden" }}>
                {details.map((detail, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "200px 1fr",
                            borderBottom: index < details.length - 1 ? "1px solid #ddd" : "none",
                            backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff"
                        }}
                    >
                        <Box sx={{ padding: "12px 16px", fontWeight: "700", fontSize: "14px", color: "#0F1111" }}>
                            {detail.label}
                        </Box>
                        <Box sx={{ padding: "12px 16px", fontSize: "14px", color: "#0F1111" }}>
                            {detail.value}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default ProductDetailsTable;
