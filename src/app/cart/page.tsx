import { Metadata } from "next";
import CartContent from "./CartContent";

export const metadata: Metadata = {
  title: "Your Shopping Cart | Hula Market",
  description: "View and manage items in your Hula Market shopping cart. Fast checkout, secure payments, and buyer protection for all your purchases.",
  keywords: "shopping cart, checkout, buy online, Hula Market, e-commerce",
  robots: {
    index: false, // Don't index cart pages
    follow: false,
  },
};

export default function CartPage() {
  return <CartContent />;
}
