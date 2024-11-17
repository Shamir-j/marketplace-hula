"use client";
import React from "react";
import ProductCard from "@/components/ProductCard";
import { Box, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useRouter } from 'next/navigation';

const ResultsPage = () => {
    const router = useRouter();

    const handleLearnMore = () => {
        router.push("/results-page");
    };

    const products = [
        {
            image: "https://via.placeholder.com/150?text=Product+1",
            title: "O-Cedar EasyWring Microfiber Spin Mop & Bucket Floor Cleaning System + 2 Extra Refills",
            rating: 4.7,
            ratingCount: 78072,
            topRated: true,
            boughtCount: "10K+",
            price: 39.98,
            oldPrice: 59.97,
            deliveryDate: "Thu, Nov 14",
            location: "Kenya",
            onAddToCart: () => console.log("Added O-Cedar Mop to cart"),
            moreBuyingOptions: { price: 37.66, description: "6 used & new offers" },
        },
        {
            image: "https://via.placeholder.com/150?text=Product+2",
            title: "Apple AirPods Pro (2nd Generation) Wireless Earbuds",
            rating: 4.5,
            ratingCount: 500000,
            topRated: false,
            boughtCount: "5K+",
            price: 249.99,
            oldPrice: 299.99,
            deliveryDate: "Fri, Nov 17",
            location: "USA",
            onAddToCart: () => console.log("Added AirPods Pro to cart"),
            moreBuyingOptions: { price: 219.99, description: "10 used & new offers" },
        },
        {
            image: "https://via.placeholder.com/150?text=Product+3",
            title: "Samsung Galaxy S21 Ultra 5G",
            rating: 4.8,
            ratingCount: 32000,
            topRated: true,
            boughtCount: "20K+",
            price: 1199.99,
            oldPrice: 1399.99,
            deliveryDate: "Sat, Nov 18",
            location: "Canada",
            onAddToCart: () => console.log("Added Galaxy S21 Ultra to cart"),
            moreBuyingOptions: { price: 1149.99, description: "8 used & new offers" },
        },
        {
            image: "https://via.placeholder.com/150?text=Product+4",
            title: "Sony WH-1000XM4 Noise Cancelling Headphones",
            rating: 4.7,
            ratingCount: 27500,
            topRated: true,
            boughtCount: "15K+",
            price: 348.99,
            oldPrice: 399.99,
            deliveryDate: "Mon, Nov 20",
            location: "UK",
            onAddToCart: () => console.log("Added Sony WH-1000XM4 to cart"),
            moreBuyingOptions: { price: 329.99, description: "5 used & new offers" },
        },
        {
            image: "https://via.placeholder.com/150?text=Product+5",
            title: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
            rating: 4.6,
            ratingCount: 103000,
            topRated: false,
            boughtCount: "8K+",
            price: 89.99,
            oldPrice: 119.99,
            deliveryDate: "Wed, Nov 22",
            location: "Australia",
            onAddToCart: () => console.log("Added Instant Pot to cart"),
            moreBuyingOptions: { price: 84.99, description: "3 used & new offers" },
        },
        {
            image: "https://via.placeholder.com/150?text=Product+6",
            title: "Ninja Professional Blender with Total Crushing Technology",
            rating: 4.5,
            ratingCount: 51000,
            topRated: false,
            boughtCount: "2K+",
            price: 99.99,
            oldPrice: 139.99,
            deliveryDate: "Tue, Nov 21",
            location: "India",
            onAddToCart: () => console.log("Added Ninja Blender to cart"),
            moreBuyingOptions: { price: 94.99, description: "7 used & new offers" },
        },
        {
            image: "https://via.placeholder.com/150?text=Product+7",
            title: "JBL Flip 5 Waterproof Portable Bluetooth Speaker",
            rating: 4.6,
            ratingCount: 145000,
            topRated: true,
            boughtCount: "30K+",
            price: 89.95,
            oldPrice: 119.95,
            deliveryDate: "Sun, Nov 19",
            location: "Germany",
            onAddToCart: () => console.log("Added JBL Flip 5 to cart"),
            moreBuyingOptions: { price: 84.95, description: "4 used & new offers" },
        },
        {
            image: "https://via.placeholder.com/150?text=Product+8",
            title: "Fitbit Versa 3 Health & Fitness Smartwatch",
            rating: 4.3,
            ratingCount: 62000,
            topRated: false,
            boughtCount: "9K+",
            price: 229.95,
            oldPrice: 249.95,
            deliveryDate: "Mon, Nov 27",
            location: "France",
            onAddToCart: () => console.log("Added Fitbit Versa 3 to cart"),
            moreBuyingOptions: { price: 219.95, description: "12 used & new offers" },
        },
        {
            image: "https://via.placeholder.com/150?text=Product+9",
            title: "Anker Portable Charger, PowerCore 20100mAh",
            rating: 4.8,
            ratingCount: 97000,
            topRated: false,
            boughtCount: "12K+",
            price: 49.99,
            oldPrice: 69.99,
            deliveryDate: "Tue, Nov 28",
            location: "Italy",
            onAddToCart: () => console.log("Added Anker Charger to cart"),
            moreBuyingOptions: { price: 44.99, description: "9 used & new offers" },
        },
        {
            image: "https://via.placeholder.com/150?text=Product+10",
            title: "HP Pavilion 15 Laptop, 11th Gen Intel Core i7",
            rating: 4.4,
            ratingCount: 23000,
            topRated: false,
            boughtCount: "1K+",
            price: 799.99,
            oldPrice: 999.99,
            deliveryDate: "Thu, Nov 23",
            location: "Japan",
            onAddToCart: () => console.log("Added HP Pavilion to cart"),
            moreBuyingOptions: { price: 749.99, description: "2 used & new offers" },
        },


    ];

    return (
        <Box sx={{ backgroundColor: "#E3E6E6", p: 2, minHeight: "100vh" }}>


            <Box display="flex" flexDirection="row" justifyContent="space-between">



                <Box flex={1} mr={1}>
                    <Box
                        width="20%" 
                        p={2}
                        bgcolor="red" 
                        sx={{ borderRight: '1px solid #ddd' }}
                    >
                        <Typography variant="h6" gutterBottom>
                            Explore Related Products
                        </Typography>
                        <Divider />
                        {/* <List>
                            <ListItem button>
                                <ListItemText primary="Home Improvement" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Food Storage" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Garage Organization" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Dog Supplies" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Glass Containers" />
                            </ListItem>
                            
                        </List> */}
                    </Box>

                </Box>


                <Box flex={6} ml={1}>
                    <Box sx={{ display: "flex", justifyContent: "left", py: 4, flexWrap: "wrap", gap: 2 }}>
                        {products.map((product, index) => (
                            <ProductCard
                                key={index}
                                image={product.image}
                                title={product.title}
                                rating={product.rating}
                                ratingCount={product.ratingCount}
                                topRated={product.topRated}
                                boughtCount={product.boughtCount}
                                price={product.price}
                                oldPrice={product.oldPrice}
                                deliveryDate={product.deliveryDate}
                                location={product.location}
                                onAddToCart={product.onAddToCart}
                                moreBuyingOptions={product.moreBuyingOptions}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>

        </Box >
    );
};

export default ResultsPage;
