import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: { remotePatterns: [{ hostname: "images.unsplash.com" }] },
  //   typedRoutes: true,
};

export default withNextIntl(nextConfig);
