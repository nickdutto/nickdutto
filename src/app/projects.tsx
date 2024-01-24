'use client';

import { useDisclosure } from '@nextui-org/react';

import { type ComponentProps, useState } from 'react';

import ImageModal, { type ModalImage } from '~/components/image/ImageModal';
import ProjectCard from '~/components/project/ProjectCard';

type Props = ComponentProps<'section'>;

const ProjectSection = ({ ...props }: Props) => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [image, setImage] = useState<ModalImage>();

  const setImageModal = (modalImage: ModalImage) => {
    setImage(modalImage);
    onOpen();
  };

  return (
    <>
      <ImageModal image={image} isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange} />
      <section {...props}>
        <h2 className="text-xl font-bold text-default-700">Projects</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ProjectCard
            title="NextWeather"
            href="/projects/next-weather"
            images={{
              first: {
                src: '/projects/next-weather-weather.png',
                alt: 'Weather Dashboard',
                width: 1500,
              },
              second: {
                src: '/projects/next-weather-water.png',
                alt: 'WaterData Station Dashboard',
                width: 1500,
              },
            }}
            setImageModal={setImageModal}
            bodyOrientation="row"
            className="col-span-2 bg-[#0b0b0c]"
          >
            A dynamic weather application built with Next.js offering comprehensive local weather &
            water information around Canberra, Australia. Utilizing Tomorrow.io Weather API for
            precise weather forecasts and the Australian Bureau of Meteorology (BOM) WaterData
            Online Portal to provide current & historical waterway insights, the app presents data
            in user-friendly cards, charts, and tables.
          </ProjectCard>
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
