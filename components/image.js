import { getStrapiMedia } from "../src/media";
import NextImage from "next/image";

const Image = ({ image, width = 200, height = 200, objectFit = "contain" }) => {
  return (
    <NextImage
      layout="responsive"
      width={width}
      height={height}
      objectFit={objectFit}
      src={getStrapiMedia(image)}
    />
  );
};

export default Image;
