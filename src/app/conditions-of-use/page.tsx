import { Box, Typography } from "@mui/material";

export default function ConditionsOfUse() {
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
                Terms and Conditions
            </Typography>

            <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: "bold" }} // Bold title
            >
                1. Introduction
            </Typography>
            <Typography
                component="p"
                sx={{
                    mb: 2,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
            >
                Welcome to Pixel Point, an Inventory Management System (IMS) and point-of-sale (POS) solution developed and operated by Hula Holdings (&#34;we,&#34; &#34;us,&#34; or &#34;our&#34;). These Terms and Conditions (&#34;Terms&#34;) govern your access to and use of Pixel Point, including its mobile application, website, and related services (collectively, the &#34;Service&#34;). By downloading, accessing, or using the Service, you (&#34;User,&#34; &#34;you,&#34; or &#34;your&#34;) agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use the Service.
            </Typography>
            <Typography
                component="p"
                sx={{
                    mb: 2,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
            >
                These Terms constitute a legally binding agreement between you and Hula Holdings. We encourage you to read them carefully.
            </Typography>

            <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: "bold" }} // Bold title
            >
                2. Eligibility
            </Typography>
            <Typography
                component="p"
                sx={{
                    mb: 1,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
            >
                To use Pixel Point, you must:
            </Typography>
            <Box
                component="ul"
                sx={{
                    pl: { xs: 2, sm: 4 },
                    mb: 1,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
            >
                <li>Be at least 18 years of age or the age of majority in your jurisdiction.</li>
                <li>Have the legal capacity to enter into binding agreements.</li>
                <li>Be an individual, business, or authorized representative of a business seeking inventory management and/or point-of-sale solutions.</li>
            </Box>
            <Typography
                component="p"
                sx={{
                    mb: 2,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
            >
                By registering for or using the Service, you represent and warrant that you meet these eligibility requirements and have the authority to act on behalf of any entity you represent.
            </Typography>

            <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: "bold" }} // Bold title
            >
                3. User Responsibilities
            </Typography>
            <Typography
                component="p"
                sx={{
                    mb: 1,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
            >
                As a User, you agree to:
            </Typography>
            <Box
                component="ul"
                sx={{
                    pl: { xs: 2, sm: 4 },
                    mb: 1,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
            >
                <li>
                    <strong>Account Security:</strong> Maintain the confidentiality of your account credentials (e.g., username and password) and notify us immediately at support@hulaholdings.com if you suspect unauthorized access. You are responsible for all activities under your account.
                </li>
                <li>
                    <strong>Accurate Information:</strong> Provide accurate, current, and complete information during registration and keep it updated as needed (e.g., business name, contact details, payment information).
                </li>
                <li>
                    <strong>Legal Compliance:</strong> Use the Service in compliance with all applicable local, state, national, and international laws, including those related to inventory management, financial transactions, taxation, and consumer protection.
                </li>
                <li>
                    <strong>Proper Use:</strong> Use the Service only for its intended purpose—managing inventory, processing transactions, and related activities—and not for any unlawful or unauthorized purpose.
                </li>
            </Box>

            <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: "bold" }} // Bold title
            >
                4. Data Collection and Usage
            </Typography>
            <Typography
                component="p"
                sx={{
                    mb: 2,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
            >
                We collect and process certain data to provide and improve the Service, including but not limited to user names, email addresses, business details, transaction records, and inventory data. All data collection, storage, and usage practices are detailed in our Privacy Policy (see below). By using Pixel Point, you consent to these practices as outlined.
            </Typography>

            <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: "bold" }} // Bold title
            >
                5. Payment and Billing
            </Typography>
            <Box
                component="ul"
                sx={{
                    pl: { xs: 2, sm: 4 },
                    mb: 1,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
            >
                <li>
                    <strong>Subscription Plans:</strong> Certain features of Pixel Point (e.g., advanced analytics, multi-user access) may require a paid subscription. Available plans, features, and pricing will be displayed within the app or on our website.
                </li>
                <li>
                    <strong>Billing Authorization:</strong> By subscribing to a paid plan, you agree to provide accurate billing information (e.g., credit card details) and authorize Hula Holdings to charge your provided payment method for the applicable fees, including recurring charges as per your plan.
                </li>
                <li>
                    <strong>Taxes:</strong> All fees are exclusive of applicable taxes (e.g., VAT, sales tax), which may be added based on your location. You are responsible for paying such taxes.
                </li>
                <li>
                    <strong>Refunds:</strong> Payments are non-refundable except where required by law or as specified in a separate refund policy.
                </li>
                <li>
                    <strong>Changes:</strong> We reserve the right to modify pricing with prior notice. Continued use after such changes constitutes acceptance of the new pricing.
                </li>
            </Box>

            <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: "bold" }} // Bold title
            >
                6. Prohibited Activities
            </Typography>
            <Typography
                component="p"
                sx={{
                    mb: 1,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
            >
                You agree not to:
            </Typography>
            <Box
                component="ul"
                sx={{
                    pl: { xs: 2, sm: 4 },
                    mb: 1,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
            >
                <li>Attempt to gain unauthorized access to the Service, its servers, or any connected systems (e.g., through hacking or phishing).</li>
                <li>Use the Service for fraudulent, illegal, or unethical purposes, such as falsifying transactions or evading taxes.</li>
                <li>Interfere with or disrupt the Service, including introducing malware, viruses, or denial-of-service attacks.</li>
                <li>Reverse-engineer, decompile, disassemble, or otherwise attempt to derive the source code of the Service, except as permitted by applicable law.</li>
                <li>Reproduce, duplicate, copy, sell, or resell the Service without our express written consent.</li>
                <li>Misrepresent your identity or impersonate any person or entity while using the Service.</li>
            </Box>
            <Typography
                component="p"
                sx={{
                    mb: 2,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
            >
                Violation of these prohibitions may result in immediate termination of your account and potential legal action.
            </Typography>

            <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: "bold" }} // Bold title
            >
                7. Termination
            </Typography>
            <Box
                component="ul"
                sx={{
                    pl: { xs: 2, sm: 4 },
                    mb: 1,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
            >
                <li>
                    <strong>By Us:</strong> Hula Holdings may suspend or terminate your access to the Service at our sole discretion, with or without notice, if you violate these Terms, engage in prohibited activities, or for any other reason we deem necessary (e.g., to protect the Service or other users).
                </li>
                <li>
                    <strong>By You:</strong> You may terminate your account at any time by following the instructions within the app or contacting us at support@hulaholdings.com.
                </li>
                <li>
                    <strong>Post-Termination:</strong> Upon termination, your right to use the Service ceases immediately. We may retain certain data as required by law or for legitimate business purposes (e.g., transaction records), as outlined in the Privacy Policy.
                </li>
            </Box>

            <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: "bold" }} // Bold title
            >
                8. Limitation of Liability
            </Typography>
            <Typography
                component="p"
                sx={{
                    mb: 1,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
            >
                To the fullest extent permitted by law:
            </Typography>
            <Box
                component="ul"
                sx={{
                    pl: { xs: 2, sm: 4 },
                    mb: 1,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
            >
                <li>The Service is provided &#34;as is&#34; and &#34;as available,&#34; without warranties of any kind, express or implied (e.g., merchantability, fitness for a particular purpose).</li>
                <li>Hula Holdings, its affiliates, and its licensors shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Service, including but not limited to lost profits, data loss, or business interruption.</li>
                <li>Our total liability to you, if any, shall not exceed the amount you paid to us in the preceding 12 months.</li>
            </Box>

            <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: "bold" }} // Bold title
            >
                9. Amendments
            </Typography>
            <Typography
                component="p"
                sx={{
                    mb: 2,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
            >
                We reserve the right to modify these Terms at any time. Updates will be posted within the app, on our website, or communicated via email. Your continued use of the Service after such changes constitutes your acceptance of the revised Terms. If you do not agree to the updates, you must stop using the Service.
            </Typography>

            <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: "bold" }} // Bold title
            >
                10. Governing Law and Dispute Resolution
            </Typography>
            <Typography
                component="p"
                sx={{
                    mb: 2,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
            >
                These Terms are governed by the laws of Kenya, without regard to conflict of law principles. Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration in Nairobi , Kenya, except where prohibited by law, in which case disputes will be adjudicated in a court of competent jurisdiction.
            </Typography>

            <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: "bold" }} // Bold title
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
                <li><strong>Address:</strong> Hula Holdings, 11011 Nairobi Kenya</li>
            </Box>
        </Box>
    );
}