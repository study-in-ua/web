import { getStrapiMedia } from "../src/media";
import NextImage from "next/image";

const Image = ({ image  }) => {
  return (
    <NextImage
      layout="responsive"
      width= "200" //{width}
      height="200" //{height}
      objectFit="contain"
      src={getStrapiMedia(image)}
    />
  );
};

export default Image;