"use client";

import React from "react";
import { Box, Container } from "@mui/material";
import ProductImageGallery from "@/components/product-detail/ProductImageGallery";
import ProductInfo from "@/components/product-detail/ProductInfo";
import ProductPurchase from "@/components/product-detail/ProductPurchase";
import ProductDetailsTable from "@/components/product-detail/ProductDetailsTable";
import ProductDescription from "@/components/product-detail/ProductDescription";
import RecommendedProducts from "@/components/product-detail/RecommendedProducts";
import BrandSection from "@/components/product-detail/BrandSection";
import CustomerReviews from "@/components/product-detail/CustomerReviews";
import PersonalizedRecommendations from "@/components/home/PersonalizedRecommendations";
import CustomersViewed from "@/components/home/CustomersViewed";

const ProductDetails = () => {
    const productImages = [
        "https://placehold.co/600x600?text=Shoe+Main",
        "https://placehold.co/600x600?text=Shoe+Side",
        "https://placehold.co/600x600?text=Shoe+Back",
        "https://placehold.co/600x600?text=Shoe+Detail",
        "https://placehold.co/600x600?text=Shoe+Sole",
        "https://placehold.co/600x600?text=Shoe+Top"
    ];

    const colors = [
        { name: "Beads", image: "https://placehold.co/100x100?text=Beads", price: "59.95" },
        { name: "Walnut", image: "https://placehold.co/100x100?text=Walnut", price: "61.72" },
        { name: "BEACHCOMBER", image: "https://placehold.co/100x100?text=Beach", price: "61.72" },
        { name: "+40 others", image: "https://placehold.co/100x100?text=More", price: "" }
    ];

    const sizes = ["4", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];

    const productDetails = [
        { label: "Sole material", value: "Ethylene Vinyl Acetate" },
        { label: "Outer material", value: "Textile-Cotton/Natural Fiber" },
        { label: "Inner material", value: "Cotton, Memory foam" },
        { label: "Closure type", value: "Pull-On" }
    ];

    const features = [
        "Effortless Vinyl Acetate sole",
        "Lightweight with Elastic Laces - Manufactured using an elastic material that allows them to flex with the foot, resulting in a shoe that fits more uniformly. Each shoe weighs 6 ounces or less making it one of the lightest pairs of shoes around.",
        "Comfortable Durable High-Quality Material - Designed with you in mind. This Wally Lace will be an instant favorite in your modern-casual shoe rotation. Featuring an insole that reduces odors, lightweight outsole, and breathable cotton fabric."
    ];

    const recentTrendsProducts = [
        { id: 1, name: "HEYDUDE Paul Canvas Men's Slip-on Loafers", image: "https://placehold.co/200x200?text=Product+1", price: "43.99", rating: 4.5, reviews: 432, badge: "Limited time deal" },
        { id: 2, name: "HEY DUDE WALSH Men's Vintage Shoes Width Toe Box Slip-on Loafers", image: "https://placehold.co/200x200?text=Product+2", price: "55.99", rating: 4.7, reviews: 1297 },
        { id: 3, name: "HEYDUDE Men's Paul Pro | Lightweight Slip-on Shoes for Men", image: "https://placehold.co/200x200?text=Product+3", price: "74.95", rating: 4.6, reviews: 577 },
        { id: 4, name: "HEYDUDE Wally Jade, Men's Shoes, Slip-on Loafers", image: "https://placehold.co/200x200?text=Product+4", price: "50.59", rating: 4.5, reviews: 395 },
        { id: 5, name: "Hey Dude Men's Wally Funk Mono", image: "https://placehold.co/200x200?text=Product+5", price: "64.94", rating: 4.6, reviews: 7444 },
        { id: 6, name: "Grand Attack Men's Walking Boat Shoes", image: "https://placehold.co/200x200?text=Product+6", price: "45.99", rating: 4.3, reviews: 679 },
        { id: 7, name: "HEYDUDE Men's Wally Drift Casual", image: "https://placehold.co/200x200?text=Product+7", price: "79.95", rating: 4.7, reviews: 207 }
    ];

    const moreItemsProducts = [
        { id: 1, name: "HEYDUDE Men's Paul | Men's Shoes | Lightweight & Comfortable", image: "https://placehold.co/200x200?text=Item+1", price: "79.95", rating: 4.7, reviews: 2367 },
        { id: 2, name: "Bruno Marc Men's Arch Support Casual Slip-on Loafers", image: "https://placehold.co/200x200?text=Item+2", price: "55.99", rating: 4.6, reviews: 2451, badge: "Hula's Choice" },
        { id: 3, name: "Hey Dude Men's Wally Funk Mono", image: "https://placehold.co/200x200?text=Item+3", price: "62.99", rating: 4.6, reviews: 7444 },
        { id: 4, name: "HEYDUDE Men's Paul Pro | Lightweight Slip-on", image: "https://placehold.co/200x200?text=Item+4", price: "79.95", rating: 4.7, reviews: 577 },
        { id: 5, name: "HEYDUDE Men's Wally Funk Mono", image: "https://placehold.co/200x200?text=Item+5", price: "41.72", rating: 4.7, reviews: 15259 },
        { id: 6, name: "Hey Dude Women's Wendy Chambray", image: "https://placehold.co/200x200?text=Item+6", price: "54.95", rating: 4.6, reviews: 45746 },
        { id: 7, name: "VICKEY Men's Casual Dress Sneakers", image: "https://placehold.co/200x200?text=Item+7", price: "39.99", rating: 4.5, reviews: 1730 }
    ];

    const viewedItemsProducts = [
        { id: 1, name: "HEYDUDE Men's Wally Washed Canvas Loafer", image: "https://placehold.co/200x200?text=Viewed+1", price: "59.95", rating: 4.7, reviews: 2375 },
        { id: 2, name: "HEYDUDE Men's Paul | Men's Shoes", image: "https://placehold.co/200x200?text=Viewed+2", price: "79.95", rating: 4.7, reviews: 3867 },
        { id: 3, name: "Hey Dude Men's Wally Funk Mono", image: "https://placehold.co/200x200?text=Viewed+3", price: "61.95", rating: 4.6, reviews: 7444 },
        { id: 4, name: "HEYDUDE Men's Wally Comfortable Lightweight", image: "https://placehold.co/200x200?text=Viewed+4", price: "51.99", rating: 4.7, reviews: 395 },
        { id: 5, name: "HEYDUDE Men's Wally Funk Mono", image: "https://placehold.co/200x200?text=Viewed+5", price: "41.72", rating: 4.7, reviews: 15259 },
        { id: 6, name: "HEYDUDE Men's Wally On-Loafers", image: "https://placehold.co/200x200?text=Viewed+6", price: "67.95", rating: 4.6, reviews: 167 },
        { id: 7, name: "HEYDUDE Men's Wally Loafers Lightweight", image: "https://placehold.co/200x200?text=Viewed+7", price: "51.99", rating: 4.6, reviews: 167 }
    ];

    const reviewImages = [
        "https://placehold.co/100x100?text=Review+1",
        "https://placehold.co/100x100?text=Review+2",
        "https://placehold.co/100x100?text=Review+3",
        "https://placehold.co/100x100?text=Review+4",
        "https://placehold.co/100x100?text=Review+5",
        "https://placehold.co/100x100?text=Review+6"
    ];

    const topReviews = [
        {
            id: 1,
            author: "Diana Looney",
            rating: 5,
            title: "Super Comfortable & Great Price!",
            content: "I purchased these HEYDUDE Wally slip on loafers for my husband, and he absolutely loves them. He says they're the most comfortable shoes he owns for all-day wear. He wears an 11 and says the fit is spot on. The price is great too, especially for how lightweight and well-made they are. Definitely a new favorite in his shoe rotation!",
            date: "November 7th, 2025",
            verified: true,
            size: "11",
            color: "Walnut",
            helpful: 9
        },
        {
            id: 2,
            author: "Ashley Kinsey",
            rating: 5,
            title: "Great men shoes!",
            content: "Love these shoes, my husband has a couple pair and they are his go to! Also can not beat the price of these shoes, amazing!",
            date: "November 29, 2025",
            verified: true,
            size: "10",
            color: "Waxed Casual Brown",
            helpful: 0
        }
    ];

    const ratingBreakdown = [
        { stars: 5, percentage: 85 },
        { stars: 4, percentage: 10 },
        { stars: 3, percentage: 3 },
        { stars: 2, percentage: 1 },
        { stars: 1, percentage: 2 }
    ];

    return (
        <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
            <Container maxWidth="xl" sx={{ paddingY: 3 }}>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "auto 1fr 320px" },
                        gap: 3,
                        backgroundColor: "#fff",
                        padding: 3,
                        borderRadius: "4px"
                    }}
                >
                    {/* Left: Image Gallery */}
                    <Box sx={{ maxWidth: { xs: "100%", md: "500px" } }}>
                        <ProductImageGallery images={productImages} />
                    </Box>

                    {/* Center: Product Info */}
                    <Box>
                        <ProductInfo
                            title="HEYDUDE Men's Wally Washed Canvas, Men's Shoes, Slip-on Loafers, Comfortable & Light-Weight"
                            rating={4.7}
                            reviewCount={6572}
                            price={61.72}
                            listPrice={69.95}
                            discount={5}
                            colors={colors}
                            sizes={sizes}
                        />

                        <ProductDetailsTable details={productDetails} />
                        <ProductDescription title="About this item" features={features} />
                    </Box>

                    {/* Right: Purchase Box */}
                    <Box>
                        <ProductPurchase
                            price={61.72}
                            shippingCost={62.05}
                            deliveryDate="January 6 - 13"
                        />
                    </Box>
                </Box>

                {/* Based on your recent shopping trends */}
                <RecommendedProducts
                    title="Based on your recent shopping trends"
                    products={recentTrendsProducts}
                    pageInfo="Page 1 of 9"
                />

                {/* From the brand */}
                <BrandSection
                    title="From the brand"
                    image="https://placehold.co/1200x400?text=HEYDUDE+Brand+Banner"
                />

                {/* Customer Reviews */}
                <CustomerReviews
                    averageRating={4.7}
                    totalReviews={4219}
                    ratingBreakdown={ratingBreakdown}
                    customersSay="Customers find these shoes comfortable, lightweight, and easy to slip on and take off, with a simple style perfect for running around or for money, and love customer mentions they're great for wide feet. The sizing reviews mixed feedback - while some customers say they run about a size too small."
                    topReviews={topReviews}
                    reviewImages={reviewImages}
                />

                {/* More items to explore */}
                <RecommendedProducts
                    title="More items to explore"
                    products={moreItemsProducts}
                    pageInfo="Page 1 of 9"
                />

                {/* Customers who viewed this item also viewed */}
                <RecommendedProducts
                    title="Customers who viewed this item also viewed"
                    products={viewedItemsProducts}
                    pageInfo="Page 5 of 7"
                />
            </Container>


            {/* CUSTOMERS WHO VIEWED - FULL WIDTH */}
            <CustomersViewed />

            {/* SEE PERSONALIZED RECOMMENDATIONS SECTION */}
            <PersonalizedRecommendations />
        </Box>
    );
};

export default ProductDetails;
