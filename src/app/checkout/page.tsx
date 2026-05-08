import { Metadata } from "next";
import { Box, Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "Checkout | Hula Market",
  description: "Complete your purchase on Hula Market. Secure checkout with multiple payment options.",
  robots: {
    index: false,
    follow: false,
  },
};

const Checkout = () => {
  return (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h4">Checkout</Typography>
      <Typography>Your secure checkout process starts here.</Typography>
    </Box>
  );
};

export default Checkout;