// @type {import('next').NextConfig}

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
    ],
  },
};

//   images: {
//     domains: ["images.unsplash.com"],
//   },
// };

export default nextConfig;
//   module.exports = nextConfig;
