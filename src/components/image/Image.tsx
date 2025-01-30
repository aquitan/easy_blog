import { IKImage } from 'imagekitio-react';

type Props = {
	path: string;
	className: string;
	// h: number;
	// w: number;
	alt?: string;
}

const Image = ({path, className, alt}: Props) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      path={path}
			loading='lazy'
			lqip={{active: true, quality: 20}}
      className={className}
			alt={alt}
    />
  );
};

export {Image}