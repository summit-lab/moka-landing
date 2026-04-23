import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.0.*', '192.168.1.*'],
  webpack: (config, { dev }) => {
    if (dev) {
      // OneDrive / network drives break inotify-based file watching.
      // Polling every 500ms fixes HMR on Windows + OneDrive.
      config.watchOptions = {
        poll: 500,
        aggregateTimeout: 300,
      }
    }
    return config
  },
};

export default nextConfig;
