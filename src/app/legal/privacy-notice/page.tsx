import { Box, Typography, Container, Divider, Card, CardContent, List, ListItem, ListItemText } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import PersonIcon from "@mui/icons-material/Person";
import StorageIcon from "@mui/icons-material/Storage";
import GppGoodIcon from "@mui/icons-material/GppGood";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Notice - Pixel Point ERP Platform | Data Protection & Privacy Policy",
    description: "Read the Pixel Point ERP Platform's comprehensive privacy notice. Learn how we collect, use, and protect your personal data across all platform applications. GDPR & CCPA compliant.",
    keywords: "privacy policy, data protection, GDPR, CCPA, personal data, privacy notice",
    openGraph: {
        title: "Privacy Notice - Pixel Point ERP Platform",
        description: "Understand how the Pixel Point ERP Platform protects your privacy and personal data",
        type: "website",
        url: "https://hulamarket.co.ke/legal/privacy-notice",
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
                        Last Updated: December 26, 2025
                    </Typography>
                </Box>

                {/* Welcome Card */}
                {/* Covered Applications */}
                <Card sx={{ mb: 4, backgroundColor: "#e0e7ff", border: "1px solid #3f51b5" }}>
                    <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#1a237e" }}>
                            Covered Applications
                        </Typography>
                        <Typography sx={{ color: "#1a237e", mb: 2 }}>
                            This policy applies to all applications powered by the Pixel Point ERP Platform, including:
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="• Hula Market (Consumer Marketplace)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Pixel Point POS (Merchant Point-of-Sale Application)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Pixel Point Terminal (Store Checkout Application)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Other current and future Pixel Point-powered applications" />
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>

                <Card sx={{ mb: 4, backgroundColor: "#e3f2fd", border: "1px solid #2196f3" }}>
                    <CardContent>
                        <Typography sx={{ color: "#1565c0" }}>
                            At the Pixel Point ERP Platform (operated by Continuum Technologies), we take your privacy very seriously. This Privacy Notice explains how we collect, use, process, and protect your personal and business data when you use applications powered by our platform, including e-commerce marketplaces, point-of-sale systems, terminals, and related services. We are committed to maintaining transparency and complying with international data protection regulations including GDPR, CCPA, and local privacy laws.
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
                                <ListItemText primary="Create and maintain your platform account" />
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
                                <ListItemText primary="Analyze how users interact with platform applications" />
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

                {/* 2B. Biometric Data */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        2B. Biometric Data & Facial Recognition
                    </Typography>

                    <Card sx={{ backgroundColor: "#fff3e0", border: "1px solid #ff9800", mb: 2 }}>
                        <CardContent>
                            <Typography sx={{ fontWeight: "bold", mb: 1, color: "#e65100" }}>
                                ⚠️ Biometric Data Notice
                            </Typography>
                            <Typography sx={{ color: "#e65100", fontSize: "0.9rem" }}>
                                Some platform applications may collect biometric data for security and authentication purposes. This collection is STRICTLY OPTIONAL and requires your explicit consent.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        What Biometric Data We May Collect
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText 
                                    primary="Facial Recognition Data"
                                    secondary="For secure login, identity verification, and fraud prevention (Pixel Point POS seller authentication)"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Fingerprint Data"
                                    secondary="For biometric authentication on supported devices (optional)"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Voice Patterns"
                                    secondary="For voice-activated commands and customer service verification (if enabled)"
                                />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        How We Use Biometric Data
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="• Secure account access and authentication" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Fraud prevention and seller verification" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Age verification for restricted products (alcohol, tobacco)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Contactless checkout experiences (Pixel Point Terminal)" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Your Rights Regarding Biometric Data
                    </Typography>
                    <Box sx={{ backgroundColor: "#e8f5e9", p: 2, borderRadius: 1, border: "1px solid #4caf50" }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="✓ Biometric data collection is OPTIONAL - you can decline without losing access to basic platform services" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ You can delete your biometric data at any time via Account Settings → Privacy → Biometric Data" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Biometric data is stored encrypted and never shared with third parties" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Data is deleted automatically after 3 years of inactivity or upon account closure" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 2C. Location Data */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        2C. Location Data & Geolocation
                    </Typography>

                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        We collect location data to provide location-based services, optimize delivery, and improve your experience.
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Types of Location Data Collected
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText 
                                    primary="Precise GPS Location"
                                    secondary="With your explicit permission (for delivery tracking, nearby stores, local products)"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Approximate Location"
                                    secondary="Based on IP address (for regional pricing, currency, language)"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Shipping and Billing Addresses"
                                    secondary="Provided during checkout for order fulfillment"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Store Location Data"
                                    secondary="For Pixel Point POS/Terminal users (to route orders to nearest fulfillment center)"
                                />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        How We Use Location Data
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="• Calculate accurate shipping costs and delivery estimates" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Show nearby pickup points and physical stores" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Display region-specific products, pricing, and availability" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Fraud detection (flagging unusual location patterns)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Delivery driver navigation and route optimization" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Compliance with regional tax and regulatory requirements" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Controlling Location Permissions
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        You can manage location permissions through your device settings (iOS: Settings → Privacy → Location Services | Android: Settings → Location). Disabling location may limit certain features like local product search and accurate delivery estimates.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 2D. AI/ML and Automated Processing */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        2D. Artificial Intelligence & Machine Learning
                    </Typography>

                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        We use AI and machine learning technologies to enhance your experience, improve security, and optimize platform operations.
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        AI-Powered Features
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText 
                                    primary="Personalized Product Recommendations"
                                    secondary="ML models analyze your browsing history, purchases, and preferences to suggest relevant products"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Dynamic Pricing Optimization"
                                    secondary="AI adjusts pricing based on demand, inventory, and market conditions"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Fraud Detection & Prevention"
                                    secondary="ML algorithms detect suspicious patterns, unusual transactions, and account takeovers"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Search & Discovery Enhancement"
                                    secondary="Natural language processing (NLP) improves search accuracy and product discovery"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Chatbot Customer Support"
                                    secondary="AI-powered chatbots handle common queries and route complex issues to human agents"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Image Recognition"
                                    secondary="Visual search, automatic product tagging, and content moderation"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Demand Forecasting"
                                    secondary="Predicting inventory needs and optimizing supply chain logistics"
                                />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Data Used in AI/ML Models
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="• Browsing patterns, clicks, and session data" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Purchase history and cart activity" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Product views, ratings, and reviews" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Search queries and filters applied" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Device information and network data" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Aggregated, anonymized user behavior data" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Your Control Over AI Processing
                    </Typography>
                    <Box sx={{ backgroundColor: "#e3f2fd", p: 2, borderRadius: 1, border: "1px solid #2196f3" }}>
                        <Typography sx={{ color: "#1565c0", mb: 1 }}>
                            You have the right to:
                        </Typography>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="✓ Opt out of personalized recommendations (Account Settings → Privacy → Personalization)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Request human review of automated decisions that significantly affect you" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Understand the logic behind automated decisions (subject to trade secret protections)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Object to profiling for direct marketing purposes" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 2E. Cookies and Tracking Technologies */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        2E. Cookies & Tracking Technologies
                    </Typography>

                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        We use cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content. For full details, see our <a href="/legal/cookie-policy" style={{ color: "#2196f3", textDecoration: "underline" }}>Cookie Policy</a>.
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Types of Cookies We Use
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText 
                                    primary="Essential Cookies (Required)"
                                    secondary="Session management, authentication, shopping cart, security"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Performance Cookies (Optional)"
                                    secondary="Analytics, user behavior tracking, A/B testing (Google Analytics, Mixpanel)"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Functional Cookies (Optional)"
                                    secondary="Preferences, recently viewed items, language settings"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Advertising Cookies (Optional)"
                                    secondary="Personalized ads, retargeting, conversion tracking (Facebook Pixel, Google Ads)"
                                />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Managing Cookie Preferences
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        You can manage your cookie preferences through our cookie consent banner (shown on first visit) or via Account Settings → Privacy → Cookie Preferences. You can also control cookies through your browser settings, though this may limit platform functionality.
                    </Typography>
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
                        We share data with third-party service providers who help us operate the platform, including:
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

                {/* 3B. Third-Party Vendors and Subprocessors */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        3B. Third-Party Vendors & Subprocessors List
                    </Typography>

                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        We work with trusted third-party vendors and subprocessors to deliver platform services. All vendors sign Data Processing Agreements (DPAs) and comply with GDPR, CCPA, and applicable data protection laws.
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Payment Processing
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText 
                                    primary="Stripe, Inc."
                                    secondary="Payment processing, fraud detection | Data: payment card info, transaction details | Location: USA (Privacy Shield certified)"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Safaricom M-Pesa"
                                    secondary="Mobile money transactions | Data: phone number, transaction amount | Location: Kenya"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="PayPal Holdings, Inc."
                                    secondary="Alternative payment method | Data: email, payment info | Location: USA/EU"
                                />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Cloud Infrastructure & Hosting
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText 
                                    primary="Amazon Web Services (AWS)"
                                    secondary="Cloud hosting, database, file storage | Data: all platform data | Locations: EU (Ireland), USA"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Cloudflare, Inc."
                                    secondary="CDN, DDoS protection, DNS | Data: IP address, cookies | Location: Global network"
                                />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Analytics & Monitoring
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText 
                                    primary="Google LLC (Google Analytics)"
                                    secondary="Website analytics, user behavior | Data: cookies, IP address, device info | Location: USA"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Mixpanel, Inc."
                                    secondary="Product analytics, funnel tracking | Data: user actions, events | Location: USA"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Hotjar Ltd."
                                    secondary="Heatmaps, session recordings | Data: mouse movements, clicks | Location: EU (Malta)"
                                />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Communication & Email
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText 
                                    primary="SendGrid (Twilio Inc.)"
                                    secondary="Transactional emails, order notifications | Data: email address, name | Location: USA"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Twilio Inc."
                                    secondary="SMS notifications, 2FA codes | Data: phone number, messages | Location: USA"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Intercom, Inc."
                                    secondary="Customer support chat | Data: email, messages, browsing history | Location: USA"
                                />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Advertising & Marketing
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText 
                                    primary="Meta Platforms, Inc. (Facebook/Instagram Pixel)"
                                    secondary="Ad targeting, conversion tracking | Data: cookies, browsing behavior | Location: USA/EU"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Google LLC (Google Ads)"
                                    secondary="Display advertising, remarketing | Data: cookies, ad interactions | Location: USA"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="TikTok Pte. Ltd."
                                    secondary="Video ad campaigns | Data: device ID, ad engagement | Location: Singapore/USA"
                                />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Logistics & Shipping
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText 
                                    primary="DHL Express"
                                    secondary="International shipping | Data: name, address, phone, package details | Location: Germany/Global"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Kenya Courier Services Ltd."
                                    secondary="Local delivery | Data: delivery address, phone | Location: Kenya"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Posta Kenya"
                                    secondary="Standard mail delivery | Data: postal address | Location: Kenya"
                                />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Security & Fraud Prevention
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText 
                                    primary="Sift Science, Inc."
                                    secondary="Fraud detection, risk scoring | Data: transaction patterns, device fingerprints | Location: USA"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="reCAPTCHA (Google LLC)"
                                    secondary="Bot detection | Data: IP address, mouse movements | Location: USA"
                                />
                            </ListItem>
                        </List>
                    </Box>

                    <Card sx={{ backgroundColor: "#e3f2fd", border: "1px solid #2196f3" }}>
                        <CardContent>
                            <Typography sx={{ fontWeight: "bold", mb: 1, color: "#1565c0" }}>
                                ℹ️ Vendor List Updates
                            </Typography>
                            <Typography sx={{ color: "#1565c0", fontSize: "0.9rem" }}>
                                This list is current as of the "Last Updated" date above. We may add, remove, or change vendors as needed to improve platform services. For the most current vendor list, visit: <a href="/legal/vendor-list" style={{ color: "#0d47a1", textDecoration: "underline" }}>hulamarket.co.ke/legal/vendor-list</a>
                            </Typography>
                        </CardContent>
                    </Card>
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
                        The platform implements comprehensive security measures including:
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
                        While we implement strong security measures, no system is completely secure. We cannot guarantee absolute security and you use platform applications at your own risk. We recommend:
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
                        You can control cookie settings in your browser. Note that disabling cookies may affect platform application functionality. We respect "Do Not Track" signals where feasible.
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
                        Platform applications are not intended for children under 13 years old. We do not knowingly collect personal data from children under 13. If we become aware that we have collected data from a child under 13, we will delete it immediately. Parents or guardians who believe their child has provided information through platform applications should contact us at privacy@hulamarket.co.ke.
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
                        Platform applications may contain links to third-party websites and services. This Privacy Notice does not apply to third-party sites. We are not responsible for their privacy practices. Please review their privacy policies before sharing information.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 10. Changes to This Notice */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        10. Changes to This Privacy Notice
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        The Pixel Point ERP Platform reserves the right to update this Privacy Notice at any time. Changes will be effective immediately upon posting. We will notify you of significant changes via email or a prominent notice on our website. Your continued use of platform applications following changes constitutes your acceptance of the updated Privacy Notice.
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

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        D. Kenya Data Protection Act Compliance (for Kenyan residents)
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        As a platform operating in Kenya, we comply with the Kenya Data Protection Act, 2019. Kenyan residents have rights including:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Right to Access: Request information about your personal data we hold" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Right to Correction: Request correction of inaccurate personal data" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Right to Deletion: Request deletion of your personal data (subject to legal retention requirements)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Right to Object: Object to processing of your data for direct marketing or other purposes" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Right to Data Portability: Request transfer of your data to another service provider" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Right to Withdraw Consent: Withdraw consent for data processing at any time" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Right to Lodge Complaint: File a complaint with the Office of the Data Protection Commissioner (ODPC) if you believe your rights have been violated" />
                            </ListItem>
                        </List>
                    </Box>

                    <Card sx={{ backgroundColor: "#e8f5e9", border: "1px solid #4caf50" }}>
                        <CardContent>
                            <Typography sx={{ fontWeight: "bold", mb: 1, color: "#2e7d32" }}>
                                🇰🇪 Kenya Data Protection Commissioner Contact
                            </Typography>
                            <Typography sx={{ color: "#2e7d32", fontSize: "0.9rem", mb: 0.5 }}>
                                Office of the Data Protection Commissioner (ODPC)
                            </Typography>
                            <Typography sx={{ color: "#2e7d32", fontSize: "0.9rem", mb: 0.5 }}>
                                Email: complaints@odpc.go.ke
                            </Typography>
                            <Typography sx={{ color: "#2e7d32", fontSize: "0.9rem", mb: 0.5 }}>
                                Website: www.odpc.go.ke
                            </Typography>
                            <Typography sx={{ color: "#2e7d32", fontSize: "0.9rem" }}>
                                Phone: +254 (0) 20 2962222
                            </Typography>
                        </CardContent>
                    </Card>
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
                        © 2025 Continuum Technologies (Development Lab: Quantum Times Technologies). Pixel Point ERP Platform. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
