import { Box, Typography, Container, Divider, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Alert } from "@mui/material";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import LockIcon from "@mui/icons-material/Lock";
import GppGoodIcon from "@mui/icons-material/GppGood";
import InfoIcon from "@mui/icons-material/Info";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consumer Health Data Privacy - Hula Market | Health Data Protection",
  description: "Hula Market's comprehensive consumer health data privacy disclosure. We protect your health data with enterprise-grade security. CHPA compliant. Your health information is confidential.",
  keywords: "health data privacy, health information protection, CHPA, consumer health data, privacy protection",
  openGraph: {
    title: "Consumer Health Data Privacy - Hula Market",
    description: "Your health data is protected with enterprise-grade security",
    type: "website",
    url: "https://hulamarket.co.ke/consumer-health-data-privacy",
  },
};

export default function ConsumerHealthDataPrivacy() {
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
                        Consumer Health Data Privacy Disclosure
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#666", mb: 1 }}>
                        Protecting Your Sensitive Health Information
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#999" }}>
                        Effective Date: December 20, 2025
                    </Typography>
                </Box>

                {/* Warning Alert */}
                <Alert severity="warning" sx={{ mb: 4 }}>
                    <Typography sx={{ fontWeight: "bold" }}>Important Disclosure:</Typography>
                    This policy covers health-related data collected through Hula Market health and wellness products, services, and features. If you do not use health-related features, this disclosure may not fully apply to you.
                </Alert>

                {/* Welcome Card */}
                <Card sx={{ mb: 4, backgroundColor: "#e8f5e9", border: "1px solid #4caf50" }}>
                    <CardContent>
                        <Typography sx={{ color: "#2e7d32" }}>
                            Hula Market is committed to safeguarding your health and wellness data with the highest standards of privacy and security. Health information is sensitive and requires special legal protections. This disclosure explains how we handle consumer health data under applicable state and federal laws.
                        </Typography>
                    </CardContent>
                </Card>

                {/* 1. Scope of Health Data */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <HealthAndSafetyIcon sx={{ color: "#4caf50" }} />
                        1. What is Consumer Health Data?
                    </Typography>

                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        Consumer health data includes any information about your health, health conditions, treatments, medical devices, health insurance, or wellness activities collected through Hula Market services:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Information from health and wellness products you purchase (trackers, monitors, supplements)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Health categories or tags you select when browsing products" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Reviews and ratings for health products mentioning health conditions" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Fitness, nutrition, or wellness tracking data shared through integrated apps" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Prescription or medical device information provided for compatibility checking" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Health insurance information (if applicable for purchasing or discounts)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Pregnancy-related product purchases or searches" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Mental health, sexual health, or sensitive wellness categories" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        NOT Included in Health Data:
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        General product searches (e.g., "running shoes", "yoga mat") are not considered health data unless directly linked to medical conditions.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 2. How We Collect Health Data */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <InfoIcon sx={{ color: "#2196f3" }} />
                        2. How We Collect Consumer Health Data
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Direct Collection
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="You provide health information when purchasing health products" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="You select health categories or filters to personalize your shopping" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="You write reviews mentioning health conditions or treatments" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="You voluntarily disclose health information in product Q&A or messages" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Inferred Collection
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="We may infer health conditions based on product categories you browse" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Patterns in your purchase history may suggest health interests" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Search queries containing health terms are flagged as potential health data" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 3. Data Sharing Restrictions */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <LockIcon sx={{ color: "#f44336" }} />
                        3. Restrictions on Sharing Health Data
                    </Typography>

                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        Hula Market has strict limitations on sharing consumer health data:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="We DO NOT sell your health data to third parties" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="We DO NOT share health data with advertisers for targeted ads" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="We DO NOT use health data for discriminatory pricing or redlining" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="We DO NOT disclose health data to data brokers or aggregators" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Limited Sharing Allowed
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        We may share health data only in these limited circumstances:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Service Providers: Third parties who help us operate (cloud hosting, payment processing) under strict confidentiality agreements" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Legal Requirements: Law enforcement, court orders, or regulatory bodies as required by law" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Merged Entity: In case of acquisition, health data transfer will be disclosed with opt-out rights" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Your Explicit Consent: With your clear, written permission for specific purposes" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 4. Security Measures */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <GppGoodIcon sx={{ color: "#4caf50" }} />
                        4. How We Protect Your Health Data
                    </Typography>

                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        We implement industry-leading security measures to protect health data:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="AES-256 encryption for data at rest (stored)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="TLS 1.3 encryption for data in transit (transmitted)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Segregated databases: Health data stored separately from general account data" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Access controls: Only authorized employees can access health data" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Multi-factor authentication (MFA) required for all health data access" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Regular security audits and penetration testing" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Breach notification: We'll notify you within 24 hours of discovering unauthorized access" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Employee training: Staff undergo quarterly privacy and security training" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 5. Your Rights */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        5. Your Rights Regarding Health Data
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Right to Access
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        You have the right to request a copy of all health data we hold about you, including how it's been used and shared.
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Right to Deletion
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        You can request deletion of your health data at any time. We'll delete it within 30 days except where required by law to retain it for compliance or legal purposes.
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        C. Right to Opt-Out
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        You can opt-out of having health data used for marketing, personalization, or analytics. You'll still be able to purchase health products without health profiling.
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        D. Right to Know Sharing
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        You have the right to know if and with whom we've shared your health data. Request this information and we'll provide details within 30 days.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 6. Retention Period */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        6. How Long We Keep Health Data
                    </Typography>

                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Active Account: Health data retained while your account is active" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="After Deletion Request: Deleted within 30 days" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="After Account Termination: Deleted within 90 days unless legally required to retain" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Backup Systems: May retain copies in secure backups for up to 1 year for disaster recovery" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Aggregated Data: We may retain anonymized health data indefinitely for research" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 7. Health Data and Marketing */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        7. Health Data and Marketing Restrictions
                    </Typography>

                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        Under consumer health data protection laws, we have strict limitations on using health data for marketing:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="No Health-Based Targeting: We cannot target ads based on specific health conditions" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="No Health Profiling: Cannot create detailed health profiles for marketing purposes" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Generic Product Ads Only: If we advertise health products, they're based on product category, not condition" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Opt-In for Communications: Health product emails require explicit opt-in from you" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        Health-Related Emails
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        You can unsubscribe from all health product emails at any time. Click "Unsubscribe" at the bottom of health-related emails or contact privacy@hulamarket.co.ke.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 8. Children and Health Data */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        8. Special Protections for Minors
                    </Typography>

                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        Hula Market does not knowingly collect health data from children under 13. For children ages 13-17, we:
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Require verifiable parental consent before collecting health data" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Never sell or share health data of minors" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Apply heightened security protections" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Allow parents to request access or deletion of child's health data" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 9. California Consumer Health Data Law */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        9. California Consumer Health Privacy Act (CHPA)
                    </Typography>

                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        If you are a California resident, you have additional rights under the California Consumer Health Privacy Act (CHPA):
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="Right to Know: Request what health data we collect and how it's used" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Right to Delete: Request deletion of your health data" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Right to Correct: Request correction of inaccurate health data" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Right to Opt-Out: Opt-out of selling/sharing of health data (we don't do this anyway)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Right to Appeal: Appeal our decision on your health data request" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Contact California Attorney General: If you believe your rights are violated" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 10. Contact and Requests */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        10. Submit a Health Data Request
                    </Typography>

                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        To exercise your rights regarding health data:
                    </Typography>
                    <Card sx={{ backgroundColor: "#f9f9f9" }}>
                        <CardContent>
                            <Typography sx={{ mb: 2, fontWeight: "bold" }}>
                                Email us with the type of request:
                            </Typography>
                            <Typography sx={{ mb: 0.5 }}>
                                <strong>Email:</strong> privacy@hulamarket.co.ke
                            </Typography>
                            <Typography sx={{ mb: 0.5 }}>
                                <strong>Subject:</strong> Health Data Request [Access/Delete/Opt-Out/Correction]
                            </Typography>
                            <Typography sx={{ mb: 1 }}>
                                <strong>Include:</strong> Your full name, account email, and specific request details
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 2, fontStyle: "italic", color: "#666" }}>
                                We will verify your identity and respond within 30 days of receipt. All health data requests are confidential and do not affect your account access.
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
