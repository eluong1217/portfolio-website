import { Box, Stack, Image, Flex, Heading, Text, Button, Icon, useColorModeValue } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons'
import { FaLinkedin } from 'react-icons/fa';

export default function Hero() {
    return (
        <>
        <Flex flexDirection="column" justifyContent="center" alignItems="center" p={5}>
            <Stack direction="column" justifyContent="center" alignItems="center" spacing={5}>
                <Image 
                    alt="profile picture" 
                    src={useColorModeValue("/smiling_eric.png", "/evil_eric.png")} 
                    boxSize={350}
                    borderRadius={"full"}
                />
                
                <Heading fontWeight="900" fontSize="2xl" textAlign="center">
                    Eric Luong
                </Heading>
                
                <Heading color="blue.300" id="tagline" fontSize="4xl" fontWeight="900" textAlign="center">
                    Ex-Fulltime College Student.
                </Heading>
                
                <Text id="about_us" textAlign="left">
                     Hi! I&apos;m a recent college graduate, who grew up in Boston and loves to learn new things. I completed my Bachelors of Arts in Computer Science and Economics at the University of Massachusetts, Boston.
                </Text>
                
                {/** TODO: Add Links */}
                
            </Stack>
        </Flex>
        </>
    )
}