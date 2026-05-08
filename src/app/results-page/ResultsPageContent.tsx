"use client";
import React, { useState } from "react";
import { 
    Box, 
    Typography, 
    Checkbox, 
    FormControlLabel, 
    FormGroup, 
    Rating, 
    Divider,
    Button,
    Chip,
    Link,
    Select,
    MenuItem,
    FormControl,
    Card,
    CardMedia,
    CardContent
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ResultsPage = () => {
    const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
        brands: true,
        seller: true,
        color: false,
        premiumBrands: false,
        releaseDate: false
    });

    const toggleSection = (section: string) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const products = [
        {
            id: 1,
            image: "https://placehold.co/300x300?text=PS5+Console",
            title: "PS5 - Sony PlayStation 5 Digital Edition Gaming Console + Wireless Controller - 16GB GDDR6 RAM, 825GB SSD, 120Hz 8K Output, White",
            rating: 4.4,
            ratingCount: 117,
            boughtCount: "4K+",
            price: 55377.15,
            oldPrice: null,
            usedOffers: "57 used & new offers",
            badge: null,
            category: "PlayStation 5"
        },
        {
            id: 2,
            image: "https://placehold.co/300x300?text=Portal+Remote",
            title: "PlayStation Portal Remote Player - Midnight Black",
            rating: 4.4,
            ratingCount: 5200,
            boughtCount: "10K+",
            price: 23078.97,
            oldPrice: null,
            usedOffers: "9 used & new offers",
            badge: null,
            category: "PlayStation 5",
            releaseDate: "Feb 20, 2025"
        },
        {
            id: 3,
            image: "https://placehold.co/300x300?text=Gift+Card",
            title: "$150 PlayStation Store Gift Card [Digital Code]",
            rating: 4.6,
            ratingCount: 273800,
            boughtCount: null,
            price: 19341.00,
            oldPrice: null,
            usedOffers: null,
            badge: "Best Seller",
            category: "PlayStation 5"
        },
        {
            id: 4,
            image: "https://placehold.co/300x300?text=Gift+Card+100",
            title: "$100 PlayStation Store Gift Card [Digital Code]",
            rating: 4.6,
            ratingCount: 273800,
            boughtCount: null,
            price: 12894.00,
            oldPrice: null,
            usedOffers: null,
            badge: null,
            category: "PlayStation 4"
        },
        {
            id: 5,
            image: "https://placehold.co/300x300?text=Charging+Station",
            title: "PlayStation 5 DualSense Charging Station",
            rating: 4.7,
            ratingCount: 82300,
            boughtCount: "20K+",
            price: 3867.50,
            oldPrice: 4500.00,
            usedOffers: "12 used & new offers",
            badge: null,
            category: "PlayStation 5"
        },
        {
            id: 6,
            image: "https://placehold.co/300x300?text=Headset",
            title: "PlayStation 5 Pulse 3D Wireless Gaming Headset - White",
            rating: 4.5,
            ratingCount: 45600,
            boughtCount: "15K+",
            price: 12500.00,
            oldPrice: 15000.00,
            usedOffers: "8 used & new offers",
            badge: null,
            category: "PlayStation 5"
        }
    ];

    return (
        <Box sx={{ backgroundColor: "#E3E6E6", minHeight: "100vh" }}>
            <Box sx={{ display: "flex", maxWidth: "1500px", mx: "auto", pt: 2 }}>
                {/* Left Sidebar - Filters */}
                <Box 
                    sx={{ 
                        width: "260px", 
                        backgroundColor: "#fff", 
                        p: 2, 
                        mr: 2,
                        height: "fit-content",
                        borderRadius: "4px"
                    }}
                >
                    {/* Popular Shopping Ideas */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" sx={{ fontSize: "16px", fontWeight: "bold", mb: 1 }}>
                            Popular Shopping Ideas
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                            <Link href="#" underline="hover" sx={{ color: "#007185", fontSize: "13px" }}>Ps5</Link>
                            <Link href="#" underline="hover" sx={{ color: "#007185", fontSize: "13px" }}>Ps4</Link>
                            <Link href="#" underline="hover" sx={{ color: "#007185", fontSize: "13px" }}>Ps5 Games</Link>
                            <Link href="#" underline="hover" sx={{ color: "#007185", fontSize: "13px" }}>Ps5 Controller</Link>
                        </Box>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    {/* Customer Reviews */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" sx={{ fontSize: "16px", fontWeight: "bold", mb: 1 }}>
                            Customer Reviews
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer", "&:hover": { color: "#C7511F" } }}>
                            <Rating value={4} readOnly size="small" />
                            <Typography sx={{ fontSize: "13px", color: "#007185" }}>& Up</Typography>
                        </Box>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    {/* Deals & Discounts */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" sx={{ fontSize: "16px", fontWeight: "bold", mb: 1 }}>
                            Deals & Discounts
                        </Typography>
                        <Link href="#" underline="hover" sx={{ color: "#007185", fontSize: "13px", display: "block", mb: 0.5 }}>
                            All Discounts
                        </Link>
                        <Link href="#" underline="hover" sx={{ color: "#007185", fontSize: "13px", display: "block" }}>
                            Buy More, Save More
                        </Link>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    {/* Brands */}
                    <Box sx={{ mb: 3 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                            <Typography variant="h6" sx={{ fontSize: "16px", fontWeight: "bold" }}>
                                Brands
                            </Typography>
                            <Box 
                                onClick={() => toggleSection('brands')} 
                                sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
                            >
                                {expandedSections.brands ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </Box>
                        </Box>
                        {expandedSections.brands && (
                            <FormGroup>
                                <FormControlLabel 
                                    control={<Checkbox size="small" />} 
                                    label={<Typography sx={{ fontSize: "13px" }}>PlayStation</Typography>} 
                                />
                                <FormControlLabel 
                                    control={<Checkbox size="small" />} 
                                    label={<Typography sx={{ fontSize: "13px" }}>Sony</Typography>} 
                                />
                                <FormControlLabel 
                                    control={<Checkbox size="small" />} 
                                    label={<Typography sx={{ fontSize: "13px" }}>Nintendo</Typography>} 
                                />
                                <FormControlLabel 
                                    control={<Checkbox size="small" />} 
                                    label={<Typography sx={{ fontSize: "13px" }}>SEGA</Typography>} 
                                />
                                <FormControlLabel 
                                    control={<Checkbox size="small" />} 
                                    label={<Typography sx={{ fontSize: "13px" }}>SIE</Typography>} 
                                />
                                <FormControlLabel 
                                    control={<Checkbox size="small" />} 
                                    label={<Typography sx={{ fontSize: "13px" }}>Electronic Arts</Typography>} 
                                />
                            </FormGroup>
                        )}
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    {/* Seller */}
                    <Box sx={{ mb: 3 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                            <Typography variant="h6" sx={{ fontSize: "16px", fontWeight: "bold" }}>
                                Seller
                            </Typography>
                            <Box 
                                onClick={() => toggleSection('seller')} 
                                sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
                            >
                                {expandedSections.seller ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </Box>
                        </Box>
                        {expandedSections.seller && (
                            <FormGroup>
                                <FormControlLabel 
                                    control={<Checkbox size="small" />} 
                                    label={<Typography sx={{ fontSize: "13px" }}>Birdie's Games</Typography>} 
                                />
                                <FormControlLabel 
                                    control={<Checkbox size="small" />} 
                                    label={<Typography sx={{ fontSize: "13px" }}>rock_30_games</Typography>} 
                                />
                                <Link href="#" sx={{ fontSize: "13px", color: "#007185", mt: 1 }}>See more</Link>
                            </FormGroup>
                        )}
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    {/* Color */}
                    <Box sx={{ mb: 3 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                            <Typography variant="h6" sx={{ fontSize: "16px", fontWeight: "bold" }}>
                                Color
                            </Typography>
                            <Box 
                                onClick={() => toggleSection('color')} 
                                sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
                            >
                                {expandedSections.color ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </Box>
                        </Box>
                        {expandedSections.color && (
                            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
                                <Box sx={{ width: 24, height: 24, backgroundColor: "#000", border: "1px solid #ddd", cursor: "pointer", borderRadius: "50%" }} />
                                <Box sx={{ width: 24, height: 24, backgroundColor: "#fff", border: "1px solid #ddd", cursor: "pointer", borderRadius: "50%" }} />
                                <Box sx={{ width: 24, height: 24, backgroundColor: "#dc143c", border: "1px solid #ddd", cursor: "pointer", borderRadius: "50%" }} />
                                <Box sx={{ width: 24, height: 24, backgroundColor: "#808080", border: "1px solid #ddd", cursor: "pointer", borderRadius: "50%" }} />
                                <Box sx={{ width: 24, height: 24, backgroundColor: "#ffb6c1", border: "1px solid #ddd", cursor: "pointer", borderRadius: "50%" }} />
                                <Box sx={{ width: 24, height: 24, backgroundColor: "#ffa500", border: "1px solid #ddd", cursor: "pointer", borderRadius: "50%" }} />
                                <Box sx={{ width: 24, height: 24, backgroundColor: "#ffd700", border: "1px solid #ddd", cursor: "pointer", borderRadius: "50%" }} />
                                <Box sx={{ width: 24, height: 24, backgroundColor: "#00ff00", border: "1px solid #ddd", cursor: "pointer", borderRadius: "50%" }} />
                                <Box sx={{ width: 24, height: 24, backgroundColor: "#0000ff", border: "1px solid #ddd", cursor: "pointer", borderRadius: "50%" }} />
                                <Box sx={{ width: 24, height: 24, backgroundColor: "#800080", border: "1px solid #ddd", cursor: "pointer", borderRadius: "50%" }} />
                            </Box>
                        )}
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    {/* Premium Brands */}
                    <Box sx={{ mb: 3 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                            <Typography variant="h6" sx={{ fontSize: "16px", fontWeight: "bold" }}>
                                Premium Brands
                            </Typography>
                            <Box 
                                onClick={() => toggleSection('premiumBrands')} 
                                sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
                            >
                                {expandedSections.premiumBrands ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </Box>
                        </Box>
                        {expandedSections.premiumBrands && (
                            <FormGroup>
                                <FormControlLabel 
                                    control={<Checkbox size="small" />} 
                                    label={<Typography sx={{ fontSize: "13px" }}>Premium Brands</Typography>} 
                                />
                            </FormGroup>
                        )}
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    {/* Release Date */}
                    <Box sx={{ mb: 3 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                            <Typography variant="h6" sx={{ fontSize: "16px", fontWeight: "bold" }}>
                                Release Date
                            </Typography>
                            <Box 
                                onClick={() => toggleSection('releaseDate')} 
                                sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
                            >
                                {expandedSections.releaseDate ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </Box>
                        </Box>
                        {expandedSections.releaseDate && (
                            <FormGroup>
                                <FormControlLabel 
                                    control={<Checkbox size="small" />} 
                                    label={<Typography sx={{ fontSize: "13px" }}>Last 30 days</Typography>} 
                                />
                                <FormControlLabel 
                                    control={<Checkbox size="small" />} 
                                    label={<Typography sx={{ fontSize: "13px" }}>Last 90 days</Typography>} 
                                />
                            </FormGroup>
                        )}
                    </Box>
                </Box>

                {/* Main Content - Product Results */}
                <Box sx={{ flex: 1 }}>
                    {/* Results Header */}
                    <Box sx={{ backgroundColor: "#fff", p: 2, mb: 2, borderRadius: "4px" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Typography variant="body2">
                                1-16 of over 70,000 results for <Typography component="span" sx={{ color: "#C7511F", fontWeight: "bold" }}>"Play Station"</Typography>
                            </Typography>
                            <FormControl size="small" sx={{ minWidth: 200 }}>
                                <Select defaultValue="featured" sx={{ fontSize: "13px" }}>
                                    <MenuItem value="featured">Sort by: Featured</MenuItem>
                                    <MenuItem value="price-low">Price: Low to High</MenuItem>
                                    <MenuItem value="price-high">Price: High to Low</MenuItem>
                                    <MenuItem value="rating">Avg. Customer Review</MenuItem>
                                    <MenuItem value="newest">Newest Arrivals</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>

                    {/* Product Grid */}
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
                        {products.map((product, index) => (
                            <Box key={product.id}>
                                {/* Sponsored Badge */}
                                {product.badge === "Best Seller" && (
                                    <Box sx={{ backgroundColor: "#fff", pt: 2, px: 2 }}>
                                        <Typography variant="caption" sx={{ color: "#565959", fontSize: "12px" }}>
                                            Sponsored
                                        </Typography>
                                    </Box>
                                )}

                                <Card 
                                    sx={{ 
                                        display: "flex", 
                                        p: 2,
                                        pt: product.badge === "Best Seller" ? 1 : 2,
                                        backgroundColor: "#fff",
                                        boxShadow: "none",
                                        borderRadius: 0,
                                        borderBottom: index < products.length - 1 ? "1px solid #e7e7e7" : "none",
                                        cursor: "pointer",
                                        "&:hover": {
                                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                                        }
                                    }}
                                >
                                    {/* Product Image */}
                                    <Box sx={{ width: "180px", height: "180px", flexShrink: 0, mr: 2 }}>
                                        <CardMedia
                                            component="img"
                                            image={product.image}
                                            alt={product.title}
                                            sx={{ width: "100%", height: "100%", objectFit: "contain" }}
                                        />
                                    </Box>

                                    {/* Product Details */}
                                    <Box sx={{ flex: 1 }}>
                                        <Typography 
                                            variant="h6" 
                                            sx={{ 
                                                fontSize: "17px", 
                                                fontWeight: "normal", 
                                                mb: 1,
                                                lineHeight: 1.3,
                                                color: "#007185",
                                                cursor: "pointer",
                                                "&:hover": { color: "#C7511F", textDecoration: "underline" }
                                            }}
                                        >
                                            {product.title}
                                        </Typography>

                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
                                            <Typography variant="body2" sx={{ fontSize: "14px", color: "#007600", fontWeight: "bold" }}>
                                                {product.rating}
                                            </Typography>
                                            <Rating value={product.rating} precision={0.1} size="small" readOnly sx={{ color: "#FFA41C" }} />
                                            <Link href="#" underline="hover" sx={{ fontSize: "14px", color: "#007185" }}>
                                                ({product.ratingCount.toLocaleString()})
                                            </Link>
                                        </Box>

                                        {product.boughtCount && (
                                            <Typography variant="body2" sx={{ fontSize: "12px", color: "#565959", mb: 1 }}>
                                                New on Amazon in past month
                                            </Typography>
                                        )}

                                        <Box sx={{ display: "flex", alignItems: "baseline", gap: 0.5, mb: 1.5 }}>
                                            <Typography variant="body2" sx={{ fontSize: "12px", color: "#0F1111" }}>
                                                KES
                                            </Typography>
                                            <Typography variant="h5" sx={{ fontSize: "28px", fontWeight: "normal", color: "#0F1111" }}>
                                                {Math.floor(product.price).toLocaleString('en-KE')}
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontSize: "12px", color: "#0F1111", verticalAlign: "super" }}>
                                                {(product.price % 1).toFixed(2).substring(1)}
                                            </Typography>
                                        </Box>

                                        <Typography variant="body2" sx={{ fontSize: "14px", color: "#0F1111", mb: 0.5 }}>
                                            Delivery <strong>Wed, Jan 21</strong>
                                        </Typography>

                                        <Typography variant="body2" sx={{ fontSize: "12px", color: "#565959", mb: 0.5 }}>
                                            Ships to Kenya
                                        </Typography>

                                        <Typography variant="body2" sx={{ fontSize: "14px", color: "#B12704", mb: 1.5 }}>
                                            Only 1 left in stock - order soon.
                                        </Typography>

                                        <Button
                                            variant="contained"
                                            sx={{
                                                backgroundColor: "#FFD814",
                                                color: "#0F1111",
                                                textTransform: "none",
                                                fontSize: "13px",
                                                fontWeight: "normal",
                                                borderRadius: "8px",
                                                px: 2,
                                                py: 0.5,
                                                boxShadow: "none",
                                                "&:hover": {
                                                    backgroundColor: "#F7CA00",
                                                    boxShadow: "none"
                                                }
                                            }}
                                        >
                                            Add to cart
                                        </Button>

                                        <Link 
                                            href="#" 
                                            underline="hover" 
                                            sx={{ 
                                                fontSize: "12px", 
                                                color: "#007185",
                                                display: "block",
                                                mt: 1.5
                                            }}
                                        >
                                            +13 other colors/patterns
                                        </Link>
                                    </Box>
                                </Card>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ResultsPage;
