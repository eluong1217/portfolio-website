import { Flex, Heading, Stack, Icon, Box,  Text, useColorModeValue, useColorMode, Image} from "@chakra-ui/react";
import {FaGraduationCap} from "react-icons/fa";
import {School} from "../types";

const Universities: School[] = [
    {
        title: "University of Massachusetts Boston",
        alt: "UMB Logo",
        degree: "B.A in Computer Science",
        period: "May 2024",
        gpa: "3.8",
        logo: "/education_umb.png"
    },
    {
        title: "Boston Latin School",
        alt: "BLS Logo",
        degree: "High School Diploma",
        period: "May 2020",
        gpa: "3.1",
        logo: "/education_bls.png"
    }
]

export default function Education() {
    
    const University = (props: {university: School}) => {
        return (
            <>
                <Box
                    px={4}
                    py={5}
                    width="100%"
                    borderWidth="1px"
                    rounded="xl"
                    bg={useColorModeValue("blue.100", "gray.800")}
                    borderColor={useColorModeValue("blue.50", "gray.700")}
                    _hover={{ borderColor: "blue.500" }}
                    position="relative"
                    >
                        <Flex justifyContent="space-between">
                        <Flex>
                            <Image
                            rounded="full"
                            w={16}
                            h={16}
                            objectFit="cover"
                            src={props.university.logo}
                            alt={props.university.alt}
                            />
                            <Stack spacing={2} pl={3} align="left">
                                <Heading
                                    // align="left"
                                    fontSize="xl"
                                >
                                    {props.university.title}
                                </Heading>
                                <Heading
                                    // align="left"
                                    fontSize="sm"
                                >
                                    {props.university.degree}
                                </Heading>
                                
                                <Heading
                                    // align="left"
                                    fontSize="m"
                                >   
                                    GPA: {props.university.gpa}
                                </Heading>
                            </Stack>
                        </Flex>
                        <Stack display={["none", "none", "flex", "flex"]}>
                            <Text fontSize={14}>
                            {props.university.period}
                            </Text>
                        </Stack>
                        </Flex>
                    </Box>
            </>
        )
    }
    
    return (
        <>
            <Flex justifyContent="center" flexDirection="column" alignItems="center" >
                <Stack direction="row" spacing={5} alignItems="center" my={5}>
                    <Icon as={FaGraduationCap} boxSize={"10"} />
                    <Heading size="2xl" fontWeight="800">
                        Education
                    </Heading>
                </Stack>
                
                <Stack direction="column" spacing={5} width="100%" mb={5}>
                    {
                        Universities.map((university, index) => (
                            <University university={university} key={index} />
                        ))
                    }
                </Stack>
            </Flex>
        </>
    )
}