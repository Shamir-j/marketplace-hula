import { Box, Typography, Container, Divider, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Chip } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import PersonIcon from "@mui/icons-material/Person";
import StorageIcon from "@mui/icons-material/Storage";
import GppGoodIcon from "@mui/icons-material/GppGood";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice - Hula Market | Data Protection & Privacy Policy",
  description: "Read Hula Market's comprehensive privacy notice. Learn how we collect, use, and protect your personal data. GDPR & CCPA compliant. Your privacy matters to us.",
  keywords: "privacy policy, data protection, GDPR, CCPA, personal data, privacy notice",
  openGraph: {
    title: "Privacy Notice - Hula Market",
    description: "Understand how Hula Market protects your privacy and personal data",
    type: "website",
    url: "https://hulamarket.co.ke/privacy-notice",
  },
};

export default function PrivacyNotice() {
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
                        Privacy Notice
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#666", mb: 1 }}>
                        Effective Date: December 19, 2025
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#999" }}>
                        Last Updated: December 19, 2025
                    </Typography>
                </Box>

                {/* Welcome Card */}
                <Card sx={{ mb: 4, backgroundColor: "#e3f2fd", border: "1px solid #2196f3" }}>
                    <CardContent>
                        <Typography sx={{ color: "#1565c0" }}>
                            At Hula Market (operated by Continuum Technologies), we take your privacy very seriously. This Privacy Notice explains how we collect, use, process, and protect your personal and business data when you use our e-commerce marketplace, seller tools, and related services. We are committed to maintaining transparency and complying with international data protection regulations including GDPR, CCPA, and local privacy laws.
                        </Typography>
                    </CardContent>
                </Card>

                {/* 1. Information We Collect */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <DataUsageIcon sx={{ color: "#2196f3" }} />
                        1. Information We Collect
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Personal Information
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 2 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Name and contact details (email, phone, physical address)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Account login credentials and security questions" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Date of birth and government-issued ID (for verification)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Shipping and billing addresses" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Payment information (processed securely via PCI-DSS compliant systems)" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Business Information (For Sellers)
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 2 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Business name, registration number, and tax identification" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Business address and phone number" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Bank account details for payout processing" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Seller agreement documentation and terms acceptance" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        C. Transaction and Order Data
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 2 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Purchase history and order details" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Product browsing and wishlist activity" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Payment transaction history and invoice records" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Customer reviews and ratings submitted by users" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Support tickets and communication records" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        D. Technical and Usage Data
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 2 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="IP address, device type, operating system, and browser information" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Cookies, pixel tags, and similar tracking technologies" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Pages visited, time spent, clicks, and interactions" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Device identifiers and mobile analytics data" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Referral source and attribution data" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        E. Optional Information
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Product images, descriptions, and marketing materials you upload" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Customer feedback and communication preferences" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Social media profiles (if you link your account to social platforms)" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 2. How We Use Your Data */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <PersonIcon sx={{ color: "#4caf50" }} />
                        2. How We Use Your Information
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Service Provision and Operations
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        We use your information to:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Create and maintain your Hula Market account" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Process purchases and deliver orders" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Process payments and handle refunds/disputes" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Manage seller inventory, orders, and fulfillment" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Provide customer support and resolve complaints" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Communication and Marketing
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        We may send you:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Order confirmations, shipping updates, and delivery notifications" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Account security alerts and password reset requests" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Promotional emails and marketing communications (with your consent)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Product recommendations based on your browsing history" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Newsletters and updates about new features or services" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        C. Analytics and Improvement
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        We use your data to:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Analyze how users interact with Hula Market" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Personalize your shopping experience" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Improve our platform, features, and services" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Conduct A/B testing and user research" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Generate anonymized market insights and trends" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        D. Security and Legal Compliance
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        We use your information to:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Detect, prevent, and address fraud and unauthorized transactions" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Protect against malware, security breaches, and cyber attacks" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Enforce our Terms and Conditions and other agreements" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Comply with legal obligations, court orders, and government requests" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Tax reporting and regulatory compliance" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 3. Data Sharing */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <StorageIcon sx={{ color: "#ff9800" }} />
                        3. How We Share Your Data
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Service Providers
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        We share data with third-party service providers who help us operate Hula Market, including:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Payment processors and financial institutions" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Shipping and logistics partners" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Email and communication service providers" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Cloud hosting and storage providers" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Analytics and fraud detection services" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Sellers and Buyers
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        To complete transactions, we share:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Buyer names, email, and shipping address with sellers (for order fulfillment)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Seller business information with buyers (upon request)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Customer reviews and ratings are public on product pages" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        C. Legal Requirements
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        We may disclose your information if required by law, such as responding to court orders, government requests, or law enforcement inquiries. We will provide notice when legally permitted.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 4. Data Security */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <GppGoodIcon sx={{ color: "#4caf50" }} />
                        4. Data Security and Protection
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Security Measures
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        Hula Market implements comprehensive security measures including:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="256-bit SSL/TLS encryption for data in transit" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="PCI-DSS compliance for payment card data handling" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="AES-256 encryption for data at rest" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Regular security audits and penetration testing" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Multi-factor authentication (MFA) for account access" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Intrusion detection and prevention systems" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Regular security patches and updates" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Limitations
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        While we implement strong security measures, no system is completely secure. We cannot guarantee absolute security and you use Hula Market at your own risk. We recommend:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Using a strong, unique password for your account" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Never sharing your login credentials with others" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Enabling two-factor authentication" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Immediately reporting suspicious activity" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 5. Your Rights */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <SecurityIcon sx={{ color: "#2196f3" }} />
                        5. Your Privacy Rights
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Access and Portability
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        You have the right to request a copy of all personal data we hold about you in a portable, machine-readable format.
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Correction and Deletion
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        You can request to correct inaccurate information or delete your account and associated data. We will honor deletion requests unless we are required to retain data for legal or regulatory reasons.
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        C. Opt-Out
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        You can opt-out of marketing communications by clicking "Unsubscribe" in any email or managing preferences in your account settings. Opting out will not affect transactional communications.
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        D. Cookies and Tracking
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        You can control cookie settings in your browser. Note that disabling cookies may affect Hula Market functionality. We respect "Do Not Track" signals where feasible.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 6. Data Retention */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        6. Data Retention
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        We retain your data for the following periods:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Account data: For the duration of your account + 2 years after termination" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Transaction records: 7 years (for tax and audit requirements)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Marketing communications: Until you unsubscribe or delete account" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Support tickets: 3 years for reference and dispute resolution" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Cookies: Up to 2 years depending on type" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 7. Children's Privacy */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        7. Children's Privacy
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        Hula Market is not intended for children under 13 years old. We do not knowingly collect personal data from children under 13. If we become aware that we have collected data from a child under 13, we will delete it immediately. Parents or guardians who believe their child has provided information to Hula Market should contact us at privacy@hulamarket.co.ke.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 8. International Data Transfers */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        8. International Data Transfers
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        Your data may be transferred, stored, and processed in countries other than your country of residence. We ensure that international transfers comply with applicable data protection laws, including adequacy decisions or standard contractual clauses.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 9. Third-Party Links */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        9. Third-Party Links and Services
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        Hula Market may contain links to third-party websites and services. This Privacy Notice does not apply to third-party sites. We are not responsible for their privacy practices. Please review their privacy policies before sharing information.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 10. Changes to This Notice */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        10. Changes to This Privacy Notice
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        Hula Market reserves the right to update this Privacy Notice at any time. Changes will be effective immediately upon posting. We will notify you of significant changes via email or a prominent notice on our website. Your continued use of Hula Market following changes constitutes your acceptance of the updated Privacy Notice.
                    </Typography>
                </Box>

                {/* 12. GDPR and CCPA Rights */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        12. GDPR and CCPA Rights
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. GDPR Rights (for EU residents)
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        If you are located in the EU, you have the following rights:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Right to Access: Request a copy of your personal data and how it's being used" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Right to Rectification: Correct inaccurate or incomplete personal data" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Right to Erasure (Right to be Forgotten): Request deletion of your personal data under certain circumstances" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Right to Restrict Processing: Limit how we use your data in certain situations" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Right to Data Portability: Receive your data in a portable, machine-readable format" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Right to Object: Object to our processing of your data for marketing, analytics, or other purposes" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Right to Lodge a Complaint: Contact your local data protection authority if you believe we've violated your rights" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. CCPA Rights (for California residents)
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        If you are a California resident, you have the following rights:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Right to Know: Request what personal information we collect, use, and share" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Right to Delete: Request deletion of personal information collected from you" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Right to Opt-Out: Opt-out of the sale or sharing of your personal information" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Right to Correct: Request correction of inaccurate personal information" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Right to Limit Use: Limit how we use your sensitive personal information" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        C. How to Exercise Your Rights
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        To exercise any of these rights, contact us at privacy@hulamarket.co.ke with "Data Subject Request" in the subject line. Include details about your request and proof of identity. We will respond within the timeframe required by applicable law (typically 30 days).
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 13. Data Breach Notification */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        13. Data Breach Notification
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        In the event of a security breach that affects your personal data, we will:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Notify you without unreasonable delay (typically within 72 hours of discovery)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Provide information about the breach, affected data, and steps we're taking to remediate it" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Notify relevant regulatory authorities as required by law" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Offer credit monitoring or identity theft protection services if appropriate" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 14. Automated Decision-Making and Profiling */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        14. Automated Decision-Making and Profiling
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        We use automated systems for certain decisions, including:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Fraud detection and prevention" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Seller account verification and risk assessment" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Personalized product recommendations" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Credit evaluation for Hula financing options" />
                            </ListItem>
                        </List>
                    </Box>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        If you believe an automated decision has been made about you, you have the right to request human review and contestation of such decisions. Contact us at privacy@hulamarket.co.ke for more information.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 15. Contact Information */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        15. Contact Us
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        If you have questions, concerns, or requests regarding this Privacy Notice or our privacy practices:
                    </Typography>
                    <Card sx={{ backgroundColor: "#f9f9f9" }}>
                        <CardContent>
                            <Typography sx={{ mb: 1 }}>
                                <strong>Privacy Team</strong>
                            </Typography>
                            <Typography sx={{ mb: 0.5 }}>Email: privacy@hulamarket.co.ke</Typography>
                            <Typography sx={{ mb: 0.5 }}>Data Protection Officer: dpo@hulamarket.co.ke</Typography>
                            <Typography sx={{ mb: 0.5 }}>Address: Continuum Technologies, 11011-00111 GPO Nairobi</Typography>
                            <Typography sx={{ mb: 1 }}>Support Portal: support.hulamarket.co.ke</Typography>
                            <Typography variant="body2" sx={{ mt: 2, fontStyle: "italic", color: "#666" }}>
                                We aim to respond to all data privacy requests within 30 days.
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
