import { Box, Typography, Container, Divider, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Grid2, Button, Chip } from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import PeopleIcon from "@mui/icons-material/People";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import EarthIcon from "@mui/icons-material/Public";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import InnovationIcon from "@mui/icons-material/Lightbulb";
import GroupsIcon from "@mui/icons-material/Groups";
import TargetIcon from "@mui/icons-material/GpsFixed";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Hula Market - Leading E-Commerce Platform in East Africa",
  description: "Learn about Hula Market, the trusted e-commerce platform serving East Africa. Discover our mission, vision, core values, and commitment to empowering entrepreneurs and consumers.",
  keywords: "about us, Hula Market, e-commerce platform, East Africa, mission, vision, company values",
  openGraph: {
    title: "About Hula Market - Connecting East Africa",
    description: "Discover the story behind Hula Market and our commitment to transforming online commerce",
    type: "website",
    url: "https://hulamarket.co.ke/about-hula",
  },
};

export default function AboutHula() {
    const sectionStyle = {
        mb: 6,
    };

    const headingStyle = {
        fontWeight: "700",
        mb: 3,
        color: "#232f3e",
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        fontSize: { xs: "1.8rem", sm: "2.2rem" },
    };

    const subsectionHeading = {
        fontWeight: "600",
        mb: 2,
        color: "#232f3e",
        fontSize: "1.1rem",
    };

    const coreValues = [
        {
            icon: <TargetIcon sx={{ color: "#fff", fontSize: "2.5rem" }} />,
            title: "Customer-Centric",
            description: "We prioritize your needs and satisfaction in every decision.",
            bgGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        },
        {
            icon: <VerifiedUserIcon sx={{ color: "#fff", fontSize: "2.5rem" }} />,
            title: "Trustworthiness",
            description: "We operate with transparency and integrity always.",
            bgGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        },
        {
            icon: <InnovationIcon sx={{ color: "#fff", fontSize: "2.5rem" }} />,
            title: "Innovation",
            description: "Continuous improvement for better experiences.",
            bgGradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        },
        {
            icon: <PeopleIcon sx={{ color: "#fff", fontSize: "2.5rem" }} />,
            title: "Community",
            description: "Building an ecosystem where everyone thrives.",
            bgGradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        },
    ];

    const milestones = [
        { year: "2024", event: "Hula Market launched as a modern e-commerce platform" },
        { year: "2024", event: "Expanded to 10,000+ sellers and 50,000+ active buyers" },
        { year: "2025", event: "Launched mobile app for iOS and Android" },
        { year: "2025", event: "Introduced seller analytics and business tools" },
        { year: "2025", event: "Expanded logistics network across East Africa" },
        { year: "2026", event: "Planned: International shipping and payments" },
    ];

    return (
        <Box sx={{ backgroundColor: "#fafbfc", minHeight: "100vh" }}>
            {/* Hero Section with Gradient Background */}
            <Box
                sx={{
                    background: "linear-gradient(135deg, #232f3e 0%, #37475a 100%)",
                    color: "white",
                    py: { xs: 6, sm: 8, md: 10 },
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: "-50%",
                        right: "-10%",
                        width: "500px",
                        height: "500px",
                        borderRadius: "50%",
                        background: "rgba(255, 255, 255, 0.1)",
                        filter: "blur(40px)",
                    },
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: "-30%",
                        left: "-10%",
                        width: "400px",
                        height: "400px",
                        borderRadius: "50%",
                        background: "rgba(255, 255, 255, 0.05)",
                        filter: "blur(40px)",
                    },
                }}
            >
                <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                    <Box sx={{ textAlign: "center", mb: 2 }}>
                        <Chip
                            label="About Us"
                            sx={{
                                backgroundColor: "rgba(255, 255, 255, 0.2)",
                                color: "white",
                                fontWeight: "600",
                                mb: 2,
                            }}
                        />
                    </Box>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                            fontWeight: "900",
                            mb: 2,
                            letterSpacing: "-1px",
                            textAlign: "center",
                        }}
                    >
                        Welcome to Hula Market
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: { xs: "1.1rem", sm: "1.3rem" },
                            fontWeight: "300",
                            letterSpacing: "0.5px",
                            maxWidth: "800px",
                            mx: "auto",
                            opacity: 0.95,
                            textAlign: "center",
                        }}
                    >
                        Connecting East Africa Through Trust, Quality, and Innovation
                    </Typography>
                </Container>
            </Box>

            {/* Mission & Vision Cards */}
            <Container maxWidth="lg" sx={{ py: 6, mb: 4 }}>
                <Grid2 container spacing={3}>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Card
                            sx={{
                                height: "100%",
                                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                color: "white",
                                border: "none",
                                boxShadow: "0 10px 40px rgba(102, 126, 234, 0.3)",
                                "&:hover": {
                                    transform: "translateY(-8px)",
                                    boxShadow: "0 15px 50px rgba(102, 126, 234, 0.4)",
                                },
                                transition: "all 0.3s ease",
                            }}
                        >
                            <CardContent sx={{ p: 4 }}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                                    <RocketLaunchIcon sx={{ fontSize: "2rem" }} />
                                    <Typography variant="h5" sx={{ fontWeight: "700" }}>
                                        Our Mission
                                    </Typography>
                                </Box>
                                <Typography sx={{ lineHeight: 1.8, fontSize: "1rem" }}>
                                    To empower East African entrepreneurs and consumers by building a trusted, secure, and innovative e-commerce ecosystem that enables seamless buying and selling of quality products across borders.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Card
                            sx={{
                                height: "100%",
                                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                                color: "white",
                                border: "none",
                                boxShadow: "0 10px 40px rgba(245, 87, 108, 0.3)",
                                "&:hover": {
                                    transform: "translateY(-8px)",
                                    boxShadow: "0 15px 50px rgba(245, 87, 108, 0.4)",
                                },
                                transition: "all 0.3s ease",
                            }}
                        >
                            <CardContent sx={{ p: 4 }}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                                    <TargetIcon sx={{ fontSize: "2rem" }} />
                                    <Typography variant="h5" sx={{ fontWeight: "700" }}>
                                        Our Vision
                                    </Typography>
                                </Box>
                                <Typography sx={{ lineHeight: 1.8, fontSize: "1rem" }}>
                                    To become the leading digital marketplace in East Africa, recognized for our commitment to excellence, security, and sustainable growth that transforms how people do business online.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid2>
                </Grid2>
            </Container>

            {/* Who We Are Section */}
            <Container maxWidth="lg" sx={{ py: 6, mb: 4 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h4" sx={headingStyle}>
                        <StoreIcon sx={{ fontSize: "2.5rem", color: "#232f3e" }} />
                        Who We Are
                    </Typography>
                </Box>

                <Grid2 container spacing={3} sx={{ mb: 4 }}>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
                            Hula Market is a next-generation e-commerce platform operated by Continuum Technologies, headquartered in Nairobi, Kenya. We're a team of experienced entrepreneurs, technologists, and business professionals dedicated to revolutionizing online commerce across East Africa.
                        </Typography>
                        <Typography sx={{ color: "#555", lineHeight: 1.8, fontSize: "1rem" }}>
                            Built by locals, for locals, with a vision to create economic opportunities for thousands of SMEs and millions of consumers who deserve better.
                        </Typography>
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Card sx={{ backgroundColor: "#fff", border: "1px solid #e8e8e8", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
                            <CardContent sx={{ p: 3 }}>
                                <Grid2 container spacing={2}>
                                    <Grid2 size={{ xs: 6 }}>
                                        <Box sx={{ mb: 2 }}>
                                            <Typography sx={{ fontWeight: "700", color: "#2196f3", fontSize: "1.8rem", mb: 0.5 }}>
                                                100+
                                            </Typography>
                                            <Typography sx={{ color: "#666", fontSize: "0.9rem" }}>Team Members</Typography>
                                        </Box>
                                    </Grid2>
                                    <Grid2 size={{ xs: 6 }}>
                                        <Box sx={{ mb: 2 }}>
                                            <Typography sx={{ fontWeight: "700", color: "#4caf50", fontSize: "1.8rem", mb: 0.5 }}>
                                                4
                                            </Typography>
                                            <Typography sx={{ color: "#666", fontSize: "0.9rem" }}>Countries</Typography>
                                        </Box>
                                    </Grid2>
                                    <Grid2 size={{ xs: 6 }}>
                                        <Box sx={{ mb: 2 }}>
                                            <Typography sx={{ fontWeight: "700", color: "#ff9800", fontSize: "1.8rem", mb: 0.5 }}>
                                                2024
                                            </Typography>
                                            <Typography sx={{ color: "#666", fontSize: "0.9rem" }}>Founded</Typography>
                                        </Box>
                                    </Grid2>
                                    <Grid2 size={{ xs: 6 }}>
                                        <Box>
                                            <Typography sx={{ fontWeight: "700", color: "#9c27b0", fontSize: "1.8rem", mb: 0.5 }}>
                                                50K+
                                            </Typography>
                                            <Typography sx={{ color: "#666", fontSize: "0.9rem" }}>Active Buyers</Typography>
                                        </Box>
                                    </Grid2>
                                </Grid2>
                            </CardContent>
                        </Card>
                    </Grid2>
                </Grid2>
            </Container>

            {/* Core Values Section */}
            <Box sx={{ backgroundColor: "#fff", py: 6, mb: 4 }}>
                <Container maxWidth="lg">
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h4" sx={headingStyle}>
                            <GroupsIcon sx={{ fontSize: "2.5rem", color: "#232f3e" }} />
                            Our Core Values
                        </Typography>
                    </Box>

                    <Grid2 container spacing={3}>
                        {coreValues.map((value, index) => (
                            <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        border: "none",
                                        background: value.bgGradient,
                                        color: "white",
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                                        "&:hover": {
                                            transform: "translateY(-10px)",
                                            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                                        },
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    <CardContent sx={{ p: 3, textAlign: "center" }}>
                                        <Box sx={{ mb: 2, display: "flex", justifyContent: "center" }}>
                                            {value.icon}
                                        </Box>
                                        <Typography variant="h6" sx={{ fontWeight: "700", mb: 1 }}>
                                            {value.title}
                                        </Typography>
                                        <Typography sx={{ fontSize: "0.9rem", lineHeight: 1.6, opacity: 0.95 }}>
                                            {value.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid2>
                        ))}
                    </Grid2>
                </Container>
            </Box>

            {/* What We Offer Section */}
            <Container maxWidth="lg" sx={{ py: 6, mb: 4 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h4" sx={headingStyle}>
                        <TrendingUpIcon sx={{ fontSize: "2.5rem", color: "#232f3e" }} />
                        What We Offer
                    </Typography>
                </Box>

                <Grid2 container spacing={3}>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Card sx={{ border: "2px solid #4caf50", backgroundColor: "#f1f8f5", height: "100%" }}>
                            <CardContent sx={{ p: 3 }}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                                    <StoreIcon sx={{ color: "#4caf50", fontSize: "1.8rem" }} />
                                    <Typography variant="h6" sx={{ fontWeight: "700" }}>For Buyers</Typography>
                                </Box>
                                <List dense>
                                    <ListItem sx={{ py: 0.8 }}>
                                        <ListItemIcon sx={{ minWidth: "32px" }}>
                                            <ArrowRightIcon sx={{ color: "#4caf50", fontSize: "1.2rem" }} />
                                        </ListItemIcon>
                                        <ListItemText primary="100,000+ products across 50+ categories" sx={{ m: 0 }} />
                                    </ListItem>
                                    <ListItem sx={{ py: 0.8 }}>
                                        <ListItemIcon sx={{ minWidth: "32px" }}>
                                            <ArrowRightIcon sx={{ color: "#4caf50", fontSize: "1.2rem" }} />
                                        </ListItemIcon>
                                        <ListItemText primary="Competitive pricing with seller competition" sx={{ m: 0 }} />
                                    </ListItem>
                                    <ListItem sx={{ py: 0.8 }}>
                                        <ListItemIcon sx={{ minWidth: "32px" }}>
                                            <ArrowRightIcon sx={{ color: "#4caf50", fontSize: "1.2rem" }} />
                                        </ListItemIcon>
                                        <ListItemText primary="Fast delivery options" sx={{ m: 0 }} />
                                    </ListItem>
                                    <ListItem sx={{ py: 0.8 }}>
                                        <ListItemIcon sx={{ minWidth: "32px" }}>
                                            <ArrowRightIcon sx={{ color: "#4caf50", fontSize: "1.2rem" }} />
                                        </ListItemIcon>
                                        <ListItemText primary="Buyer protection & secure checkout" sx={{ m: 0 }} />
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Card sx={{ border: "2px solid #2196f3", backgroundColor: "#f0f7ff", height: "100%" }}>
                            <CardContent sx={{ p: 3 }}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                                    <LocalShippingIcon sx={{ color: "#2196f3", fontSize: "1.8rem" }} />
                                    <Typography variant="h6" sx={{ fontWeight: "700" }}>For Sellers</Typography>
                                </Box>
                                <List dense>
                                    <ListItem sx={{ py: 0.8 }}>
                                        <ListItemIcon sx={{ minWidth: "32px" }}>
                                            <ArrowRightIcon sx={{ color: "#2196f3", fontSize: "1.2rem" }} />
                                        </ListItemIcon>
                                        <ListItemText primary="Low commission rates (2-8%)" sx={{ m: 0 }} />
                                    </ListItem>
                                    <ListItem sx={{ py: 0.8 }}>
                                        <ListItemIcon sx={{ minWidth: "32px" }}>
                                            <ArrowRightIcon sx={{ color: "#2196f3", fontSize: "1.2rem" }} />
                                        </ListItemIcon>
                                        <ListItemText primary="Easy onboarding process" sx={{ m: 0 }} />
                                    </ListItem>
                                    <ListItem sx={{ py: 0.8 }}>
                                        <ListItemIcon sx={{ minWidth: "32px" }}>
                                            <ArrowRightIcon sx={{ color: "#2196f3", fontSize: "1.2rem" }} />
                                        </ListItemIcon>
                                        <ListItemText primary="Analytics & business tools" sx={{ m: 0 }} />
                                    </ListItem>
                                    <ListItem sx={{ py: 0.8 }}>
                                        <ListItemIcon sx={{ minWidth: "32px" }}>
                                            <ArrowRightIcon sx={{ color: "#2196f3", fontSize: "1.2rem" }} />
                                        </ListItemIcon>
                                        <ListItemText primary="Growth support & seller success" sx={{ m: 0 }} />
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid2>
                </Grid2>
            </Container>

            {/* Our Journey - Timeline */}
            <Box sx={{ backgroundColor: "#fff", py: 6, mb: 4 }}>
                <Container maxWidth="lg">
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h4" sx={headingStyle}>
                            <TrendingUpIcon sx={{ fontSize: "2.5rem", color: "#232f3e" }} />
                            Our Journey
                        </Typography>
                    </Box>

                    <Box sx={{ position: "relative", pl: { xs: 2, sm: 4 } }}>
                        <Box
                            sx={{
                                position: "absolute",
                                left: { xs: "7px", sm: "15px" },
                                top: 0,
                                bottom: 0,
                                width: "2px",
                                backgroundColor: "#2196f3",
                            }}
                        />

                        {[
                            { year: "2024", event: "Hula Market launches as East Africa's modern marketplace" },
                            { year: "2024", event: "10,000+ sellers & 50,000+ active buyers join" },
                            { year: "2025", event: "Mobile app launched for iOS & Android" },
                            { year: "2025", event: "Seller analytics & business tools released" },
                            { year: "2025", event: "Logistics network expanded across region" },
                            { year: "2026", event: "International shipping & payments planned" },
                        ].map((milestone, index) => (
                            <Box key={index} sx={{ mb: 3, pl: 2 }}>
                                <Box
                                    sx={{
                                        position: "absolute",
                                        left: 0,
                                        width: "18px",
                                        height: "18px",
                                        backgroundColor: "#2196f3",
                                        borderRadius: "50%",
                                        border: "3px solid #fff",
                                        boxShadow: "0 0 0 2px #2196f3",
                                        mt: 0.2,
                                    }}
                                />
                                <Typography sx={{ fontWeight: "700", color: "#2196f3", fontSize: "0.9rem" }}>
                                    {milestone.year}
                                </Typography>
                                <Typography sx={{ color: "#555", mt: 0.5 }}>
                                    {milestone.event}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* Commitments Section */}
            <Container maxWidth="lg" sx={{ py: 6, mb: 4 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h4" sx={headingStyle}>
                        <SafetyCheckIcon sx={{ fontSize: "2.5rem", color: "#232f3e" }} />
                        Our Commitments
                    </Typography>
                </Box>

                <Grid2 container spacing={3}>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Card sx={{ backgroundColor: "#fff", border: "1px solid #e8e8e8", height: "100%", "&:hover": { boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }, transition: "all 0.3s ease" }}>
                            <CardContent sx={{ p: 3 }}>
                                <Box sx={{ backgroundColor: "#e3f2fd", p: 1.5, borderRadius: 1, mb: 2, display: "inline-block" }}>
                                    <VerifiedUserIcon sx={{ color: "#2196f3", fontSize: "1.5rem" }} />
                                </Box>
                                <Typography variant="h6" sx={{ fontWeight: "700", mb: 2 }}>To Our Customers</Typography>
                                <List dense>
                                    <ListItem sx={{ py: 0.4 }}>
                                        <ListItemIcon sx={{ minWidth: "24px" }}><ArrowRightIcon sx={{ fontSize: "1rem", color: "#2196f3" }} /></ListItemIcon>
                                        <ListItemText primary="Transparency & honesty" primaryTypographyProps={{ sx: { fontSize: "0.85rem" } }} />
                                    </ListItem>
                                    <ListItem sx={{ py: 0.4 }}>
                                        <ListItemIcon sx={{ minWidth: "24px" }}><ArrowRightIcon sx={{ fontSize: "1rem", color: "#2196f3" }} /></ListItemIcon>
                                        <ListItemText primary="Security & fraud protection" primaryTypographyProps={{ sx: { fontSize: "0.85rem" } }} />
                                    </ListItem>
                                    <ListItem sx={{ py: 0.4 }}>
                                        <ListItemIcon sx={{ minWidth: "24px" }}><ArrowRightIcon sx={{ fontSize: "1rem", color: "#2196f3" }} /></ListItemIcon>
                                        <ListItemText primary="24/7 customer support" primaryTypographyProps={{ sx: { fontSize: "0.85rem" } }} />
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Card sx={{ backgroundColor: "#fff", border: "1px solid #e8e8e8", height: "100%", "&:hover": { boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }, transition: "all 0.3s ease" }}>
                            <CardContent sx={{ p: 3 }}>
                                <Box sx={{ backgroundColor: "#f0f4c3", p: 1.5, borderRadius: 1, mb: 2, display: "inline-block" }}>
                                    <GroupsIcon sx={{ color: "#9c27b0", fontSize: "1.5rem" }} />
                                </Box>
                                <Typography variant="h6" sx={{ fontWeight: "700", mb: 2 }}>To Our Community</Typography>
                                <List dense>
                                    <ListItem sx={{ py: 0.4 }}>
                                        <ListItemIcon sx={{ minWidth: "24px" }}><ArrowRightIcon sx={{ fontSize: "1rem", color: "#9c27b0" }} /></ListItemIcon>
                                        <ListItemText primary="Economic empowerment" primaryTypographyProps={{ sx: { fontSize: "0.85rem" } }} />
                                    </ListItem>
                                    <ListItem sx={{ py: 0.4 }}>
                                        <ListItemIcon sx={{ minWidth: "24px" }}><ArrowRightIcon sx={{ fontSize: "1rem", color: "#9c27b0" }} /></ListItemIcon>
                                        <ListItemText primary="Fair trade practices" primaryTypographyProps={{ sx: { fontSize: "0.85rem" } }} />
                                    </ListItem>
                                    <ListItem sx={{ py: 0.4 }}>
                                        <ListItemIcon sx={{ minWidth: "24px" }}><ArrowRightIcon sx={{ fontSize: "1rem", color: "#9c27b0" }} /></ListItemIcon>
                                        <ListItemText primary="Social responsibility" primaryTypographyProps={{ sx: { fontSize: "0.85rem" } }} />
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Card sx={{ backgroundColor: "#fff", border: "1px solid #e8e8e8", height: "100%", "&:hover": { boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }, transition: "all 0.3s ease" }}>
                            <CardContent sx={{ p: 3 }}>
                                <Box sx={{ backgroundColor: "#e0f2f1", p: 1.5, borderRadius: 1, mb: 2, display: "inline-block" }}>
                                    <InnovationIcon sx={{ color: "#4caf50", fontSize: "1.5rem" }} />
                                </Box>
                                <Typography variant="h6" sx={{ fontWeight: "700", mb: 2 }}>To Innovation</Typography>
                                <List dense>
                                    <ListItem sx={{ py: 0.4 }}>
                                        <ListItemIcon sx={{ minWidth: "24px" }}><ArrowRightIcon sx={{ fontSize: "1rem", color: "#4caf50" }} /></ListItemIcon>
                                        <ListItemText primary="AI & mobile-first tech" primaryTypographyProps={{ sx: { fontSize: "0.85rem" } }} />
                                    </ListItem>
                                    <ListItem sx={{ py: 0.4 }}>
                                        <ListItemIcon sx={{ minWidth: "24px" }}><ArrowRightIcon sx={{ fontSize: "1rem", color: "#4caf50" }} /></ListItemIcon>
                                        <ListItemText primary="Strategic partnerships" primaryTypographyProps={{ sx: { fontSize: "0.85rem" } }} />
                                    </ListItem>
                                    <ListItem sx={{ py: 0.4 }}>
                                        <ListItemIcon sx={{ minWidth: "24px" }}><ArrowRightIcon sx={{ fontSize: "1rem", color: "#4caf50" }} /></ListItemIcon>
                                        <ListItemText primary="User-driven improvement" primaryTypographyProps={{ sx: { fontSize: "0.85rem" } }} />
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid2>
                </Grid2>
            </Container>

            {/* Contact Section */}
            <Box sx={{ background: "linear-gradient(135deg, #232f3e 0%, #37475a 100%)", color: "white", py: 6, mb: 4 }}>
                <Container maxWidth="lg">
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h4" sx={{ fontWeight: "700", mb: 1, color: "white" }}>
                            Get in Touch
                        </Typography>
                        <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                            Have questions? We'd love to hear from you
                        </Typography>
                    </Box>

                    <Grid2 container spacing={3}>
                        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                            <Card sx={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "white" }}>
                                <CardContent>
                                    <Typography sx={{ fontWeight: "700", mb: 1 }}>General Inquiries</Typography>
                                    <Typography sx={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.9)" }}>hello@hulamarket.co.ke</Typography>
                                </CardContent>
                            </Card>
                        </Grid2>

                        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                            <Card sx={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "white" }}>
                                <CardContent>
                                    <Typography sx={{ fontWeight: "700", mb: 1 }}>Customer Support</Typography>
                                    <Typography sx={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.9)" }}>support@hulamarket.co.ke</Typography>
                                </CardContent>
                            </Card>
                        </Grid2>

                        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                            <Card sx={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "white" }}>
                                <CardContent>
                                    <Typography sx={{ fontWeight: "700", mb: 1 }}>Seller Support</Typography>
                                    <Typography sx={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.9)" }}>sellers@hulamarket.co.ke</Typography>
                                </CardContent>
                            </Card>
                        </Grid2>

                        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                            <Card sx={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "white" }}>
                                <CardContent>
                                    <Typography sx={{ fontWeight: "700", mb: 1 }}>Phone</Typography>
                                    <Typography sx={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.9)" }}>+254 700-HULA-01</Typography>
                                </CardContent>
                            </Card>
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>

            {/* Footer */}
            <Container maxWidth="lg" sx={{ py: 4, textAlign: "center" }}>
                <Typography variant="body2" sx={{ color: "#999", mb: 1 }}>
                    © 2025 Hula Market (Continuum Technologies). All rights reserved.
                </Typography>
                <Typography variant="body2" sx={{ color: "#bbb" }}>
                    Built with passion in East Africa 🚀
                </Typography>
            </Container>
        </Box>
    );
}
