import React from "react";
import { Card, CardContent, CardActions, Typography, Button, Box, useMediaQuery, useTheme } from "@mui/material";

interface CustomCardProps {
    title?: string;
    subtitle?: string;
    description: string;
    actionLabel?: string;
    onActionClick?: () => void;
    images: { src: string; alt: string; caption: string }[];
}

const CustomCard: React.FC<CustomCardProps> = ({title, description, actionLabel, onActionClick, images}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Card sx={{ 
            height: "100%",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            borderRadius: "8px",
            transition: "all 0.3s ease",
            "&:hover": {
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                transform: "translateY(-2px)"
            },
            backgroundColor: "#fff"
        }}>
            <CardContent sx={{ flex: 1, padding: { xs: "12px", sm: "16px" } }}>
                {title && (
                    <Typography 
                        variant="h6" 
                        component="div" 
                        gutterBottom 
                        fontWeight="700"
                        sx={{ 
                            fontSize: { xs: "14px", sm: "16px" },
                            color: "#036A47",
                            lineHeight: 1.3
                        }}
                    >
                        {title}
                    </Typography>
                )}
                <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    mb={2}
                    sx={{ 
                        fontSize: { xs: "12px", sm: "13px" },
                        lineHeight: 1.4
                    }}
                >
                    {description}
                </Typography>

                {/* Product Grid - Responsive */}
                <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={{ xs: 1, sm: 1.5 }}>
                    {images.map((image, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                transition: "transform 0.2s ease",
                                "&:hover": {
                                    transform: "scale(1.05)"
                                }
                            }}
                        >
                            <Box
                                component="img"
                                src={image.src}
                                alt={image.alt}
                                sx={{
                                    width: "100%",
                                    height: { xs: "80px", sm: "100px", md: "120px" },
                                    borderRadius: "6px",
                                    objectFit: "cover",
                                    backgroundColor: "#f5f5f5",
                                    border: "1px solid #e0e0e0"
                                }}
                            />
                            <Typography 
                                variant="caption" 
                                color="text.secondary" 
                                mt={0.5}
                                sx={{ 
                                    fontSize: { xs: "10px", sm: "11px" },
                                    textAlign: "center",
                                    lineHeight: 1.2,
                                    display: "-webkit-box",
                                    overflow: "hidden",
                                    WebkitLineClamp: 1,
                                    WebkitBoxOrient: "vertical"
                                }}
                            >
                                {image.caption}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </CardContent>

            <CardActions sx={{ padding: { xs: "8px 12px", sm: "12px 16px" } }}>
                <Button 
                    size="small" 
                    onClick={onActionClick} 
                    sx={{ 
                        textTransform: "none",
                        fontSize: { xs: "12px", sm: "13px" },
                        fontWeight: "600",
                        color: "#036A47",
                        padding: { xs: "4px 8px", sm: "6px 12px" },
                        transition: "all 0.2s ease",
                        "&:hover": {
                            backgroundColor: "rgba(3, 106, 71, 0.08)"
                        }
                    }}
                >
                    {actionLabel}
                </Button>
            </CardActions>

        </Card>
    );
};

export default CustomCard;
