import type { Metadata } from "next";
import { StorefrontHome } from "@/components/storefront-home";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...pageMetadata(
    "Men's Wellness in Malaysia",
    "Explore a considered men's wellness collection at RM159 per product, with free delivery across Malaysia and Cash on Delivery available.",
    "/en",
  ),
  title: { absolute: "Men's Wellness in Malaysia | Health Product" },
};

export default function Home() {
  return <StorefrontHome locale="en" />;
}
