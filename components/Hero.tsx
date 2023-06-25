import { Box, Stack, Image, Flex, Heading, Text, Button, Icon } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons'
import { FaLinkedin } from 'react-icons/fa';

export default function Hero() {
    return (
        <>
        <Flex flexDirection="column" justifyContent="center" alignItems="center" p={5}>
            <Stack direction="column" justifyContent="center" alignItems="center" spacing={5}>
                <Image 
                    alt="profile picture" 
                    src="/smiling_eric.png" 
                    boxSize={350}
                    borderRadius={"full"}
                />
                
                <Heading fontWeight="900" fontSize="2xl" textAlign="center">
                    Eric Luong
                </Heading>
                
                <Heading color="blue.300" id="tagline" fontSize="4xl" fontWeight="900" textAlign="center">
                    Fulltime College Student.
                </Heading>
                
                <Text id="about_us" textAlign="center">
                     Hi! I&apos;m a junior in college who grew up in Boston and loves to learn new things. I&apos;m currently pursuing a Bachelors of Arts in Computer Science and a minor in Economics at the University of Massachusetts, Boston.
                </Text>
                
                {/** TODO: Add Links */}
                <Stack direction="row" spacing={5}>
                    <Button leftIcon={<EmailIcon />} colorScheme="teal" > Contact Me </Button>
                    <Button leftIcon={<Icon as={FaLinkedin} />} colorScheme="linkedin" onClick={() => {window.open("https://github.com/eluong1217")}}> LinkedIn </Button>
                </Stack>
            </Stack>
        </Flex>
        </>
    )
}