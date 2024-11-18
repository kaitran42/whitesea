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
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        port: "",
        pathname: "/vi/**/maxresdefault.jpg",
      },
      {
        protocol: "https",
        hostname: "www.seriouseats.com",
        port: "",
        pathname: "/thmb/**",
      },
    ],
  },
};

export default nextConfig;
