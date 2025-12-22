"use client";

import React from "react";
import { Box } from "@mui/material";
import CustomCard from "@/components/CustomCard";
import { cardData } from "@/app/constants/constants";

interface HeroSectionProps {
    cardGap: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({ cardGap }) => {
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
            marginTop: { xs: "-80px", sm: "-100px", md: "-140px", lg: "-120px" },
            position: "relative",
            zIndex: 2
        }}>
            {cardData.map((card) => (
                <CustomCard
                    key={`hero-${card.id}`}
                    title={card.title}
                    subtitle={card.subtitle}
                    description={card.description}
                    actionLabel={card.actionLabel}
                    onActionClick={() => { }}
                    images={[
                        { src: `https://placehold.co/600x400?text=${card.title}+1`, alt: `${card.title} 1`, caption: "Item 1" },
                        { src: `https://placehold.co/600x400?text=${card.title}+2`, alt: `${card.title} 2`, caption: "Item 2" },
                        { src: `https://placehold.co/600x400?text=${card.title}+3`, alt: `${card.title} 3`, caption: "Item 3" },
                        { src: `https://placehold.co/600x400?text=${card.title}+4`, alt: `${card.title} 4`, caption: "Item 4" },
                    ]}
                />
            )).slice(0, 4)}
        </Box>
    );
};

export default HeroSection;
