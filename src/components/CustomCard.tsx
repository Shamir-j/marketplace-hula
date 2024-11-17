import React from "react";
import { Card, CardContent, CardActions, Typography, Button, Box } from "@mui/material";

interface CustomCardProps {
    title?: string;
    subtitle?: string;
    description: string;
    actionLabel?: string;
    onActionClick?: () => void;
    images: { src: string; alt: string; caption: string }[];
}

const CustomCard: React.FC<CustomCardProps> = ({
    title,
    subtitle,
    description,
    actionLabel,
    onActionClick,
    images,
}) => {
    return (
        <Card sx={{ maxWidth: 350, margin: "0px", boxShadow: 0, borderRadius: 0 }}>
            <CardContent>
                {title && (
                    <Typography variant="h6" component="div" gutterBottom fontWeight="bolder">
                        {title}
                    </Typography>
                )}
                {/* <Typography variant="body2" color="text.secondary" mb={2}>
                    {description}
                </Typography> */}

                <Box display="flex" flexWrap="wrap" justifyContent="space-between">
                    {images.map((image, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: "48%", 
                                marginBottom: 2,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }}
                        >
                            <Box
                                component="img"
                                src={image.src}
                                alt={image.alt}
                                sx={{
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: 1,
                                    objectFit: "cover",
                                }}
                            />
                            <Typography variant="caption" color="text.secondary" mt={1}>
                                {image.caption}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </CardContent>

            <CardActions>
                <Button size="small" onClick={onActionClick} sx={{ textTransform: "none" }}>
                    {actionLabel}
                </Button>
            </CardActions>

        </Card>
    );
};

export default CustomCard;
