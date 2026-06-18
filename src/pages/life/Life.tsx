import { FC } from 'react';

import { Box, Heading, Image, Text } from '@chakra-ui/react';
import MasonryBase, {
    ResponsiveMasonry as ResponsiveMasonryBase,
    MasonryProps,
    ResponsiveMasonryProps,
} from 'react-responsive-masonry';

import { useData } from 'common/data/Data';
import { Footer } from 'common/footer/Footer';
import { Lightbox, useLightbox } from 'common/lightbox/Lightbox';
import { RouteName } from 'router/Router.types';

// react-responsive-masonry types its components as returning ReactElement, which no longer
// satisfies React 19's JSX element type. Cast to FC with the library's own prop types.
const Masonry = MasonryBase as FC<MasonryProps>;
const ResponsiveMasonry = ResponsiveMasonryBase as FC<ResponsiveMasonryProps>;

export const Life: FC = () => {
    const { data } = useData();
    const { isOpen, onClose, openImage, image } = useLightbox();

    return (
        <Box my={{ base: 0, md: 4 }} w="100%" gap={{ base: 4, md: 8 }} h="100%" flexDirection="column" className="life">
            <Box mb="8">
                <Heading fontSize="xl">My life beyond research</Heading>
                {/* <Text pt="2" fontWeight="500">
                    {data.life.description} {data.life.link}
                </Text> */}
            </Box>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 500: 2, 900: 3 }} style={{ width: '100%' }}>
                <Masonry gutter="20px">
                    {data.life.images.map((life) => {
                        return (
                            <Box key={life.id.toString()} pos="relative" className="gallery-box">
                                <Image
                                    borderRadius="xl"
                                    src={life.src}
                                    alt={life.alt}
                                    display="block"
                                    w="100%"
                                    cursor="pointer"
                                    onClick={() => openImage({ src: life.src, alt: life.alt, caption: life.caption })}
                                />
                                <Text pt="2" fontWeight="300" fontStyle="italic">
                                    {life.caption}
                                </Text>
                            </Box>
                        );
                    })}
                </Masonry>
            </ResponsiveMasonry>

            <Lightbox isOpen={isOpen} onClose={onClose} image={image} />

            <Footer
                pt="16"
                prevLink={RouteName.AboutMe}
                prevText="About Me"
                nextLink={RouteName.Research}
                nextText="Research & Projects"
            />
        </Box>
    );
};
