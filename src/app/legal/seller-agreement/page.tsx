import { Box, Typography, Container, Divider, Card, CardContent, List, ListItem, ListItemText, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DescriptionIcon from "@mui/icons-material/Description";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Seller Agreement - Pixel Point ERP Platform | Marketplace Terms for Sellers",
    description: "Comprehensive seller agreement for the Pixel Point ERP Platform marketplace. Learn about commission rates, payout schedules, seller responsibilities, and performance standards.",
    keywords: "seller agreement, marketplace, commission rates, seller terms, vendor agreement",
    openGraph: {
        title: "Seller Agreement - Pixel Point ERP Platform",
        description: "Terms and conditions for sellers on the Pixel Point marketplace",
        type: "website",
        url: "https://hulamarket.co.ke/legal/seller-agreement",
    },
};

export default function SellerAgreement() {
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
                        Seller Agreement
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#666", mb: 1 }}>
                        Effective Date: December 27, 2025
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#999" }}>
                        Last Updated: December 27, 2025
                    </Typography>
                </Box>

                {/* Covered Applications */}
                <Card sx={{ mb: 4, backgroundColor: "#fff3e0", border: "1px solid #ff9800" }}>
                    <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#e65100" }}>
                            Covered Applications
                        </Typography>
                        <Typography sx={{ color: "#e65100", mb: 2 }}>
                            This seller agreement applies to merchant accounts operating on:
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="• Hula Market (Consumer Marketplace)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Pixel Point POS (Merchant Point-of-Sale Application)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Other Pixel Point ERP Platform marketplace applications" />
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>

                {/* Introduction */}
                <Card sx={{ mb: 4, backgroundColor: "#e3f2fd", border: "1px solid #2196f3" }}>
                    <CardContent>
                        <Typography sx={{ color: "#1565c0", mb: 2 }}>
                            This Seller Agreement ("Agreement") is entered into between you ("Seller", "Vendor", "Merchant") and Continuum Technologies ("we", "us", "Platform Owner") operating the Pixel Point ERP Platform. By registering as a seller, you agree to all terms in this Agreement, our Terms of Service, Privacy Notice, and Acceptable Use Policy.
                        </Typography>
                        <Typography sx={{ color: "#1565c0", fontWeight: "bold" }}>
                            IMPORTANT: This is a legally binding contract. Please read carefully before registering as a seller.
                        </Typography>
                    </CardContent>
                </Card>

                {/* 1. Seller Registration & Eligibility */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <StoreIcon sx={{ color: "#4caf50" }} />
                        1. Seller Registration & Eligibility
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Eligibility Requirements
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        To sell on our platform, you must:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="✓ Be at least 18 years old or the age of majority in your jurisdiction" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Have a valid business license (if required by local law)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Provide accurate business and tax information" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Have a valid bank account for payouts" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Maintain valid contact information" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Comply with all applicable laws and regulations" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Required Documentation
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText 
                                    primary="Individual Sellers"
                                    secondary="National ID, KRA PIN, proof of address, bank account details"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Business Sellers"
                                    secondary="Business registration certificate, KRA PIN, tax compliance certificate, bank account in business name, director IDs"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="All Sellers"
                                    secondary="Profile photo, business description, product catalogs, quality certifications (if applicable)"
                                />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        C. Account Verification
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        All seller accounts undergo identity and business verification. Approval typically takes 3-5 business days. We may request additional documentation or decline applications at our discretion.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 2. Commission Structure */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <AttachMoneyIcon sx={{ color: "#ff9800" }} />
                        2. Commission Rates & Fees
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Standard Commission Rates by Category
                    </Typography>
                    <TableContainer component={Paper} sx={{ mb: 3 }}>
                        <Table size="small">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                                    <TableCell><strong>Product Category</strong></TableCell>
                                    <TableCell><strong>Commission Rate</strong></TableCell>
                                    <TableCell><strong>Min Fee</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Electronics & Computers</TableCell>
                                    <TableCell>12%</TableCell>
                                    <TableCell>KES 50</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Fashion & Apparel</TableCell>
                                    <TableCell>15%</TableCell>
                                    <TableCell>KES 30</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Home & Garden</TableCell>
                                    <TableCell>10%</TableCell>
                                    <TableCell>KES 40</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Health & Beauty</TableCell>
                                    <TableCell>15%</TableCell>
                                    <TableCell>KES 25</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Sports & Outdoors</TableCell>
                                    <TableCell>12%</TableCell>
                                    <TableCell>KES 35</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Books & Media</TableCell>
                                    <TableCell>8%</TableCell>
                                    <TableCell>KES 20</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Groceries & Food</TableCell>
                                    <TableCell>18%</TableCell>
                                    <TableCell>KES 15</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Automotive & Parts</TableCell>
                                    <TableCell>10%</TableCell>
                                    <TableCell>KES 100</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Handmade & Crafts</TableCell>
                                    <TableCell>12%</TableCell>
                                    <TableCell>KES 20</TableCell>
                                </TableRow>
                                <TableRow sx={{ backgroundColor: "#fff3e0" }}>
                                    <TableCell><strong>Other Categories</strong></TableCell>
                                    <TableCell><strong>13%</strong></TableCell>
                                    <TableCell><strong>KES 30</strong></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Additional Fees
                    </Typography>
                    <TableContainer component={Paper} sx={{ mb: 3 }}>
                        <Table size="small">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                                    <TableCell><strong>Fee Type</strong></TableCell>
                                    <TableCell><strong>Amount</strong></TableCell>
                                    <TableCell><strong>When Charged</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Payment Processing Fee</TableCell>
                                    <TableCell>2.9% + KES 10</TableCell>
                                    <TableCell>Per transaction</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>M-Pesa Transaction Fee</TableCell>
                                    <TableCell>1.5%</TableCell>
                                    <TableCell>M-Pesa payments</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Refund Processing Fee</TableCell>
                                    <TableCell>KES 50</TableCell>
                                    <TableCell>Seller-fault refunds</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Chargeback Fee</TableCell>
                                    <TableCell>KES 500</TableCell>
                                    <TableCell>Per chargeback</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Premium Placement (optional)</TableCell>
                                    <TableCell>KES 200-2,000/day</TableCell>
                                    <TableCell>Featured listings</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Payout Transfer Fee</TableCell>
                                    <TableCell>KES 25</TableCell>
                                    <TableCell>Bank transfers</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Card sx={{ backgroundColor: "#fff3cd", border: "1px solid #ffc107" }}>
                        <CardContent>
                            <Typography sx={{ fontWeight: "bold", mb: 1, color: "#856404" }}>
                                ℹ️ Commission Calculation Example
                            </Typography>
                            <Typography sx={{ color: "#856404", fontSize: "0.9rem" }}>
                                If you sell a fashion item for KES 5,000:<br/>
                                • Selling Price: KES 5,000<br/>
                                • Commission (15%): KES 750<br/>
                                • Payment Processing (2.9% + KES 10): KES 155<br/>
                                • Your Net Payout: KES 4,095
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 3. Payout Schedule */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <TrendingUpIcon sx={{ color: "#2196f3" }} />
                        3. Payout Schedule & Terms
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Payout Frequency
                    </Typography>
                    <TableContainer component={Paper} sx={{ mb: 3 }}>
                        <Table size="small">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                                    <TableCell><strong>Seller Level</strong></TableCell>
                                    <TableCell><strong>Payout Frequency</strong></TableCell>
                                    <TableCell><strong>Processing Time</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>New Sellers (0-90 days)</TableCell>
                                    <TableCell>Every 14 days</TableCell>
                                    <TableCell>3-5 business days</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Standard Sellers (90+ days)</TableCell>
                                    <TableCell>Weekly (every Monday)</TableCell>
                                    <TableCell>2-3 business days</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Top Sellers (verified, high volume)</TableCell>
                                    <TableCell>Daily</TableCell>
                                    <TableCell>1-2 business days</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Holding Periods
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        Funds are released after the following holding periods:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText 
                                    primary="Standard Products"
                                    secondary="7 days after delivery confirmation"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Electronics & High-Value Items"
                                    secondary="14 days after delivery (extended return window)"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="New Seller Probation"
                                    secondary="First 5 sales held for 21 days"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Disputed Transactions"
                                    secondary="Held until dispute resolution (up to 60 days)"
                                />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        C. Minimum Payout Threshold
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        Minimum balance for payout: KES 1,000. If your balance is below this amount, funds will roll over to the next payout cycle.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 4. Seller Responsibilities */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <DescriptionIcon sx={{ color: "#9c27b0" }} />
                        4. Seller Responsibilities
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Product Listings
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="✓ Provide accurate, detailed product descriptions" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Use clear, high-quality product images (min 800x800px)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Set competitive, honest pricing" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Maintain accurate inventory levels" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Disclose all relevant product information (size, color, condition, warranty)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Comply with category-specific listing requirements" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Order Fulfillment
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="✓ Ship within stated processing time (max 3 business days for most items)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Package items securely to prevent damage" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Provide valid tracking information" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Update order status promptly" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Respond to buyer messages within 24 hours" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Honor stated shipping rates and delivery times" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        C. Customer Service
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="✓ Respond to customer inquiries within 24 hours" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Process returns and refunds per our Returns Policy" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Resolve disputes professionally and promptly" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Maintain professional communication" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Honor warranties and guarantees" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        D. Compliance & Legal
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="✓ Obtain all necessary business licenses and permits" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Collect and remit applicable taxes (VAT, income tax)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Comply with product safety regulations" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Respect intellectual property rights" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Follow data protection laws (GDPR, Kenya DPA)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Maintain accurate financial records" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 5. Performance Standards */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        5. Performance Standards & Metrics
                    </Typography>

                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        Sellers must maintain minimum performance standards:
                    </Typography>

                    <TableContainer component={Paper} sx={{ mb: 3 }}>
                        <Table size="small">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                                    <TableCell><strong>Metric</strong></TableCell>
                                    <TableCell><strong>Minimum Required</strong></TableCell>
                                    <TableCell><strong>Measurement Period</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Order Fulfillment Rate</TableCell>
                                    <TableCell>≥ 95%</TableCell>
                                    <TableCell>90 days</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>On-Time Shipping Rate</TableCell>
                                    <TableCell>≥ 90%</TableCell>
                                    <TableCell>90 days</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Customer Response Time</TableCell>
                                    <TableCell>≤ 24 hours</TableCell>
                                    <TableCell>30 days</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Order Defect Rate</TableCell>
                                    <TableCell>≤ 2%</TableCell>
                                    <TableCell>90 days</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Seller Rating</TableCell>
                                    <TableCell>≥ 4.0 stars</TableCell>
                                    <TableCell>All-time</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Valid Tracking Rate</TableCell>
                                    <TableCell>≥ 95%</TableCell>
                                    <TableCell>30 days</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Card sx={{ backgroundColor: "#ffebee", border: "1px solid #f44336" }}>
                        <CardContent>
                            <Typography sx={{ fontWeight: "bold", mb: 1, color: "#c62828" }}>
                                ⚠️ Performance Warning
                            </Typography>
                            <Typography sx={{ color: "#c62828", fontSize: "0.9rem" }}>
                                Failure to maintain minimum performance standards may result in:
                                <br/>• Account review and temporary suspension
                                <br/>• Loss of premium seller status
                                <br/>• Search ranking penalties
                                <br/>• Account termination (for repeated violations)
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 6. Prohibited Products */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        6. Prohibited & Restricted Products
                    </Typography>

                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        The following items are strictly prohibited from sale:
                    </Typography>

                    <Box sx={{ backgroundColor: "#ffebee", p: 2, borderRadius: 1, mb: 2, border: "1px solid #f44336" }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1, color: "#c62828" }}>
                            ✗ Absolutely Prohibited
                        </Typography>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="• Illegal drugs, narcotics, or drug paraphernalia" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Weapons, firearms, ammunition, explosives" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Counterfeit, replica, or pirated goods" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Stolen property" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Human body parts or remains" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Endangered species products (ivory, rhino horn, etc.)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Pornographic or adult content" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Tobacco products (in jurisdictions where prohibited)" />
                            </ListItem>
                        </List>
                    </Box>

                    <Box sx={{ backgroundColor: "#fff3cd", p: 2, borderRadius: 1, border: "1px solid #ffc107" }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1, color: "#856404" }}>
                            ⚠️ Restricted (Requires Approval)
                        </Typography>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="• Pharmaceuticals and medical devices (requires license)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Food and beverages (requires health permits)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Cosmetics and beauty products (requires certification)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Alcohol (requires liquor license)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Used mattresses and bedding" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 7. Intellectual Property */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        7. Intellectual Property Rights
                    </Typography>

                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        You represent and warrant that:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="✓ You own or have rights to all product images, descriptions, and content" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Your products do not infringe on any trademarks, copyrights, or patents" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ You have authorization to sell branded products (if applicable)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ You will defend, indemnify, and hold us harmless from any IP infringement claims" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 8. Termination */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        8. Termination & Account Closure
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Voluntary Termination
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        You may close your seller account at any time with 30 days' notice. All pending orders must be fulfilled and refunds processed before closure.
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Termination by Platform
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        We may suspend or terminate your account immediately for:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="• Violation of this Agreement or platform policies" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Fraudulent activity or deceptive practices" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Selling prohibited items" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Repeated customer complaints or chargebacks" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Failure to meet performance standards" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Legal or regulatory requirements" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 9. Taxes */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        9. Taxes & Reporting
                    </Typography>

                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        You are solely responsible for determining, collecting, and remitting all applicable taxes on your sales. This includes:
                        <br/><br/>
                        • Value Added Tax (VAT) - 16% in Kenya
                        <br/>• Income Tax on profits
                        <br/>• Any local or municipal taxes
                        <br/><br/>
                        We will provide transaction reports for your tax filing purposes. We may withhold taxes as required by law and issue tax forms (e.g., W-9, 1099-K equivalents in Kenya).
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 10. Contact */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        10. Questions or Support
                    </Typography>

                    <Card sx={{ backgroundColor: "#f9f9f9" }}>
                        <CardContent>
                            <Typography sx={{ mb: 2, fontWeight: "bold" }}>
                                For seller support or questions about this agreement:
                            </Typography>
                            <Typography sx={{ mb: 0.5 }}>Seller Support Email: sellers@hulamarket.co.ke</Typography>
                            <Typography sx={{ mb: 0.5 }}>General Legal: legal@hulamarket.co.ke</Typography>
                            <Typography sx={{ mb: 0.5 }}>Phone: +254-XXX-XXXXXX (Mon-Fri, 8AM-6PM EAT)</Typography>
                            <Typography>Address: Continuum Technologies, 11011-00111 GPO Nairobi</Typography>
                        </CardContent>
                    </Card>
                </Box>

                {/* Footer */}
                <Box sx={{ mt: 4, pt: 3, borderTop: "1px solid #ddd", textAlign: "center" }}>
                    <Typography variant="body2" sx={{ color: "#999" }}>
                        © 2025 Continuum Technologies (Development Lab: Quantum Times Technologies). Pixel Point ERP Platform. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
