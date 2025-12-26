import { Box, Typography, Container, Divider, Card, CardContent, List, ListItem, ListItemText } from "@mui/material";
import GavelIcon from "@mui/icons-material/Gavel";
import BlockIcon from "@mui/icons-material/Block";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import ShieldIcon from "@mui/icons-material/Shield";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Acceptable Use Policy - Pixel Point ERP Platform | Platform Rules & Guidelines",
    description: "Acceptable Use Policy for the Pixel Point ERP Platform. Learn about prohibited activities, content standards, and consequences for violations.",
    keywords: "acceptable use, platform rules, prohibited activities, content policy, terms of use",
    openGraph: {
        title: "Acceptable Use Policy - Pixel Point ERP Platform",
        description: "Platform rules, prohibited activities, and acceptable behavior guidelines",
        type: "website",
        url: "https://hulamarket.co.ke/legal/acceptable-use",
    },
};

export default function AcceptableUsePolicy() {
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
                        Acceptable Use Policy
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
                        <Typography sx={{ color: "#1565c0" }}>
                            This Acceptable Use Policy ("AUP") governs your use of all Pixel Point ERP Platform applications. By accessing or using our platform, you agree to comply with this policy. Violations may result in account suspension, termination, legal action, and reporting to law enforcement authorities.
                        </Typography>
                    </CardContent>
                </Card>

                {/* 1. Prohibited Activities */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <BlockIcon sx={{ color: "#f44336" }} />
                        1. Prohibited Activities
                    </Typography>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        A. Illegal Activities
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        You must not use our platform for any unlawful purpose or in violation of applicable laws:
                    </Typography>
                    <Box sx={{ backgroundColor: "#ffebee", p: 2, borderRadius: 1, mb: 3, border: "1px solid #f44336" }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="✗ Selling counterfeit, stolen, or prohibited goods" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Money laundering or terrorist financing" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Fraud, identity theft, or phishing" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Tax evasion or customs violations" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Violating intellectual property rights" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Trading illegal drugs, weapons, or controlled substances" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Child exploitation or abuse" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Human trafficking or forced labor" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        B. Fraudulent or Deceptive Practices
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="✗ Creating fake accounts or using false identities" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Manipulating reviews, ratings, or rankings" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Posting misleading product descriptions or prices" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Bait-and-switch tactics" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Falsely claiming items are in stock" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Providing fake tracking information" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Misrepresenting business identity or credentials" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        C. Platform Abuse & Manipulation
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="✗ Attempting to hack, breach security, or gain unauthorized access" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Scraping or data mining platform content" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Using bots, scripts, or automated tools (except authorized APIs)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Reverse engineering platform software" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ DDoS attacks or overloading system resources" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Creating multiple accounts to evade restrictions" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Circumventing payment or commission fees" />
                            </ListItem>
                        </List>
                    </Box>

                    <Typography variant="subtitle2" sx={subsectionHeading}>
                        D. Harmful Content
                    </Typography>
                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="✗ Uploading malware, viruses, or malicious code" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Spam, unsolicited messages, or chain letters" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Hate speech, harassment, or threats" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Pornographic or sexually explicit content" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Graphic violence or gore" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Content promoting self-harm or suicide" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 2. Seller-Specific Rules */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <GavelIcon sx={{ color: "#ff9800" }} />
                        2. Seller-Specific Prohibited Conduct
                    </Typography>

                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <Typography variant="subtitle2" sx={subsectionHeading}>
                            Product Listing Violations
                        </Typography>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="✗ Listing banned or restricted items (weapons, drugs, tobacco in prohibited regions)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Using copyrighted images without permission" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Hiding defects or misrepresenting condition" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Keyword stuffing or misleading tags" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Duplicate listings for the same product" />
                            </ListItem>
                        </List>
                    </Box>

                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <Typography variant="subtitle2" sx={subsectionHeading}>
                            Transaction Violations
                        </Typography>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="✗ Shipping counterfeit or different items than listed" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Refusing legitimate refunds or returns" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Charging hidden fees not disclosed upfront" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Accepting payment outside the platform" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Failing to ship within stated timeframes" />
                            </ListItem>
                        </List>
                    </Box>

                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <Typography variant="subtitle2" sx={subsectionHeading}>
                            Review & Rating Manipulation
                        </Typography>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="✗ Offering incentives for positive reviews" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Deleting or hiding negative feedback" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Posting fake reviews using multiple accounts" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Paying for review services" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 3. Buyer-Specific Rules */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        3. Buyer-Specific Prohibited Conduct
                    </Typography>

                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="✗ Making purchases with stolen payment methods" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Filing fraudulent chargebacks or payment disputes" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Abusing return policies (wardrobing, bracketing)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Harassing sellers with unreasonable demands" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Leaving false negative reviews" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="✗ Reselling purchased items in violation of seller terms" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 4. Content Standards */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <ShieldIcon sx={{ color: "#4caf50" }} />
                        4. Content & Communication Standards
                    </Typography>

                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        All user-generated content (product listings, reviews, messages, profiles) must:
                    </Typography>

                    <Box sx={{ backgroundColor: "#e8f5e9", p: 2, borderRadius: 1, border: "1px solid #4caf50", mb: 2 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1, color: "#2e7d32" }}>
                            ✓ Required Standards
                        </Typography>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="• Be accurate and truthful" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Comply with applicable laws and regulations" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Respect intellectual property rights" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Be respectful and professional" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Protect privacy (no posting personal info of others)" />
                            </ListItem>
                        </List>
                    </Box>

                    <Box sx={{ backgroundColor: "#ffebee", p: 2, borderRadius: 1, border: "1px solid #f44336" }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1, color: "#c62828" }}>
                            ✗ Prohibited Content
                        </Typography>
                        <List dense>
                            <ListItem>
                                <ListItemText primary="• Obscenity, profanity, or vulgarity" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Discrimination based on race, religion, gender, disability, etc." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Political or religious propaganda" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Misleading claims or false advertising" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="• Contact information to circumvent platform" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 5. Consequences */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        <ReportProblemIcon sx={{ color: "#ff5722" }} />
                        5. Consequences of Violations
                    </Typography>

                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        Violations of this Acceptable Use Policy may result in one or more of the following actions:
                    </Typography>

                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
                            1. Content Removal
                        </Typography>
                        <Typography sx={{ color: "#555", mb: 2, fontSize: "0.9rem" }}>
                            Immediate removal of violating listings, reviews, or posts without notice.
                        </Typography>

                        <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
                            2. Account Warning
                        </Typography>
                        <Typography sx={{ color: "#555", mb: 2, fontSize: "0.9rem" }}>
                            Formal warning for minor or first-time violations. Warnings remain on your account record.
                        </Typography>

                        <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
                            3. Temporary Suspension
                        </Typography>
                        <Typography sx={{ color: "#555", mb: 2, fontSize: "0.9rem" }}>
                            Account suspension for 7-90 days for repeated or serious violations. No access to platform during suspension.
                        </Typography>

                        <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
                            4. Permanent Ban
                        </Typography>
                        <Typography sx={{ color: "#555", mb: 2, fontSize: "0.9rem" }}>
                            Permanent account termination for severe or repeated violations. All associated accounts and devices may be blocked.
                        </Typography>

                        <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
                            5. Financial Penalties
                        </Typography>
                        <Typography sx={{ color: "#555", mb: 2, fontSize: "0.9rem" }}>
                            Withholding payouts, charging penalty fees, or pursuing debt collection for damages caused.
                        </Typography>

                        <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
                            6. Legal Action
                        </Typography>
                        <Typography sx={{ color: "#555", mb: 2, fontSize: "0.9rem" }}>
                            Civil lawsuits for fraud, damages, or breach of contract. Criminal prosecution for illegal activities.
                        </Typography>

                        <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
                            7. Law Enforcement Reporting
                        </Typography>
                        <Typography sx={{ color: "#555", fontSize: "0.9rem" }}>
                            Reporting criminal activity to police, tax authorities, or regulatory agencies with full cooperation.
                        </Typography>
                    </Box>

                    <Card sx={{ backgroundColor: "#fff3e0", border: "1px solid #ff9800" }}>
                        <CardContent>
                            <Typography sx={{ fontWeight: "bold", mb: 1, color: "#e65100" }}>
                                ⚠️ Important Notice
                            </Typography>
                            <Typography sx={{ color: "#e65100", fontSize: "0.9rem" }}>
                                Continuum Technologies reserves the right to take immediate action without prior notice for any conduct that threatens platform security, user safety, or legal compliance. Enforcement decisions are final and may not be appealable.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 6. Reporting Violations */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        6. Reporting Policy Violations
                    </Typography>

                    <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.7 }}>
                        If you encounter content or behavior that violates this policy, please report it immediately:
                    </Typography>

                    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
                            How to Report
                        </Typography>
                        <List dense>
                            <ListItem>
                                <ListItemText 
                                    primary="Email: abuse@hulamarket.co.ke"
                                    secondary="For general policy violations"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Email: legal@hulamarket.co.ke"
                                    secondary="For legal issues, copyright, or trademark violations"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="In-App: Use 'Report' button"
                                    secondary="Available on product listings, reviews, and user profiles"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText 
                                    primary="Phone: +254-XXX-XXXXXX"
                                    secondary="For urgent safety concerns"
                                />
                            </ListItem>
                        </List>
                    </Box>

                    <Card sx={{ backgroundColor: "#e3f2fd", border: "1px solid #2196f3" }}>
                        <CardContent>
                            <Typography sx={{ fontWeight: "bold", mb: 1, color: "#1565c0" }}>
                                What to Include in Your Report
                            </Typography>
                            <List dense>
                                <ListItem>
                                    <ListItemText primary="• URL or link to violating content" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="• Screenshots or evidence (if applicable)" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="• Description of the violation" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="• Your contact information (optional but helpful)" />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 7. Policy Updates */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        7. Changes to This Policy
                    </Typography>

                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                        We may update this Acceptable Use Policy at any time. We will notify you of significant changes by posting a notice on our platform or sending you an email. Continued use of the platform after changes constitutes acceptance of the updated policy.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* 8. Contact */}
                <Box sx={sectionStyle}>
                    <Typography variant="h5" sx={headingStyle}>
                        8. Contact Information
                    </Typography>

                    <Card sx={{ backgroundColor: "#f9f9f9" }}>
                        <CardContent>
                            <Typography sx={{ mb: 2, fontWeight: "bold" }}>
                                For questions about this policy:
                            </Typography>
                            <Typography sx={{ mb: 0.5 }}>Email: legal@hulamarket.co.ke</Typography>
                            <Typography sx={{ mb: 0.5 }}>Subject: "Acceptable Use Policy Inquiry"</Typography>
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
