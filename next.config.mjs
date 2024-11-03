/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "azjxcvcfctefxjddyfqw.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/product_pictures/**",
      },
      {
        protocol: "https",
        hostname: "www.traderjoes.com",
        port: "",
        pathname: "/content/dam/trjo/products/**",
      },
    ],
  },
};

export default nextConfig;
