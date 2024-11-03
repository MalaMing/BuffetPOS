/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "res.cloudinary.com",
            port: "",
            pathname: "/dgjrzjo6y/image/upload/**",
          },
        ],
      },
};

export default nextConfig;
