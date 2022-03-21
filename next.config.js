module.exports = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: [ process.env.NEXT_IMAGE_DOMAIN || "localhost"],
  },
};