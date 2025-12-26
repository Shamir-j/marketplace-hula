import { Box, Typography, Container, Divider, Card, CardContent, List, ListItem, ListItemText, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Rates & Policies - Hula Market | Fast Delivery Options",
  description: "Check Hula Market's shipping rates, delivery times, and shipping policies. Same-day delivery available. Free shipping on orders over KES 5,000.",
  keywords: "shipping rates, delivery, fast shipping, same-day delivery, shipping policies",
  openGraph: {
    title: "Shipping Rates & Policies - Hula Market",
    description: "Fast and affordable shipping options across East Africa",
    type: "website",
    url: "https://hulamarket.co.ke/shipping-rates-policies",
  },
};

export default function ShippingRatesPolicies() {
    const sectionStyle = {
        mb: 4,
    };

    const headingStyle = {
        fontWeight: "bold",
        mb: 2,
        color: "#232f3e",
        display: "flex",
        alignItems: "center",
        gap: 1,
    };

    const subsectionHeading = {
        fontWeight: "600",
        mb: 1.5,
        color: "#37475a",
        fontSize: "1rem",
    };

    return (
        <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh", py: 4 }}>
            <Container maxWidth="md">
                {/* Header */}
                <Box sx={{ mb: 4, textAlign: "center" }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                            fontWeight: "bold",
                            mb: 2,
                            color: "#232f3e",
                        }}
                    >
                        Shipping Rates & Policies
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#666", mb: 1 }}>
                        Fast, Reliable, and Transparent Shipping
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#999" }}>
                        Last Updated: December 26, 2025
                    </Typography>
                </Box>

                {/* Welcome Card */}
                <Card sx={{ mb: 4, backgroundColor: "#e8f5e9", border: "1px solid #4caf50" }}>
                    <CardContent>
                        <Typography sx={{ color: "#2e7d32" }}>
                            At Hula Market, we're committed to getting your orders to you quickly and safely. Our shipping partners and policies ensure reliable delivery across all regions. Below is comprehensive information about our rates, timelines, and shipping options.
                        </Typography>
                    </CardContent>
                </Card>

                {/* 1. Shipping Options */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <LocalShippingIcon sx={{ color: "#2196f3" }} />
                        1. Available Shipping Options
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Standard Shipping
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        Our most economical shipping option, ideal for non-urgent deliveries:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Delivery Time: 5-10 business days" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Tracking: Available after dispatch" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Cost: Based on weight and distance (Free over KES 5,000)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Coverage: All regions within Kenya" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Express Shipping
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        Fast delivery for urgent orders:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Delivery Time: 2-3 business days" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Tracking: Real-time tracking available" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Cost: KES 500-1,500 depending on location" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Coverage: Major cities and towns" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Same-Day Delivery
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        Available in selected urban areas:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Delivery Time: Same day (orders placed before 2 PM)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Tracking: Live tracking with driver contact" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Cost: KES 1,000-2,500" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Coverage: Nairobi, Mombasa, Kisumu (expanding)" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 2. Shipping Rates Table */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <TaskAltIcon sx={{ color: "#4caf50" }} />
                        2. Detailed Shipping Rate Table
                    </Typography>

                    <TableContainer component={Paper} sx={{ mb: 3 }}>
                        <Table>
                            <TableHead>
                                <TableRow sx={{ backgroundColor: "#232f3e" }}>
                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Shipping Method</TableCell>
                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Delivery Time</TableCell>
                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Cost</TableCell>
                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Max Weight</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Standard - Light (0-2kg)</TableCell>
                                    <TableCell>5-10 days</TableCell>
                                    <TableCell>Free / KES 200</TableCell>
                                    <TableCell>2 kg</TableCell>
                                </TableRow>
                                <TableRow sx={{ backgroundColor: "#f9f9f9" }}>
                                    <TableCell>Standard - Medium (2-5kg)</TableCell>
                                    <TableCell>5-10 days</TableCell>
                                    <TableCell>Free / KES 400</TableCell>
                                    <TableCell>5 kg</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Standard - Heavy (5-20kg)</TableCell>
                                    <TableCell>5-10 days</TableCell>
                                    <TableCell>Free / KES 800</TableCell>
                                    <TableCell>20 kg</TableCell>
                                </TableRow>
                                <TableRow sx={{ backgroundColor: "#f9f9f9" }}>
                                    <TableCell>Express - Standard</TableCell>
                                    <TableCell>2-3 days</TableCell>
                                    <TableCell>KES 500</TableCell>
                                    <TableCell>10 kg</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Express - Heavy</TableCell>
                                    <TableCell>2-3 days</TableCell>
                                    <TableCell>KES 1,500</TableCell>
                                    <TableCell>25 kg</TableCell>
                                </TableRow>
                                <TableRow sx={{ backgroundColor: "#f9f9f9" }}>
                                    <TableCell>Same-Day Delivery</TableCell>
                                    <TableCell>Same Day</TableCell>
                                    <TableCell>KES 1,000-2,500</TableCell>
                                    <TableCell>10 kg</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 3. Shipping Policies */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <WarningAmberIcon sx={{ color: "#ff9800" }} />
                        3. Shipping Policies and Guidelines
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Package Handling and Insurance
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="All packages are handled with care and professionally packaged" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Standard shipping includes basic handling; items are at carrier risk unless insured" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Optional shipping insurance available for high-value items (0.5-1% of item value)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Fragile items must be clearly marked and use appropriate packaging" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Damage claims must be reported within 7 days of delivery" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Restricted Items
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        The following items cannot be shipped or require special handling:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Hazardous materials (flammable, explosive, toxic)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Liquids and chemicals (except permitted sealed containers)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Perishable items (requires cold chain shipping - premium rate)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Electronics with rechargeable batteries (restricted air shipping)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Firearms and ammunition" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Counterfeit or stolen goods" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        C. Shipping Address Requirements
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Complete street address with apartment/house number required" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="PO Boxes accepted for standard shipping; not for express deliveries" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Valid phone number must be provided for delivery coordination" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Address changes requested after 24 hours of order may incur additional fees" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 4. Delivery Times and Tracking */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <AccessTimeIcon sx={{ color: "#9c27b0" }} />
                        4. Delivery Times and Tracking
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Estimated Delivery Times
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        Delivery times are estimates and may vary based on:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Geographic location and accessibility of delivery address" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Weather conditions and natural disasters" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Peak seasons (holidays, promotions) may cause delays" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Customs clearance for international shipments" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Order processing time (24-48 hours from payment confirmation)" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Order Tracking
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="All orders include a tracking number sent via email" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Track your shipment in real-time via our platform" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="SMS updates available for express and same-day deliveries" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Estimated delivery windows provided for accurate planning" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 5. Lost and Damaged Shipments */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        5. Lost and Damaged Shipments
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Reporting Damage or Loss
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        If your package arrives damaged or is lost in transit:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Report within 7 days of delivery or expected delivery date" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Provide photos of damaged packaging and items" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Include order number, tracking number, and detailed description" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Contact support@hulamarket.co.ke with claim details" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Claim Resolution
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="We investigate all claims within 5 business days" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Approved claims result in: refund, replacement, or credit" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Uninsured items valued over KES 10,000 require photographic evidence" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Insured shipments processed within 10-15 business days" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 6. International Shipping */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        6. International Shipping (Coming Soon)
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        Hula Market is expanding international shipping capabilities. We currently offer limited cross-border services to selected East African countries. International shipments are subject to customs duties and import taxes which are the responsibility of the buyer. For updates on international shipping availability, contact support@hulamarket.co.ke.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 7. Contact */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        7. Shipping Support
                    </Typography>
                    <Card sx={{ backgroundColor: "#f9f9f9" }}>
                        <CardContent>
                            <Typography sx={{ mb: 2, fontWeight: "bold" }}>
                                For shipping inquiries or concerns:
                            </Typography>
                            <Typography sx={{ mb: 0.5 }}>Email: support@hulamarket.co.ke</Typography>
                            <Typography sx={{ mb: 0.5 }}>Phone: +254 (0) 700-123-456</Typography>
                            <Typography sx={{ mb: 1 }}>Hours: Monday-Friday 9:00 AM - 6:00 PM EAT</Typography>
                            <Typography variant="body2" sx={{ mt: 2, fontStyle: "italic", color: "#666" }}>
                                We aim to resolve all shipping concerns within 48 business hours.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>

                {/* Footer */}
                <Box sx={{ mt: 4, pt: 3, borderTop: "1px solid #ddd", textAlign: "center" }}>
                    <Typography variant="body2" sx={{ color: "#999" }}>
                        © 2025 Hula Market (Continuum Technologies). All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
