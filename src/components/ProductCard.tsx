import React from "react";
import { Card, CardMedia, CardContent, Typography, Box, Button, Rating } from "@mui/material";

interface ProductCardProps {
    image: string;
    title: string;
    rating: number;
    ratingCount: number;
    topRated?: boolean;
    boughtCount?: string;
    price: number;
    oldPrice?: number;
    deliveryDate: string;
    location: string;
    onAddToCart: () => void;
    moreBuyingOptions?: {
        price: number;
        description: string;
    };
}

const ProductCard: React.FC<ProductCardProps> = ({
    image,
    title,
    rating,
    ratingCount,
    topRated = false,
    boughtCount,
    price,
    oldPrice,
    deliveryDate,
    location,
    onAddToCart,
    moreBuyingOptions,
}) => {
    return (
        <Card sx={{ width: 300, boxShadow: 3 }}>
            <CardMedia
                component="img"
                height="250"
                image={image}
                alt={title}
            />

            <CardContent>
                <Typography variant="subtitle2" fontWeight="normal" gutterBottom color="black">
                    {title}
                </Typography>

                <Box display="flex" alignItems="left" mb={1} flexDirection="column">
                    {topRated && (
                        <Typography variant="body2" color="black" fontWeight="bold" mb={1}>
                            #1 Top Rated
                        </Typography>
                    )}

                    <Box display="flex" alignItems="left" mb={1} flexDirection="row">
                        <Rating value={rating} precision={0.1} readOnly size="small" />
                        <Typography variant="inherit" color="textSecondary" sx={{ ml: 2 }}>
                            {ratingCount.toLocaleString()}
                        </Typography>
                    </Box>
                </Box>

                {boughtCount && (
                    <Typography variant="body2" color="textSecondary">
                        {boughtCount} bought in past month
                    </Typography>
                )}

                <Box mt={2} mb={2}>
                    <Typography variant="h6" component="div" fontWeight="bold">
                        ${price.toFixed(2)}
                    </Typography>
                    {oldPrice && (
                        <Typography variant="body2" color="textSecondary" sx={{ textDecoration: "line-through" }}>
                            Was: ${oldPrice.toFixed(2)}
                        </Typography>
                    )}
                    <Typography variant="body2" color="textSecondary">
                        Delivery {deliveryDate}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Ships to {location}
                    </Typography>
                </Box>

                <Button
                    variant="contained"
                    sx={{ backgroundColor: "#FFD814", color: "#000000", textTransform: "none", borderRadius: 20 }}
                    onClick={onAddToCart}
                >
                    Add to cart
                </Button>

                {moreBuyingOptions && (
                    <Box mt={2}>
                        <Typography variant="body2" color="primary">
                            More Buying Choices
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            ${moreBuyingOptions.price.toFixed(2)} <span style={{ color: "blue" }}>({moreBuyingOptions.description})</span>
                        </Typography>
                    </Box>
                )}
            </CardContent>
        </Card>
    );
};

export default ProductCard;
