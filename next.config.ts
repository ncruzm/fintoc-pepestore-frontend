import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // ❌ Esto evita que el build falle por errores TS
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
