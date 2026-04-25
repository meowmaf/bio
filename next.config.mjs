const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const ownerName = process.env.GITHUB_REPOSITORY_OWNER ?? "";
const isUserPage =
  repositoryName.toLowerCase() === `${ownerName.toLowerCase()}.github.io`;

const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.GITHUB_ACTIONS && repositoryName && !isUserPage
    ? `/${repositoryName}`
    : "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
