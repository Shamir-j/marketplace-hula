import { Box, Typography, Container, Divider, Card, CardContent, List, ListItem, ListItemText, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import CookieIcon from "@mui/icons-material/Cookie";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookie Policy - Pixel Point ERP Platform | Cookie Usage & Management",
    description: "Learn about how the Pixel Point ERP Platform uses cookies and similar tracking technologies. Manage your cookie preferences and understand your choices.",
    keywords: "cookies, tracking, privacy, cookie policy, cookie consent, data collection",
    openGraph: {
        title: "Cookie Policy - Pixel Point ERP Platform",
        description: "Understand how we use cookies and manage your cookie preferences",
        type: "website",
        url: "https://hulamarket.co.ke/legal/cookie-policy",
    },
};

export default function CookiePolicy() {
    return (
        <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5", py: 4 }}>
            <Container maxWidth="md">
                {/* Header */}
                <Box sx={{ mb: 4, textAlign: "center" }}>
                    <Typography variant="h3">
                        Cookie Policy
                    </Typography>
                    <Typography variant="body1" sx={{ color: "text.disabled", mb: 1 }}>
                        Effective Date: December 27, 2025
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.disabled" }}>
                        Last Updated: December 27, 2025
                    </Typography>
                </Box>

                {/* Covered Applications */}
                <Card sx={{ mb: 4, backgroundColor: "#fff3e0", border: "1px solid #ff9800" }}>
                    <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "warning.dark" }}>
                            Covered Applications
                        </Typography>
                        <Typography sx={{ color: "warning.dark", mb: 2 }}>
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

                {/* Introduction */}
                <Card sx={{ mb: 4, backgroundColor: "#e3f2fd", border: "1px solid #2196f3" }}>
                    <CardContent>
                        <Typography sx={{ color: "info.dark" }}>
                            The Pixel Point ERP Platform uses cookies and similar tracking technologies to provide, protect, and improve our services. This Cookie Policy explains what cookies are, how we use them, and how you can control them. By using our platform applications, you consent to our use of cookies as described in this policy.
                        </Typography>
                    </CardContent>
                </Card>

                {/* 1. What Are Cookies */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
                        <CookieIcon sx={{ color: "warning.main" }} />
                        1. What Are Cookies?
                    </Typography>

                    <Typography sx={{ mb: 2, color: "text.secondary", lineHeight: 1.7 }}>
                        Cookies are small text files that are placed on your device (computer, smartphone, tablet) when you visit our platform applications. They help us recognize your device and store information about your preferences or past actions.
                    </Typography>

                    <Typography variant="subtitle2" sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
                        Types of Technologies We Use
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText 
                                    primary="Cookies"
                                    secondary="Small text files stored in your browser"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Web Beacons (Pixels)"
                                    secondary="Tiny graphics embedded in web pages and emails to track activity"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Local Storage"
                                    secondary="Data stored in your browser for app functionality"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Session Storage"
                                    secondary="Temporary storage cleared when you close your browser"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Mobile SDKs"
                                    secondary="Software development kits for mobile app tracking"
                                />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 2. Cookie Categories */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
                        <InfoIcon sx={{ color: "info.main" }} />
                        2. Categories of Cookies We Use
                    </Typography>

                    <Typography variant="subtitle2" sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
                        A. Strictly Necessary Cookies (Required)
                    </Typography>
                    <Typography sx={{ mb: 2, color: "text.secondary", lineHeight: 1.7 }}>
                        These cookies are essential for platform applications to function. You cannot opt out of these cookies.
                    </Typography>
                    <TableContainer component={Paper} sx={{ mb: 3 }}>
                        <Table size="small">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                                    <TableCell><strong>Cookie Name</strong></TableCell>
                                    <TableCell><strong>Purpose</strong></TableCell>
                                    <TableCell><strong>Duration</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>session_id</TableCell>
                                    <TableCell>Maintains your logged-in session</TableCell>
                                    <TableCell>Session</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>csrf_token</TableCell>
                                    <TableCell>Security protection against cross-site attacks</TableCell>
                                    <TableCell>Session</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>auth_token</TableCell>
                                    <TableCell>Authentication and account access</TableCell>
                                    <TableCell>30 days</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>cart_id</TableCell>
                                    <TableCell>Remembers items in your shopping cart</TableCell>
                                    <TableCell>7 days</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>locale</TableCell>
                                    <TableCell>Stores language and region preferences</TableCell>
                                    <TableCell>1 year</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Typography variant="subtitle2" sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
                        B. Performance & Analytics Cookies (Optional)
                    </Typography>
                    <Typography sx={{ mb: 2, color: "text.secondary", lineHeight: 1.7 }}>
                        These cookies help us understand how visitors use our platform applications.
                    </Typography>
                    <TableContainer component={Paper} sx={{ mb: 3 }}>
                        <Table size="small">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                                    <TableCell><strong>Cookie Name</strong></TableCell>
                                    <TableCell><strong>Purpose</strong></TableCell>
                                    <TableCell><strong>Duration</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>_ga</TableCell>
                                    <TableCell>Google Analytics - distinguishes users</TableCell>
                                    <TableCell>2 years</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>_gid</TableCell>
                                    <TableCell>Google Analytics - distinguishes users</TableCell>
                                    <TableCell>24 hours</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>_gat</TableCell>
                                    <TableCell>Google Analytics - throttles request rate</TableCell>
                                    <TableCell>1 minute</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>analytics_session</TableCell>
                                    <TableCell>Tracks user journey and behavior</TableCell>
                                    <TableCell>30 minutes</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Typography variant="subtitle2" sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
                        C. Functional Cookies (Optional)
                    </Typography>
                    <Typography sx={{ mb: 2, color: "text.secondary", lineHeight: 1.7 }}>
                        These cookies enable enhanced functionality and personalization.
                    </Typography>
                    <TableContainer component={Paper} sx={{ mb: 3 }}>
                        <Table size="small">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                                    <TableCell><strong>Cookie Name</strong></TableCell>
                                    <TableCell><strong>Purpose</strong></TableCell>
                                    <TableCell><strong>Duration</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>user_preferences</TableCell>
                                    <TableCell>Stores your display and layout preferences</TableCell>
                                    <TableCell>1 year</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>recently_viewed</TableCell>
                                    <TableCell>Tracks products you've recently viewed</TableCell>
                                    <TableCell>30 days</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>wishlist_items</TableCell>
                                    <TableCell>Saves items to your wishlist</TableCell>
                                    <TableCell>90 days</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>search_history</TableCell>
                                    <TableCell>Improves search suggestions</TableCell>
                                    <TableCell>60 days</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Typography variant="subtitle2" sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
                        D. Advertising & Marketing Cookies (Optional)
                    </Typography>
                    <Typography sx={{ mb: 2, color: "text.secondary", lineHeight: 1.7 }}>
                        These cookies are used to deliver personalized advertisements.
                    </Typography>
                    <TableContainer component={Paper} sx={{ mb: 3 }}>
                        <Table size="small">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                                    <TableCell><strong>Cookie Name</strong></TableCell>
                                    <TableCell><strong>Purpose</strong></TableCell>
                                    <TableCell><strong>Duration</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>_fbp</TableCell>
                                    <TableCell>Facebook pixel for ad targeting</TableCell>
                                    <TableCell>90 days</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>_gcl_au</TableCell>
                                    <TableCell>Google AdSense conversion tracking</TableCell>
                                    <TableCell>90 days</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>ad_user_id</TableCell>
                                    <TableCell>Personalized ad delivery</TableCell>
                                    <TableCell>180 days</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>retargeting_pixel</TableCell>
                                    <TableCell>Shows ads on other websites</TableCell>
                                    <TableCell>30 days</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 3. Third-Party Cookies */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
                        3. Third-Party Cookies
                    </Typography>

                    <Typography sx={{ mb: 2, color: "text.secondary", lineHeight: 1.7 }}>
                        We work with trusted third-party service providers who may also set cookies on your device:
                    </Typography>

                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
                            Analytics Providers
                        </Typography>
                        <List dense>
                            <ListItem>
                                <ListItemText 
                                    primary="Google Analytics"
                                    secondary="Website analytics and user behavior tracking"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Hotjar"
                                    secondary="Heatmaps and user session recordings"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Mixpanel"
                                    secondary="Product analytics and funnel tracking"
                                />
                            </ListItem>
                        </List>
                    </Box>

                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
                            Advertising Partners
                        </Typography>
                        <List dense>
                            <ListItem>
                                <ListItemText 
                                    primary="Google Ads"
                                    secondary="Display advertising and remarketing"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Facebook Pixel"
                                    secondary="Social media advertising and conversion tracking"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="TikTok Pixel"
                                    secondary="Video platform advertising"
                                />
                            </ListItem>
                        </List>
                    </Box>

                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
                            Payment & Security
                        </Typography>
                        <List dense>
                            <ListItem>
                                <ListItemText 
                                    primary="Stripe"
                                    secondary="Payment processing and fraud detection"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="M-Pesa"
                                    secondary="Mobile money transaction processing"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Cloudflare"
                                    secondary="DDoS protection and CDN services"
                                />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 4. How to Control Cookies */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
                        <SettingsIcon sx={{ color: "success.main" }} />
                        4. How to Control and Manage Cookies
                    </Typography>

                    <Typography variant="subtitle2" sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
                        A. Cookie Consent Banner
                    </Typography>
                    <Typography sx={{ mb: 2, color: "text.secondary", lineHeight: 1.7 }}>
                        When you first visit our platform applications, you'll see a cookie consent banner allowing you to:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="• Accept all cookies (recommended for full functionality)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Reject non-essential cookies (strictly necessary cookies still active)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Customize cookie preferences by category" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
                        B. Browser Settings
                    </Typography>
                    <Typography sx={{ mb: 2, color: "text.secondary", lineHeight: 1.7 }}>
                        Most browsers allow you to control cookies through settings:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText 
                                    primary="Google Chrome"
                                    secondary="Settings → Privacy and Security → Cookies and other site data"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Mozilla Firefox"
                                    secondary="Settings → Privacy & Security → Cookies and Site Data"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Safari"
                                    secondary="Preferences → Privacy → Manage Website Data"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Microsoft Edge"
                                    secondary="Settings → Privacy, search, and services → Cookies and site data"
                                />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
                        C. Mobile Device Controls
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText 
                                    primary="iOS (iPhone/iPad)"
                                    secondary="Settings → Privacy → Tracking → Toggle off 'Allow Apps to Request to Track'"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Android"
                                    secondary="Settings → Google → Ads → Opt out of Ads Personalization"
                                />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
                        D. Do Not Track (DNT)
                    </Typography>
                    <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                        We respect Do Not Track signals. When DNT is enabled in your browser, we will not set non-essential cookies or tracking technologies.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 5. Impact of Disabling Cookies */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
                        5. Impact of Disabling Cookies
                    </Typography>

                    <Typography sx={{ mb: 2, color: "text.secondary", lineHeight: 1.7 }}>
                        If you disable or reject cookies, some features may not work properly:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff3cd", p: 2, borderRadius: 1, border: "1px solid #ffc107" }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="✗ You may not be able to stay logged in" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Your shopping cart may not save items" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Preferences and settings may not be remembered" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Some pages may load slower or not function correctly" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Personalized recommendations may not be available" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✓ You can still browse and make purchases (with limitations)" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 6. Updates to This Policy */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
                        6. Changes to This Cookie Policy
                    </Typography>

                    <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                        We may update this Cookie Policy from time to time to reflect changes in our practices or for legal and regulatory reasons. We will notify you of significant changes by posting a notice on our platform or sending you an email. The "Last Updated" date at the top of this policy indicates when it was last revised.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 7. Contact Us */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
                        7. Questions About Cookies?
                    </Typography>

                    <Card sx={{ backgroundColor: "grey.50" }}>
                        <CardContent>
                            <Typography sx={{ mb: 2, fontWeight: "bold" }}>
                                For questions about our use of cookies:
                            </Typography>
                            <Typography sx={{ mb: 0.5 }}>Email: privacy@hulamarket.co.ke</Typography>
                            <Typography sx={{ mb: 0.5 }}>Subject: "Cookie Policy Inquiry"</Typography>
                            <Typography>Address: Continuum Technologies, 11011-00111 GPO Nairobi</Typography>
                        </CardContent>
                    </Card>
                </Box>

                {/* Footer */}
                <Box sx={{ mt: 4, pt: 3, borderTop: "1px solid", borderColor: "grey.300", textAlign: "center" }}>
                    <Typography variant="body2" sx={{ color: "text.disabled" }}>
                        © 2025 Continuum Technologies (Development Lab: Quantum Times Technologies). Pixel Point ERP Platform. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
