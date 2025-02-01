import { IKImage } from 'imagekitio-react';

type Props = {
  path: string;
  className: string;
  h?: string;
  w?: string;
  alt?: string;
};

const Image = ({ path, className, alt, w, h }: Props) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      path={path}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      className={className}
      alt={alt}
      transformation={[
        {
          width: w,
          height: h,
        },
      ]}
    />
  );
};

export {Image}