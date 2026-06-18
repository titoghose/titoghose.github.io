import { FC } from 'react';

import { Box, Button, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import { FileText, Book, GraduationCap } from 'lucide-react';

// Brand icons removed from lucide-react v1; using inline SVGs instead
const GithubIcon = ({ width }: { width: string }) => (
    <svg width={width} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0 1 12 6.8c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.562 21.8 24 17.302 24 12 24 5.373 18.627 0 12 0z" />
    </svg>
);

const LinkedinIcon = ({ width }: { width: string }) => (
    <svg width={width} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);
import { NavLink } from 'react-router-dom';

import { useData } from 'common/data/Data';
import { RouteName } from 'router/Router.types';

const AboutMe: FC = () => {
    const { data } = useData();

    return (
        <Flex
            my={{ base: 0, md: 4 }}
            w="100%"
            gap={{ base: 4, md: 8 }}
            h="100%"
            flexDirection={{ base: 'column', md: 'row' }}
        >
            <Flex justifyContent="center" alignItems="center" flex="0.3">
                <Image
                    w={{ base: '250px', md: '400px' }}
                    h={{ base: '250px', md: '400px' }}
                    objectFit="cover"
                    src={data.picture}
                    borderRadius={{ base: '50%', md: 'xl' }}
                />
            </Flex>
            <Box flex="0.7">
                {/* ml offset cancels Libre Baskerville's ~3px left glyph bearing at 4xl, aligning visually with body text */}
                <Heading fontSize="4xl" lineHeight="1" textAlign={{ base: 'center', md: 'left' }} ml={{ base: 0, md: '-3px' }}>
                    {data.name}
                </Heading>
                <Text fontWeight="600" textAlign={{ base: 'center', md: 'left' }} color="gray" pt="1">
                    {data.title}
                </Text>
                <Text fontSize="sm" fontWeight="600" textAlign={{ base: 'center', md: 'left' }} color="gray" pt="1">
                    {data.email}
                </Text>
                <Flex mt="8" gap="4" flexDirection={{ base: 'column', md: 'row' }}>
                    <Button
                        variant="outline"
                        leftIcon={<GithubIcon width="8pt" />}
                        onClick={() => window.open(data.github)}
                        borderWidth="2px"
                        size={{ base: 'lg', md: 'md' }}
                    >
                        GitHub
                    </Button>
                    <Button
                        variant="outline"
                        leftIcon={<LinkedinIcon width="8pt" />}
                        onClick={() => window.open(data.linkedin)}
                        borderWidth="2px"
                        size={{ base: 'lg', md: 'md' }}
                    >
                        LinkedIn
                    </Button>
                    <Button
                        variant="outline"
                        leftIcon={<Book width="8pt" />}
                        onClick={() => window.open(data.google_scholar)}
                        borderWidth="2px"
                        size={{ base: 'lg', md: 'md' }}
                    >
                        G-Scholar
                    </Button>
                    <Button
                        variant="outline"
                        leftIcon={<GraduationCap width="8pt" />}
                        onClick={() => window.open(data.oxford_profile)}
                        borderWidth="2px"
                        size={{ base: 'lg', md: 'md' }}
                    >
                        Oxford
                    </Button>
                    <Button
                        variant="outline"
                        leftIcon={<Mail width="8pt" />}
                        onClick={() => window.open(data.email)}
                        borderWidth="2px"
                        size={{ base: 'lg', md: 'md' }}
                    >
                        Mail
                    </Button>
                    <Button
                        leftIcon={<FileText width="8pt" />}
                        onClick={() => window.open(data.cv)}
                        borderWidth="2px"
                        borderColor="brand"
                        size={{ base: 'lg', md: 'md' }}
                    >
                        CV
                    </Button>
                </Flex>
                <Text mt="4" align="justify" fontWeight="500">
                    {data.about}
                </Text>
                <Text mt="4" align="justify" fontWeight="500">
                    {data.life.description}
                    <Link as={NavLink} to={RouteName.Life} color="brand">
                        {data.life.link}
                    </Link>
                </Text>
            </Box>
        </Flex>
    );
};
export default AboutMe;
