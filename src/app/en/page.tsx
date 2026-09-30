import type { Metadata } from "next";
import { StorefrontHome } from "@/components/storefront-home";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...pageMetadata(
    "Men's Wellness Products Malaysia | RM159 Free Delivery COD",
    "Buy Magnum Pump, Ultrahot, Horsemen and Hammer of Thor in Malaysia for RM159 each. Free nationwide delivery and Cash on Delivery. Order online by email form.",
    "/en",
  ),
  title: { absolute: "Men's Wellness Products Malaysia | RM159 Free Delivery COD" },
};

export default function Home() {
  return <StorefrontHome locale="en" />;
}
