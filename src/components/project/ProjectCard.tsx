import { Button, Card, CardBody, type CardProps, Image } from '@nextui-org/react';

import Link from 'next/link';
import { type ComponentProps, type ReactNode } from 'react';

import { type ModalImage } from '~/components/image/ImageModal';
import { cn } from '~/lib/utils';

type Props = CardProps & {
  title: string;
  href: string;
  images: {
    first: ModalImage;
    second?: ModalImage;
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
          'gap-6 p-4',
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
          <Button as={Link} href={href} variant="flat" radius="lg" color="primary">
            Read More
          </Button>
        </div>
        <div className="flex gap-2 sm:w-1/2">
          <Image
            width={images.first.width}
            src={images.first.src}
            alt={images.first.alt}
            className="cursor-zoom-in"
            onClick={() => setImageModal(images.first)}
          />
          {images?.second && (
            <Image
              width={images.second.width}
              src={images.second.src}
              alt={images.second.alt}
              className="cursor-zoom-in"
              onClick={() => images?.second && setImageModal(images.second)}
            />
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
