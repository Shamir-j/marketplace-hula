"use client";

import React from "react";
import { Box } from "@mui/material";
import CustomCard from "@/components/CustomCard";
import { cardData } from "@/app/constants/constants";

interface CategoryGridProps {
    cardGap: number;
    keyPrefix: string;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ cardGap, keyPrefix }) => {
    return (
        <Box sx={{
            display: "grid",
            gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)"
            },
            gap: cardGap,
            marginTop: 2
        }}>
            {cardData.map((card) => (
                <CustomCard
                    key={`${keyPrefix}-${card.id}`}
                    title={card.title}
                    subtitle={card.subtitle}
                    description={card.description}
                    actionLabel={card.actionLabel}
                    onActionClick={() => { }}
                    images={[
                        { src: `https://placehold.co/600x400?text=Deal+${card.id}+1`, alt: `Deal ${card.id} 1`, caption: "Special Offer" },
                        { src: `https://placehold.co/600x400?text=Deal+${card.id}+2`, alt: `Deal ${card.id} 2`, caption: "Limited Time" },
                        { src: `https://placehold.co/600x400?text=Deal+${card.id}+3`, alt: `Deal ${card.id} 3`, caption: "Save Now" },
                        { src: `https://placehold.co/600x400?text=Deal+${card.id}+4`, alt: `Deal ${card.id} 4`, caption: "See More" },
                    ]}
                />
            )).slice(0, 4)}
        </Box>
    );
};

export default CategoryGrid;
