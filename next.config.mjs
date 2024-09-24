/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PUBLIC_CERAMIC_API_ENDPOINT: "https://staging-ceramic.akasha.world",
    PUBLIC_GRAPHQL_URI: "https://staging-graphql.akasha.world/",
    PUBLIC_INDEXING_DID:
      "did:key:z6Mkn6B7SGtPhEcBVjLittyqXmjPFV9Sm67Kb9hwJQ6cNLZu",
    PUBLIC_W3_STORAGE_DELEGATE_BASE_URL:
      "https://w3storage-delegate.cloudflare2344.workers.dev",
    PUBLIC_WALLET_CONNECT_PROJECT_ID: "59e24a9af36dd7854d1622868c8425cc",
    PUBLIC_LOG_LEVEL: "info",
    PUBLIC_API_STATUS_PATH: "?query=%7BserviceStatus%7D",
  },
};

export default nextConfig;
