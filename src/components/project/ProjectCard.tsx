import { Button, Card, CardBody, type CardProps, Image } from '@nextui-org/react';

import NextImage from 'next/image';
import Link from 'next/link';
import { type ComponentProps, type ReactNode } from 'react';

import { type ModalImage } from '~/components/image/ImageModal';
import { cn } from '~/lib/utils';

type Props = CardProps & {
  title: string;
  href: string;
  images: {
    first: {
      lg: ModalImage;
      sm: ModalImage;
    };
    second?: {
      lg: ModalImage;
      sm: ModalImage;
    };
  };
  bodyOrientation?: 'column' | 'row';
  cardBodyProps?: ComponentProps<'div'>;
  setImageModal: (modalImage: ModalImage) => void;
  children: ReactNode;
};

const ProjectCard = ({
  title,
  href,
  images,
  bodyOrientation = 'column',
  cardBodyProps,
  setImageModal,
  children,
  ...props
}: Props) => {
  return (
    <Card className="bg-[#0b0b0c]" {...props}>
      <CardBody
        {...cardBodyProps}
        className={cn([
          'gap-4 p-4 sm:gap-6',
          cardBodyProps?.className,
          bodyOrientation === 'column' && 'flex-col',
          bodyOrientation === 'row' && 'flex-col sm:flex-row',
        ])}
      >
        <div
          className={cn([
            'flex flex-col items-start gap-2',
            bodyOrientation === 'row' && 'sm:w-1/2',
          ])}
        >
          <h3 className="text-base font-semibold text-default-600 sm:text-large">{title}</h3>
          <p className="max-w-prose text-small text-default-500 sm:text-base">{children}</p>
          <Button as={Link} prefetch={false} href={href} radius="lg" color="primary">
            Learn more <span className="sr-only">about {title}</span>
          </Button>
        </div>
        <div className="flex gap-2 sm:w-1/2">
          <Image
            as={NextImage}
            width={290}
            height={290}
            src={images.first.sm.src}
            alt={images.first.sm.alt}
            className="cursor-zoom-in"
            onClick={() => setImageModal(images.first.lg)}
          />
          {images?.second && (
            <Image
              as={NextImage}
              width={290}
              height={290}
              src={images.second.sm.src}
              alt={images.second.sm.alt}
              className="cursor-zoom-in"
              onClick={() => images?.second && setImageModal(images.second.lg)}
            />
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
