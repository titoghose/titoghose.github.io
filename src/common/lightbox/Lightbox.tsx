import { FC, useState } from 'react';

import { Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';

export interface LightboxImage {
    src: string;
    alt?: string;
    caption?: string;
}

export const useLightbox = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [image, setImage] = useState<LightboxImage | undefined>(undefined);

    const openImage = (nextImage: LightboxImage) => {
        setImage(nextImage);
        onOpen();
    };

    return { isOpen, onClose, openImage, image };
};

interface LightboxProps {
    isOpen: boolean;
    onClose: () => void;
    image?: LightboxImage;
}

export const Lightbox: FC<LightboxProps> = ({ isOpen, onClose, image }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="full">
            <ModalOverlay bg="blackAlpha.800" />
            <ModalContent bg="transparent" boxShadow="none" onClick={onClose}>
                <ModalCloseButton color="white" />
                <ModalBody display="flex" flexDir="column" alignItems="center" justifyContent="center" h="100vh">
                    {image && (
                        <>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                maxH="85vh"
                                maxW="90vw"
                                objectFit="contain"
                                borderRadius="xl"
                                onClick={(e) => e.stopPropagation()}
                            />
                            {image.caption && (
                                <Text pt="2" fontWeight="300" fontStyle="italic" color="white" textAlign="center">
                                    {image.caption}
                                </Text>
                            )}
                        </>
                    )}
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
