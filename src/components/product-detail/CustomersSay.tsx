"use client";

import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

interface CustomersSayProps {
    customersSay: string;
}

const CustomersSay: React.FC<CustomersSayProps> = ({ customersSay }) => {
    const tags = ["Comfort", "Quality", "Style", "Fit", "Lightweight", "Value for money", "Slip on ease", "Size"];

    return (
        <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontSize: "18px", fontWeight: "700", color: "#0F1111", marginBottom: 1 }}>
                Customers say
            </Typography>
            <Typography sx={{ fontSize: "14px", color: "#0F1111", marginBottom: 2 }}>
                {customersSay}
            </Typography>
            <Link
                href="#"
                sx={{
                    fontSize: "13px",
                    color: "#007185",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline", color: "#c45500" }
                }}
            >
                AI-generated from the text of customer reviews
            </Link>

            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", marginTop: 2 }}>
                {tags.map((tag) => (
                    <Box
                        key={tag}
                        sx={{
                            border: "1px solid #ddd",
                            borderRadius: "16px",
                            padding: "6px 12px",
                            fontSize: "12px",
                            color: "#0F1111",
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5
                        }}
                    >
                        <CheckCircle sx={{ fontSize: "14px", color: "#007600" }} />
                        {tag}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default CustomersSay;
