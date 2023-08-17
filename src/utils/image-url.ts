import noImage from "../assets/no_image_available.jpg";

export const getNoImageUrl = (url: string) => {
  if (!url) return noImage;
  return url;
};
