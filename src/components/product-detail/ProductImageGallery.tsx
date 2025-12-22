"use client";

import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";

interface ProductImageGalleryProps {
    images: string[];
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <Box sx={{ display: "flex", gap: 2 }}>
            {/* Thumbnail Column */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {images.map((img, index) => (
                    <Box
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        sx={{
                            width: "40px",
                            height: "40px",
                            border: selectedImage === index ? "2px solid #007185" : "1px solid #ddd",
                            borderRadius: "4px",
                            cursor: "pointer",
                            overflow: "hidden",
                            "&:hover": {
                                borderColor: "#007185"
                            }
                        }}
                    >
                        <Box
                            component="img"
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }}
                        />
                    </Box>
                ))}
            </Box>

            {/* Main Image */}
            <Box sx={{ flex: 1, position: "relative" }}>
                <Box
                    component="img"
                    src={images[selectedImage]}
                    alt="Product"
                    sx={{
                        width: "100%",
                        maxWidth: "500px",
                        height: "auto",
                        objectFit: "contain",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        padding: "20px",
                        backgroundColor: "#fff"
                    }}
                />
            </Box>
        </Box>
    );
};

export default ProductImageGallery;
