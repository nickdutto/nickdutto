'use client';

import { useDisclosure } from '@nextui-org/react';

import { useState } from 'react';

import ImageModal, { type ModalImage } from '~/components/image/ImageModal';
import ProjectCard from '~/components/project/ProjectCard';

const ProjectCards = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [image, setImage] = useState<ModalImage>();

  const setImageModal = (modalImage: ModalImage) => {
    setImage(modalImage);
    onOpen();
  };
  return (
    <>
      <ImageModal image={image} isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ProjectCard
          title="NextWeather"
          href="/projects/next-weather"
          images={{
            first: {
              lg: {
                src: '/projects/next-weather-weather.png',
                alt: 'Weather Dashboard',
                width: 1500,
                height: 1500,
              },
              sm: {
                src: '/projects/next-weather-weather-sm.png',
                alt: 'Weather Dashboard',
                width: 750,
                height: 750,
              },
            },
            second: {
              lg: {
                src: '/projects/next-weather-water.png',
                alt: 'WaterData Station Dashboard',
                width: 1500,
                height: 1500,
              },
              sm: {
                src: '/projects/next-weather-water-sm.png',
                alt: 'WaterData Station Dashboard',
                width: 750,
                height: 750,
              },
            },
          }}
          setImageModal={setImageModal}
          bodyOrientation="row"
          className="col-span-2 bg-[#0b0b0c]"
        >
          A dynamic weather application built with Next.js offering comprehensive local weather &
          water information around Canberra, Australia. Utilizing Tomorrow.io Weather API for
          precise weather forecasts and the Australian Bureau of Meteorology (BOM) WaterData Online
          Portal to provide current & historical waterway insights, the app presents data in
          user-friendly cards, charts, and tables.
        </ProjectCard>
      </div>
    </>
  );
};

export default ProjectCards;
