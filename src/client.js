import { SanityClient } from "@sanity/client";

export const config = {
  dataset: "production",
  projectId: "8fg5zann",
  apiVersion: "2023-01-17",
  useCdn: true,
};

const client = SanityClient(config);

export default client;
