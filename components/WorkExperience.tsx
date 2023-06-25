import { Experience } from '../types';
import {MdWork} from 'react-icons/md';
import { Flex, Heading, Stack, Icon, Box,  Text, useColorModeValue, SimpleGrid, useColorMode, Tag, Image, LinkBox, LinkOverlay} from "@chakra-ui/react";

export default function WorkExperience() {
    
    const Jobs: Experience[] = [
        {
            title: "University of Massachusetts Boston",
            alt: "UMB Logo",
            role: "Peer Mentor",
            period: "Sept 2022 - Present",
            skills: [],
            bullets: [],
            logo: "/work_UMB.png",
        },
        {
            title: "Reign Drink Lab",
            alt: "Reign Logo",
            role: "Barista",
            period: "Sept 2021 - Present",
            skills: [],
            bullets: [],
            logo: "/work_reign.png",
        },
        {
            title: "University of Massachusetts Boston",
            alt: "UMB Logo",
            role: "Course Grader for CS285L",
            period: "Sept 2022 - December 2022",
            skills: [],
            bullets: [],
            logo: "/work_UMB.png",
        },
        {
            title: "Castle Square Intro to Tech Internship",
            alt: "Square Tech Logo",
            role: "Tech Intern",
            period: "Sept 2019 - Janurary 2020",
            skills: [],
            bullets: [],
            logo: "/work_SquareTech.png",
        },
        {
            title: "Kumon Math and Reading Center",
            alt: "Kumon Logo",
            role: "Center Assistant",
            period: "July 2018 - August 2019",
            skills: [],
            bullets: [],
            logo: "/work_kumon.png",
        },
        {
            title: "BCYF City Hall Childcare",
            alt: "BCYF Logo",
            role: "Child Supervisor",
            period: "June 2017 - August 2017",
            skills: [],
            bullets: [],
            logo: "/work_bcyf.png",
        }
    ]
    
    const Job = (props: {job: Experience}) => {
        return (
            <>
                <LinkBox
                px={4}
                py={5}
                borderWidth="1px"
                rounded="xl"
                bg={useColorModeValue("white", "gray.800")}
                borderColor={useColorModeValue("gray.100", "gray.700")}
                _hover={{ borderColor: "blue.500" }}
                position="relative"
                >
                <LinkOverlay rel="noopener" isExternal>
                    <Flex justifyContent="space-between">
                    <Flex>
                        <Image
                        rounded="full"
                        w={16}
                        h={16}
                        objectFit="cover"
                        src={props.job.logo}
                        alt={props.job.alt}
                        />
                        <Stack spacing={2} pl={3} align="left">
                        <Heading
                            // align="left"
                            fontSize="xl"
                        >
                            {props.job.title}
                        </Heading>
                        <Heading
                            // align="left"
                            fontSize="sm"
                        >
                            {props.job.role}
                        </Heading>
                        <Stack
                            spacing={1}
                            mt={3}
                            alignItems="center"
                            isInline
                            display={["none", "none", "flex", "flex"]}
                        >
                            {props.job.skills.map((skill) => (
                            <Tag size="sm" padding="0 5px" key={skill}>
                                {skill}
                            </Tag>
                            ))}
                        </Stack>
                        </Stack>
                    </Flex>
                    <Stack display={["none", "none", "flex", "flex"]}>
                        <Text fontSize={14}>
                        {props.job.period}
                        </Text>
                    </Stack>
                    </Flex>
                    
                    <SimpleGrid
                        spacing={1}
                        mt={3}
                        alignItems="center"
                        columns={5}
                        display={["flex", "flex", "none", "none"]}
                    >
                    {props.job.skills.map((skill) => (
                        <Tag size="sm" padding="0 5px" key={skill}>
                        {skill}
                        </Tag>
                    ))}
                    </SimpleGrid>
                </LinkOverlay>
                </LinkBox>
            </>
        )
    }

    return (
        <>
            <Flex justifyContent="center" flexDirection="column" alignItems="center">
                <Stack direction="row" spacing={5} alignItems="center" my={5}>
                    <Icon as={MdWork} boxSize={"10"} />
                    <Heading size="2xl" fontWeight="800">
                        Work Experience
                    </Heading>
                </Stack>
                
                <Stack direction="column" spacing={5} width="100%" mb={5}>
                    {
                        Jobs.map((job, index) => (
                            <Job job={job} key={index} />
                        ))
                    }
                </Stack>
            </Flex>
        </>
    )
}