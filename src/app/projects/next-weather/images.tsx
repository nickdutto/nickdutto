'use client';

import { Image, useDisclosure } from '@nextui-org/react';

import { type ComponentProps, useState } from 'react';

import ImageModal, { type ModalImage } from '~/components/image/ImageModal';

type Props = ComponentProps<'div'>;

const ImagesSection = ({ ...props }: Props) => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [image, setImage] = useState<ModalImage>();

  const setImageModal = (modalImage: ModalImage) => {
    setImage(modalImage);
    onOpen();
  };
  return (
    <>
      <ImageModal image={image} isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange} />
      <div className="flex flex-col gap-4 sm:flex-row" {...props}>
        <Image
          width={632}
          height={632}
          src="/projects/next-weather-weather.png"
          alt="Weather Dashboard"
          className="cursor-zoom-in"
          onClick={() =>
            setImageModal({
              width: 1500,
              height: 1500,
              src: '/projects/next-weather-water.png',
              alt: 'WaterData Station Dashboard',
            })
          }
        />
        <Image
          width={632}
          height={632}
          src="/projects/next-weather-water.png"
          alt="WaterData Station Dashboard"
          className="cursor-zoom-in"
          onClick={() =>
            setImageModal({
              width: 1500,
              height: 1500,
              src: '/projects/next-weather-water.png',
              alt: 'WaterData Station Dashboard',
            })
          }
        />
      </div>
    </>
  );
};

export default ImagesSection;
