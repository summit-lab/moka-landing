import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the dev server to be reached from other devices on the LAN.
  allowedDevOrigins: ['192.168.0.*', '192.168.1.*'],
};

export default nextConfig;
