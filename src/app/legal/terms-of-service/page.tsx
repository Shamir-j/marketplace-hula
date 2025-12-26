import { Box, Typography, Container, Divider, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import GavelIcon from "@mui/icons-material/Gavel";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Conditions of Use - Pixel Point ERP Platform | Terms & Conditions",
    description: "Review the Pixel Point ERP Platform's Conditions of Use. Understand your rights and responsibilities when using applications powered by our platform.",
    keywords: "terms and conditions, conditions of use, user agreement, terms of service",
    openGraph: {
        title: "Conditions of Use - Pixel Point ERP Platform",
        description: "Read the Pixel Point ERP Platform's terms and conditions for all applications",
        type: "website",
        url: "https://hulamarket.co.ke/legal/terms-of-service",
    },
};

export default function ConditionsOfUse() {
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
                        Terms and Conditions
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#666", mb: 1 }}>
                        Effective Date: December 19, 2025
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#999" }}>
                        Last Updated: December 26, 2025
                    </Typography>
                </Box>

                {/* Welcome Card */}
                <Card sx={{ mb: 4, backgroundColor: "#e8f5e9", border: "1px solid #81c784" }}>
                    <CardContent>
                        <Typography sx={{ color: "#1b5e20" }}>
                            Welcome to the Pixel Point ERP Platform - Your Complete E-Commerce and Business Management Solution. These Terms and Conditions govern your access to and use of all applications powered by the Pixel Point ERP Platform, including marketplace apps, mobile applications, point-of-sale systems, terminals, and related services (collectively, the "Service"). By accessing or using any application powered by our platform, you agree to be bound by these Terms. If you do not agree, please do not use our Service.
                        </Typography>
                    </CardContent>
                </Card>

                {/* Covered Applications */}
                <Card sx={{ mb: 4, backgroundColor: "#e3f2fd", border: "1px solid #2196f3" }}>
                    <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#1565c0" }}>
                            Covered Applications
                        </Typography>
                        <Typography sx={{ color: "#1565c0", mb: 2 }}>
                            This policy applies to all applications powered by the Pixel Point ERP Platform, including:
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleOutlineIcon sx={{ color: "#2196f3" }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Hula Market (Consumer Marketplace)"
                                    secondary="E-commerce marketplace for buyers and sellers"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleOutlineIcon sx={{ color: "#2196f3" }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Pixel Point POS (Merchant Point-of-Sale Application)"
                                    secondary="Point-of-sale system for retail and service businesses"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleOutlineIcon sx={{ color: "#2196f3" }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Pixel Point Terminal (Store Checkout Application)"
                                    secondary="Self-service and assisted checkout terminals"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleOutlineIcon sx={{ color: "#2196f3" }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Other current and future Pixel Point-powered applications"
                                    secondary="Agent apps, desktop applications, and integrations"
                                />
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>

                {/* 1. Service Overview */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <GavelIcon sx={{ color: "#232f3e" }} />
                        1. Service Overview
                    </Typography>
                    <Typography sx={{ mb: 1.5, color: "#555", lineHeight: 1.7 }}>
                        The Pixel Point ERP Platform operates as a comprehensive e-commerce marketplace and business management platform owned and operated by Continuum Technologies. We provide:
                    </Typography>
                    <List sx={{ backgroundColor: "#fff", borderRadius: 1, p: 2 }}>
                        <ListItem>
                            <ListItemIcon>
                                <CheckCircleOutlineIcon sx={{ color: "#4caf50" }} />
                            </ListItemIcon>
                            <ListItemText
                                primary="Marketplace Platform"
                                secondary="A multi-vendor e-commerce ecosystem where buyers discover and purchase products"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CheckCircleOutlineIcon sx={{ color: "#4caf50" }} />
                            </ListItemIcon>
                            <ListItemText
                                primary="Seller Management Tools"
                                secondary="Inventory management, order fulfillment, analytics, and seller dashboard"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CheckCircleOutlineIcon sx={{ color: "#4caf50" }} />
                            </ListItemIcon>
                            <ListItemText
                                primary="Payment Processing"
                                secondary="Secure payment handling for multiple payment methods and currencies"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CheckCircleOutlineIcon sx={{ color: "#4caf50" }} />
                            </ListItemIcon>
                            <ListItemText
                                primary="Fulfillment Services"
                                secondary="Optional Fulfillment by Hula Market (FHM) for logistics and delivery"
                            />
                        </ListItem>
                    </List>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 2. User Eligibility */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        2. User Eligibility and Accounts
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        To use applications powered by the platform, you must:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 2 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="• Be at least 18 years old or have parental/guardian consent" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Have the legal capacity to enter into binding contracts" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Provide accurate, complete, and current information during registration" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Maintain a valid email address for account verification" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• For Sellers: Have proper business registration and tax compliance documentation" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Account Responsibility
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 3. Buyer Terms */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        3. Buyer Terms and Conditions
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Purchase Agreement
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        Your purchase through platform applications constitutes an offer to buy products on the terms presented. Sellers have the right to accept or decline your purchase offer. Once a seller confirms your order, a binding contract is formed between you and the seller.
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Product Descriptions and Prices
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        While we strive to provide accurate product descriptions and pricing, the platform does not guarantee that all product descriptions, pricing, or availability information is accurate, complete, or error-free. Prices are subject to change without notice. Sellers are responsible for ensuring the accuracy of their product listings.
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Returns and Refunds
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        Returns and refund policies are determined by individual sellers. Each product listing will display the seller's specific return policy. For disputes, buyers may open a case within 30 days of delivery. The platform provides dispute resolution services and may facilitate refunds if the seller is unresponsive.
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Payment Methods
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        The platform supports multiple payment methods including credit cards, debit cards, mobile money, bank transfers, and digital wallets. All payments are processed securely with PCI-DSS compliance. You agree to provide valid payment information and authorize the platform to charge your chosen payment method.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 4. Seller Terms */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        4. Seller Terms and Conditions
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Seller Registration
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        To become a seller using platform applications, you must:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 2 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="• Complete the seller registration process with accurate business information" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Provide valid business registration documents and tax identification" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Agree to our seller policies and performance standards" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Maintain active communication and fulfill orders on time" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Accept the commission structure (3-15% depending on category)" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Product Compliance
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        All products listed on platform applications must be legal, authentic, and comply with local and international laws. Sellers warrant that they have the right to sell all products and that products do not infringe any third-party intellectual property rights.
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Prohibited Items
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        The following items are strictly prohibited on platform applications:
                    </Typography>
                    <Box sx={{ backgroundColor: "#ffe0e0", p: 2, borderRadius: 1, mb: 2 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="• Counterfeit, stolen, or fraudulent goods" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Weapons, explosives, or dangerous materials" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Controlled substances or illegal items" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Items that violate intellectual property rights" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Adult or sexually explicit content" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Hate speech or discriminatory content" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Seller Performance Standards
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        Sellers must maintain:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="• Order fulfillment rate: ≥95%" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• On-time delivery rate: ≥98%" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Customer satisfaction rating: ≥4.0/5.0 stars" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Response time to customer inquiries: ≤24 hours" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 5. Prohibited Conduct */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <WarningAmberIcon sx={{ color: "#ff9800" }} />
                        5. Prohibited Conduct
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        You agree not to use platform applications for any unlawful purpose or in any way that violates these Terms. Specifically, you shall not:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="• Attempt to unauthorized access to platform systems or user accounts" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Engage in fraudulent transactions, chargebacks, or payment manipulation" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Post false, misleading, or defamatory content" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Engage in harassment, abuse, or threats toward other users" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Interfere with or disrupt platform operations" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Violate any applicable local, state, national, or international laws" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Attempt to circumvent transaction fees or commission structures" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 6. Intellectual Property */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        6. Intellectual Property Rights
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        All content on platform applications, including but not limited to text, graphics, logos, images, audio, and video, is the property of the Pixel Point ERP Platform or its content suppliers and is protected by international copyright laws.
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        By uploading content to platform applications (product photos, descriptions, reviews), you grant the Pixel Point ERP Platform a royalty-free, worldwide, non-exclusive license to use, reproduce, modify, and display such content in connection with the Service.
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        If you believe your intellectual property rights have been violated on platform applications, please contact our legal team with detailed information and we will investigate promptly.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 7. Limitation of Liability */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        7. Limitation of Liability
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff3cd", p: 2, borderRadius: 1, border: "1px solid #ffc107" }}>
                        <Typography sx={{ mb: 2, color: "#856404", lineHeight: 1.7 }}>
                            TO THE FULLEST EXTENT PERMITTED BY LAW, THE PIXEL POINT ERP PLATFORM SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, EVEN IF THE PLATFORM HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                        </Typography>
                        <Typography sx={{ color: "#856404", lineHeight: 1.7 }}>
                            The platform's total liability for any claim shall not exceed the amount you paid to the platform in the past 12 months.
                        </Typography>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 8. Dispute Resolution */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        8. Dispute Resolution
                    </Typography>
                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Buyer-Seller Disputes
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        The platform provides a structured dispute resolution process. For purchase disputes, buyers can file a claim within 30 days of delivery. The platform will review evidence from both parties and make a determination.
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Arbitration
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        Any dispute not resolved through our dispute resolution process shall be resolved through binding arbitration rather than in court, under the rules of a mutually agreed-upon arbitration body. You and the Pixel Point ERP Platform agree to this arbitration clause.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 9. Termination */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        9. Termination and Suspension
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        The platform may suspend or terminate your account if you:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="• Violate these Terms or applicable laws" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Engage in fraudulent or illegal activity" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Have a history of chargebacks or payment disputes" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Provide false or misleading information" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Violate seller performance standards (for sellers)" />
                            </ListItem>
                        </List>
                    </Box>
                    <Typography sx={{ mt: 2, color: "#555", lineHeight: 1.7 }}>
                        You may also terminate your account at any time by contacting our support team. Upon termination, you remain responsible for any outstanding obligations or fees.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 10. Changes to Terms */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        10. Changes to These Terms
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        The Pixel Point ERP Platform reserves the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of platform applications following the posting of revised Terms means you accept and agree to the changes. We recommend you regularly review these Terms to stay informed.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 11. Governing Law */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        11. Governing Law and Jurisdiction
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction in which Continuum Technologies operates, without regard to its conflict of laws principles. Any legal action or proceedings related to these Terms shall be exclusively governed by such laws.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 13. Refund and Return Policy */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        13. Refund and Return Policy
                    </Typography>
                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Return Eligibility
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        Most items purchased through platform applications are eligible for return or refund within 30 days of purchase, subject to the following conditions:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Items must be in original, unused condition with all packaging and documentation" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Items must not show signs of wear, damage, or alteration" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Return shipping costs may apply depending on the reason for return" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Digital products and services are generally non-refundable once activated" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Final sale items (marked as such at purchase) cannot be returned or refunded" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Refund Processing
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        Once we receive and inspect your returned item:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Refunds are processed within 5-10 business days" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Funds are returned to your original payment method" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="For defective items, we may offer a replacement or full refund at our discretion" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Partial refunds may be issued if the item is damaged due to customer misuse" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 14. Warranty and Product Liability */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        14. Warranty and Product Liability
                    </Typography>
                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Seller Warranties
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        Sellers warrant that:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Products are authentic, genuine, and not counterfeit" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Products comply with applicable laws and regulations" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Products are free from defects in materials and workmanship" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Sellers possess the legal right to sell the products" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Disclaimer of Implied Warranties
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        The platform provides the Service on an "AS IS" and "AS AVAILABLE" basis. We disclaim all implied warranties, including merchantability, fitness for a particular purpose, and non-infringement, to the extent permitted by law.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 15. Content and Intellectual Property */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        15. Content Ownership and Licensing
                    </Typography>
                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Hula Market Content
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        All content on platform applications (including logos, designs, text, graphics, and software) is the exclusive property of the Pixel Point ERP Platform or our content providers and is protected by copyright, trademark, and other intellectual property laws.
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. User-Generated Content
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        By uploading product photos, descriptions, reviews, or other content, you grant the Pixel Point ERP Platform a non-exclusive, royalty-free license to use, reproduce, modify, and display your content on the platform and in our marketing materials.
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        C. Limited License
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        You may access and use Hula Market for personal, non-commercial purposes only. You may not copy, reproduce, modify, distribute, or transmit any content without our written permission.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 16. Account Termination */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        16. Account Termination and Suspension
                    </Typography>
                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Termination by User
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        You may terminate your Hula Market account at any time by contacting our Support Team. Upon termination, you will lose access to all account data, pending orders, and seller tools.
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Termination by Hula Market
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        We may terminate or suspend your account immediately without notice if you:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Violate these Terms or our Conditions of Use" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Engage in fraudulent, illegal, or harmful activities" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Repeatedly violate our policies or community guidelines" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Fail to comply with our seller or buyer requirements" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Create multiple accounts to circumvent our policies" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 17. Enhanced Limitation of Liability */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        17. Enhanced Limitation of Liability
                    </Typography>
                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Disclaimers
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        To the fullest extent permitted by law, Hula Market shall not be liable for:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Indirect, incidental, special, consequential, or punitive damages" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Loss of profits, revenue, data, or business opportunity" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Errors or interruptions in the Service" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Third-party conduct or content" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Product quality, availability, or delivery by sellers" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Liability Cap
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        Our total liability to you shall not exceed the amount paid by you in the 12 months preceding the claim, or $100 USD, whichever is greater.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 18. Severability and Entire Agreement */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        18. Severability and Entire Agreement
                    </Typography>
                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Severability
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        If any provision of these Terms is found to be unenforceable or invalid, that provision shall be modified to the minimum extent necessary to make it enforceable, and all other provisions shall remain in full force and effect.
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Entire Agreement
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        These Terms, along with our Privacy Notice and other policies, constitute the entire agreement between you and Hula Market regarding your use of the Service and supersede all prior agreements and understandings.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 19. Contact Information */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        19. Contact Information
                    </Typography>
                    <Card sx={{ backgroundColor: "#f9f9f9" }}>
                        <CardContent>
                            <Typography sx={{ mb: 1 }}>
                                <strong>For questions about these Terms and Conditions:</strong>
                            </Typography>
                            <Typography sx={{ mb: 0.5 }}>Email: legal@hulamarket.co.ke</Typography>
                            <Typography sx={{ mb: 0.5 }}>Support Portal: support.hulamarket.co.ke</Typography>
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