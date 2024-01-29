'use client';

import { Image, useDisclosure } from '@nextui-org/react';

import NextImage from 'next/image';
import { type ComponentProps, useState } from 'react';

import ImageModal, { type ModalImage } from '~/components/image/ImageModal';

type Props = ComponentProps<'div'>;

const Screenshots = ({ ...props }: Props) => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [image, setImage] = useState<ModalImage>();

  const setImageModal = (modalImage: ModalImage) => {
    setImage(modalImage);
    onOpen();
  };
  return (
    <section>
      <h2>Screenshots</h2>
      <ImageModal image={image} isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange} />
      <div className="flex flex-col gap-4" {...props}>
        <Image
          as={NextImage}
          width={632}
          height={632}
          src="/projects/next-weather-weather.png"
          alt="Weather Dashboard"
          className="not-prose cursor-zoom-in"
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
          as={NextImage}
          width={632}
          height={632}
          src="/projects/next-weather-water.png"
          alt="WaterData Station Dashboard"
          className="not-prose cursor-zoom-in"
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
    </section>
  );
};

export default Screenshots;
