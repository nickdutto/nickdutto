'use client';

import { Image, Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react';

import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

export type ModalImage = {
  width: number;
  src: string;
  alt: string;
};

type Props = {
  image?: ModalImage;
  isOpen: boolean;
  onClose: () => void;
  onOpenChange: () => void;
};

const ImageModal = ({ image, isOpen, onClose, onOpenChange }: Props) => {
  const HandleBodyClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if ((e.target as Element)?.lastElementChild?.nodeName !== 'IMG') {
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      radius="none"
      backdrop="blur"
      className="!m-0 h-[100svh] bg-transparent p-0"
      classNames={{ closeButton: 'p-4' }}
      style={{ maxWidth: image?.width }}
    >
      <ModalContent>
        <ModalHeader className="bg-content1/50">{image?.alt}</ModalHeader>
        <ModalBody className="justify-center p-0" onClick={HandleBodyClick}>
          <TransformWrapper disablePadding>
            <TransformComponent>
              <Image width={1200} src={image?.src} alt={image?.alt} radius="none" />
            </TransformComponent>
          </TransformWrapper>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ImageModal;
