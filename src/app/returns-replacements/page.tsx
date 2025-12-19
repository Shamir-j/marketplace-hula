import { Box, Typography, Container, Divider, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Stepper, Step, StepLabel, StepContent } from "@mui/material";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Returns & Replacements - Hula Market | Easy Return Policy",
  description: "Hula Market's hassle-free returns policy. 30-day return window, free returns on defective items, quick refunds. Learn how to return or replace your purchases.",
  keywords: "returns policy, return process, refunds, replacement, 30-day return",
  openGraph: {
    title: "Returns & Replacements - Hula Market",
    description: "Hassle-free returns and replacements within 30 days",
    type: "website",
    url: "https://hulamarket.co.ke/returns-replacements",
  },
};

export default function ReturnsAndReplacements() {
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

    const steps = [
        {
            label: "Request Return/Replacement",
            description: "Initiate a return or replacement request within 30 days of delivery via your account or contact support.",
        },
        {
            label: "Generate Return Label",
            description: "We'll provide a prepaid return shipping label (for eligible returns). Download and print it or have it sent to your email.",
        },
        {
            label: "Pack and Ship",
            description: "Securely pack your item with original packaging. Drop off at any courier partner location with your return label.",
        },
        {
            label: "Item Inspection",
            description: "Once received, we inspect the item (typically 2-3 business days). Quality check determines approval and refund/replacement.",
        },
        {
            label: "Refund/Replacement",
            description: "Approved returns: refund issued to original payment method. Replacements: new item shipped immediately.",
        },
    ];

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
                        Returns & Replacements
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#666", mb: 1 }}>
                        Easy Process. Fast Resolution. Your Satisfaction Guaranteed.
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#999" }}>
                        Last Updated: December 19, 2025
                    </Typography>
                </Box>

                {/* Welcome Card */}
                <Card sx={{ mb: 4, backgroundColor: "#fce4ec", border: "1px solid #e91e63" }}>
                    <CardContent>
                        <Typography sx={{ color: "#ad1457" }}>
                            At Hula Market, we stand behind every product. If you're not completely satisfied with your purchase, we make returns and replacements simple and hassle-free. Most items can be returned within 30 days in original condition for a full refund or replacement.
                        </Typography>
                    </CardContent>
                </Card>

                {/* 1. Return Eligibility */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <CheckCircleOutlineIcon sx={{ color: "#4caf50" }} />
                        1. Return Eligibility
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Eligible Items
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        Items can be returned if they meet the following criteria:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Purchased within the last 30 days from delivery date" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="In original, unused condition with all tags attached" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Complete with original packaging, documentation, and accessories" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="No signs of wear, use, damage, or alteration" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Not personalized or made-to-order items (unless defective)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Purchased directly from Hula Market (not third-party sellers, generally)" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Non-Returnable Items
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        The following items cannot be returned:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Digital products, software, or e-books (once downloaded or activated)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Items marked as Final Sale at purchase" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Perishable goods, food, or beverages" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Underwear, intimate apparel, or swimwear (for hygiene reasons)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Items purchased more than 30 days ago" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Customized, engraved, or personalized items" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Items with damage caused by customer misuse or neglect" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        C. Defective or Damaged Items
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        Items with manufacturing defects or damage from shipping are returnable regardless of condition, with photographic evidence. Contact support immediately if you receive a damaged item.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 2. Return Process */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <AssignmentReturnIcon sx={{ color: "#2196f3" }} />
                        2. Step-by-Step Return Process
                    </Typography>

                    <Stepper orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={index} active={true}>
                                <StepLabel
                                    sx={{
                                        "& .MuiStepLabel-label": {
                                            fontSize: "1rem",
                                            fontWeight: "600",
                                            color: "#232f3e",
                                        },
                                    }}
                                >
                                    {step.label}
                                </StepLabel>
                                <StepContent>
                                    <Typography sx={{ color: "#555", lineHeight: 1.7, mb: 1 }}>
                                        {step.description}
                                    </Typography>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 3. Refund Processing */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <HourglassEmptyIcon sx={{ color: "#ff9800" }} />
                        3. Refund and Replacement Timeline
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Refund Timeline
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Day 1-2: Submit return request through your account or contact support" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Day 2-3: Receive prepaid return shipping label via email" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Day 3-10: Ship item back to Hula Market (you can drop off or arrange pickup)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Day 10-15: Item arrives at our warehouse and is inspected" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Day 15-20: Refund approved and issued to original payment method" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Day 20-25: Refund appears in your account (may vary by bank)" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Replacement Timeline
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Replacement items ship immediately upon request (2-5 business days)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Original item return shipping is prepaid" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="No charge for replacement or return shipping" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Items shipped via Express Shipping for faster delivery" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 4. Shipping and Costs */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <WarningAmberIcon sx={{ color: "#ff5722" }} />
                        4. Return Shipping and Costs
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Free Return Shipping
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        Hula Market covers return shipping costs for:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Defective or damaged items" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Items not as described" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Wrong item shipped" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Most standard purchases (items under KES 10,000)" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Customer-Paid Return Shipping
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        Return shipping costs are the customer's responsibility for:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Change of mind or personal preference returns" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Items that don't fit (clothing, shoes)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="High-value items over KES 50,000" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Items with signs of use or wear" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 5. Refund Methods */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        5. How You'll Receive Your Refund
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Original Payment Method
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        Refunds are always returned to your original payment method:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Credit/Debit Card: 5-10 business days (appears as credit to your card account)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Mobile Money (M-Pesa, Airtel): 1-2 business days" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Bank Transfer: 3-5 business days" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Hula Market Wallet: Instant (available for future purchases)" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Refund Deductions
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        For items returned with signs of use or damage, we may deduct 10-30% of the item value from your refund. Severely damaged items may result in a lower refund or rejection. Full explanations provided with every deduction.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 6. Replacement Options */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        6. Replacement Options
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Same Item Replacement
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        For defective or damaged items, we'll replace with the exact same item at no cost. New item ships immediately via Express shipping.
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Different Size or Color
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        For clothing and items available in different sizes/colors, we'll ship the alternative at no additional cost. Original item returns covered.
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        C. Alternative Item
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        If the original item is out of stock, choose a replacement item of equal or greater value. Price difference (if higher) is on you; we refund any credit balance.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 7. Special Circumstances */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        7. Special Circumstances
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Expired Return Window
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        Items returned after 30 days are generally non-returnable. However, defective items with proof of purchase may be eligible for warranty claims. Contact support@hulamarket.co.ke with photos and your order number.
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Missing Components
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        If original packaging is missing but the item is unused, we may still accept the return with a deduction for missing components (typically 5-15% of item value).
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        C. International Purchases
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        Return policies for international purchases may differ due to customs and shipping complexities. Contact support for specific guidance.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 8. Return Support */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        8. Need Help With Your Return?
                    </Typography>
                    <Card sx={{ backgroundColor: "#f9f9f9" }}>
                        <CardContent>
                            <Typography sx={{ mb: 2, fontWeight: "bold" }}>
                                Contact Our Returns Team:
                            </Typography>
                            <Typography sx={{ mb: 0.5 }}>Email: returns@hulamarket.co.ke</Typography>
                            <Typography sx={{ mb: 0.5 }}>Phone: +254 (0) 700-RETURN-1 (+254 700-738-8761)</Typography>
                            <Typography sx={{ mb: 1 }}>Hours: Monday-Saturday 8:00 AM - 8:00 PM EAT</Typography>
                            <Typography variant="body2" sx={{ mt: 2, fontStyle: "italic", color: "#666" }}>
                                We aim to respond to all return inquiries within 24 business hours. Track your return and receive updates via email.
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
