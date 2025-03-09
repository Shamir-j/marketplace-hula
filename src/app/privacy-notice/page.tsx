import { Box, Typography } from "@mui/material";

export default function PrivacyPolicy() {
    return (
        <Box
            sx={{
                padding: { xs: "16px", sm: "20px", md: "24px" },
                maxWidth: { xs: "100%", sm: "800px" },
                margin: "0 auto",
            }}
        >
            <Typography
                variant="h4"
                gutterBottom
                sx={{
                    fontSize: { xs: "1.5rem", sm: "2rem" },
                }}
            >
                Privacy Policy
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                1. Introduction
            </Typography>
            <Typography component="p" sx={{ mb: 2, fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                This Privacy Policy governs how Pixel Point, a product of Hula Holdings, collects, uses, stores, and protects your personal and business data (&#34;Data&#34;) when you use our Inventory Management System and related services (collectively, the &#34;Service&#34;). We are committed to safeguarding your privacy and complying with applicable data protection laws. By using the Service, you consent to the practices described herein.
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                2. Information We Collect
            </Typography>
            <Box component="ul" sx={{ pl: { xs: 2, sm: 4 }, mb: 1, fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                <li><strong>Personal Information:</strong> Name, email address, phone number (if provided), and account login details. Business-related details (e.g., company name, address, tax ID) if applicable.</li>
                <li><strong>Transaction Data:</strong> Sales records, inventory levels, product details, and payment history generated through your use of the Service.</li>
                <li><strong>Usage Data:</strong> Technical information such as IP address, device type, operating system, and app usage patterns (e.g., features accessed, time spent). Analytics data to understand how you interact with the Service.</li>
                <li><strong>Optional Data:</strong> Product images or other files you upload to the Service.</li>
            </Box>

            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                3. How We Use Your Data
            </Typography>
            <Box component="ul" sx={{ pl: { xs: 2, sm: 4 }, mb: 1, fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                <li>Provide core functionality, such as inventory tracking, transaction processing, and account management.</li>
                <li>Improve the Service through analytics, troubleshooting, and feature development.</li>
                <li>Process payments and issue invoices for paid subscriptions or features.</li>
                <li>Enhance security by detecting and preventing fraud, abuse, or unauthorized access.</li>
                <li>Communicate with you, including sending service updates, support responses, and, if opted in, promotional materials.</li>
                <li>Comply with legal obligations (e.g., tax reporting, audits).</li>
            </Box>

            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                4. Data Sharing
            </Typography>
            <Typography component="p" sx={{ mb: 2, fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                We do not sell, rent, or trade your personal data. However, we may share it with:
            </Typography>
            <Box component="ul" sx={{ pl: { xs: 2, sm: 4 }, mb: 1, fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                <li><strong>Service Providers:</strong> Third-party partners such as payment processors (e.g., Stripe, PayPal), cloud hosting services, and analytics providers (e.g., Google Analytics) to facilitate the Service. These providers are bound by confidentiality agreements.</li>
                <li><strong>Legal Authorities:</strong> Government agencies or law enforcement if required by law, subpoena, or to protect our rights, users, or the public.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred to the acquiring entity, with notice provided where feasible.</li>
            </Box>

            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                5. Data Storage and Security
            </Typography>

            <Box component="ul" sx={{ pl: { xs: 2, sm: 4 }, mb: 1, fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                <li><strong>Storage:</strong> Data is stored on secure, self-hosted cloud servers managed by Hula Holdings, as well as with trusted third-party providers where necessary (e.g., payment processors). Product images are stored in our self-hosted cloud storage.</li>
                <li><strong>Security Measures:</strong> We use industry-standard encryption (e.g., SSL/TLS), access controls, and regular security audits to protect your data. However, no system is completely immune to breaches, and we cannot guarantee absolute security.</li>
                <li><strong>Retention:</strong>  We retain your data only as long as necessary to provide the Service, fulfill legal obligations, or resolve disputes, after which it is securely deleted or anonymized</li>
            </Box>

            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                6. User Rights
            </Typography>
            <Box component="ul" sx={{ pl: { xs: 2, sm: 4 }, mb: 1, fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                <li><strong>Access:</strong> Request a copy of the data we hold about you.</li>
                <li><strong>Correction:</strong> Update or correct inaccurate data via your account settings or by contacting us.</li>
                <li><strong>Deletion:</strong>  Request deletion of your data, though we may retain certain information as required by law or for legitimate business purposes (e.g., transaction records).</li>
                <li><strong>Opt-Out:</strong>Unsubscribe from marketing emails at any time via the unsubscribe link or by contacting us. To exercise these rights, email us at support@hulaholdings.com. We will respond within a reasonable timeframe (e.g., 30 days).</li>
            </Box>

            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                7. Cookies and Tracking
            </Typography>
            <Typography component="p" sx={{ mb: 2, fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                We use cookies and similar technologies to enhance functionality, analyze usage, and improve the Service.
            </Typography>

            {/* <Box component="ul" sx={{ pl: { xs: 2, sm: 4 }, mb: 1, fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                <li>We use cookies and similar technologies to enhance functionality, analyze usage, and improve the Service.</li>
                <li>Examples include session cookies (for login persistence) and analytics cookies (to track feature usage).</li>
                <li>You can manage cookie preferences through your browser settings, though disabling them may limit Service functionality.</li>
            </Box> */}


            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                8. Third-Party Links
            </Typography>
            <Typography component="p" sx={{ mb: 2, fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                The Service may contain links to third-party websites or services (e.g., payment gateways). We are not responsible for their privacy practices, and we encourage you to review their policies separately.
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                9. Policy Updates
            </Typography>
            <Typography component="p" sx={{ mb: 2, fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Updates will be posted in the app, on our website, or sent via email. Your continued use of the Service after such changes signifies your acceptance of the revised policy.
            </Typography>

            <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: "bold" }}
            >
                11. Contact
            </Typography>
            <Typography
                component="p"
                sx={{
                    mb: 1,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
            >
                For questions, support, or concerns regarding these Terms, please contact us at:
            </Typography>

            <Box
                component="ul"
                sx={{
                    pl: { xs: 2, sm: 4 },
                    mb: 1,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
            >
                <li><strong>Email:</strong> support@hulaholdings.com</li>
                <li><strong>Address:</strong> Hula Holdings, 11011, Nairobi Kenya</li>
            </Box>
        </Box>
    );
}
