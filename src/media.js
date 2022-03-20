import { getURL } from "./api";

export function getStrapiMedia(media) {
  return `${getURL()}/assets/${media}`;
}