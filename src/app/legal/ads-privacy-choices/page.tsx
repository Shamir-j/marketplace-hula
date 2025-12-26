import { Box, Typography, Container, Divider, Card, CardContent, List, ListItem, ListItemText } from "@mui/material";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import BlockIcon from "@mui/icons-material/Block";
import SettingsIcon from "@mui/icons-material/Settings";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import InfoIcon from "@mui/icons-material/Info";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Your Ads Privacy Choices - Pixel Point ERP Platform | Ad Preferences",
    description: "Manage your advertising preferences across Pixel Point ERP Platform applications. Control personalized ads, opt out of ad targeting, and protect your privacy.",
    keywords: "ad privacy, advertising preferences, personalized ads, privacy settings, opt-out",
    openGraph: {
        title: "Your Ads Privacy Choices - Pixel Point ERP Platform",
        description: "Control your advertising preferences across all platform applications",
        type: "website",
        url: "https://hulamarket.co.ke/legal/ads-privacy",
    },
};

export default function YourAdsPrivacyChoices() {
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
                        Your Ads Privacy Choices
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#666", mb: 1 }}>
                        Control How Your Data is Used for Advertising
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#999" }}>
                        Last Updated: December 26, 2025
                    </Typography>
                </Box>

                {/* Welcome Card */}
                {/* Covered Applications */}
                <Card sx={{ mb: 4, backgroundColor: "#fff3e0", border: "1px solid #ff9800" }}>
                    <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#e65100" }}>
                            Covered Applications
                        </Typography>
                        <Typography sx={{ color: "#e65100", mb: 2 }}>
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

                <Card sx={{ mb: 4, backgroundColor: "#e0e7ff", border: "1px solid #3f51b5" }}>
                    <CardContent>
                        <Typography sx={{ color: "#1a237e" }}>
                            At the Pixel Point ERP Platform, we believe you should have control over how your data is used for advertising. This page allows you to manage your ad preferences and opt-out of personalized advertising while still being able to use all applications powered by our platform.
                        </Typography>
                    </CardContent>
                </Card>

                {/* 1. Understanding Personalized Advertising */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <SettingsIcon sx={{ color: "#2196f3" }} />
                        1. How We Use Your Data for Advertising
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. What Data We Collect for Ads
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        To provide relevant advertisements, we may collect and analyze:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Browsing history and products you've viewed" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Search queries and shopping preferences" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Purchase history and transaction data" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Demographic information (age, gender, location)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Device information and IP address" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Interaction with ads and marketing materials" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Cookies, pixels, and similar tracking technologies" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. How We Use This Data
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Create audience segments for targeted advertising" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Display relevant product recommendations" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Personalize your shopping experience on platform applications" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Show ads on other websites and apps (retargeting)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Conduct marketing analytics and campaign optimization" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Measure ad effectiveness and ROI" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 2. Your Privacy Choices */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <PrivacyTipIcon sx={{ color: "#4caf50" }} />
                        2. Your Advertising Privacy Choices
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Opt-Out of Personalized Advertising
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        You can choose to opt-out of personalized advertising across all Pixel Point ERP Platform applications. This means:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="You'll see generic, non-personalized ads based on content you're viewing" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="No targeted ads based on your browsing or purchase history" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="No retargeting ads on other websites or apps" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="You can still use all platform application features and services" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="This preference applies to all Pixel Point ERP Platform applications; other sites may still show personalized ads" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Marketing Email Preferences
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        Control what marketing communications you receive:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Promotional emails (new products, sales, discounts)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Personalized product recommendations" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Weekly deals and flash sale notifications" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Newsletter and industry updates" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Note: You'll still receive transactional emails (order confirmations, shipping updates, etc.)" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 3. How to Manage Your Preferences */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <ManageAccountsIcon sx={{ color: "#ff9800" }} />
                        3. How to Manage Your Ad and Privacy Preferences
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. In Your Account Settings
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        Follow these steps to manage your ad preferences:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="1. Sign in to your platform application account" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="2. Click 'Account' → 'Privacy & Preferences'" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="3. Under 'Advertising Preferences', toggle 'Personalized Ads' on/off" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="4. Manage email preferences separately for different marketing types" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="5. Save your changes - they take effect immediately" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Email Preferences
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        You can also unsubscribe from marketing emails by:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Clicking 'Unsubscribe' link at the bottom of any marketing email" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Contacting support@hulamarket.co.ke with 'Unsubscribe' in the subject" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="It may take up to 10 business days to fully unsubscribe from all lists" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 4. Browser and Device Controls */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <BlockIcon sx={{ color: "#f44336" }} />
                        4. Browser and Device Privacy Controls
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Browser-Level Controls
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        Most modern browsers offer privacy controls:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Do Not Track (DNT): Enable in browser settings to signal your preference not to be tracked" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Cookie Management: Delete cookies, block third-party cookies, or set cookie preferences" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Private/Incognito Browsing: Use private mode to prevent tracking for that session" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Ad Tracking: Some browsers (Chrome, Safari) offer opt-out of cross-site tracking" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Device-Level Controls
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="iOS: Settings > Privacy > Tracking > Toggle off Allow Apps to Request to Track" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Android: Settings > Google > Manage your Google Account > Data & Privacy > Ad Settings > Opt out of Personalized Ads" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 5. Third-Party Advertising Services */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <InfoIcon sx={{ color: "#9c27b0" }} />
                        5. Third-Party Advertising and Opt-Outs
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Third-Party Ad Networks
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        We work with third-party advertising partners (Google Ads, Facebook, etc.) to display ads on other platforms. You can opt-out directly with these services:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Google Ads: Visit Google Ad Settings (adssettings.google.com)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Facebook: Adjust ad preferences in Settings → Ads → Ad Preferences" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Digital Advertising Alliance (DAA): Visit youradchoices.com to opt-out globally" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Network Advertising Initiative (NAI): Visit optout.networkadvertising.org" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Data Sharing with Partners
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        When you opt out of personalized advertising, we limit data sharing with third-party ad networks. However, we may still share aggregated, anonymized data for analytics and campaign measurement purposes.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 6. Impact of Your Choices */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        6. Impact and Important Information
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. What Changes When You Opt Out
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="✓ Fewer personalized ads shown to you" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ No retargeting ads on other websites" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ Reduced data collection for ad profiling" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ You may see more generic ads (may be less relevant)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Personalized product recommendations may be limited" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Services Not Affected
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        Opting out of personalized advertising does NOT affect:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Your ability to browse, search, or use platform applications" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Your account access or saved information" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Transactional emails or order-related communications" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Your payment or shipping information" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Essential platform functionality" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 7. Data Rights and Transparency */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        7. Your Data Rights
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Request Your Advertising Profile
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        You have the right to see what data we've collected about you for advertising purposes. Submit a request to privacy@hulamarket.co.ke with "Ad Profile Request" in the subject line.
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Data Deletion
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        You can request deletion of your advertising profile data. We'll stop using your data for personalized ads, though we may retain aggregated data for analytics.
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        C. GDPR and CCPA Rights
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        If you're in the EU or California, you have additional data protection rights. See our Privacy Notice and GDPR/CCPA sections for more details.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 8. Contact and Support */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        8. Questions About Ads Privacy?
                    </Typography>
                    <Card sx={{ backgroundColor: "#f9f9f9" }}>
                        <CardContent>
                            <Typography sx={{ mb: 2, fontWeight: "bold" }}>
                                Contact Our Privacy Team:
                            </Typography>
                            <Typography sx={{ mb: 0.5 }}>Email: privacy@hulamarket.co.ke</Typography>
                            <Typography sx={{ mb: 0.5 }}>Subject: "Ads Privacy Inquiry"</Typography>
                            <Typography sx={{ mb: 1 }}>Hours: Monday-Friday 9:00 AM - 6:00 PM EAT</Typography>
                            <Typography variant="body2" sx={{ mt: 2, fontStyle: "italic", color: "#666" }}>
                                We respond to all privacy inquiries within 5 business days. You can also manage preferences directly in your account settings anytime.
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
