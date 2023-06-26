import { Flex, Heading, Stack, Icon, Box,  Text, useColorModeValue, SimpleGrid, useColorMode, Center, Tag, Image, LinkBox, LinkOverlay} from "@chakra-ui/react";
import {GrCode} from "react-icons/gr";
import { Project} from "../types";

const projects: Project[] = [
    {
        title: "Monkey Mania",
        link: "https://github.com/eluong1217/monkey-mania",
        description: "An arcade based game where the player uses arrow keys to move left and right to try and catch fruits. I used the Processing IDE which has a similar language to Java to implement features such as controls, a life counter and game over menu.",
        alt: "portfolio picture",
        techstack: ["Java", "Processing", "Object-Oriented Programming"],
        image: "/project_monkey.png"
    },
    {
        title: "Portfolio Project",
        link: "https://github.com/eluong1217/portfolio-website",
        description: "A personal portfolio website to showcase my education, work experience, projects, and skills. I used popular frontend technologies such as Next.JS and TypeScript to create this project.",
        alt: "portfolio picture",
        techstack: ["HTML", "CSS", "TypeScript", "Next.JS", "React", "ChakraUI","Vercel"],
        image: "/project_portfolio.png"
    },
    {
        title: "Flappy Bird",
        link: "https://eluong1217.github.io/Flappy-Bird-Website/",
        description: "A simpler website-based version of the popular game Flappy Bird. I used HTML, CSS, and Javascript to create this project. I also used Github Pages to host the website.",
        alt: "portfolio picture",
        techstack: ["HTML", "CSS", "Javascript","Github Pages"],
        image: "/project_FBW2.png"
    },
    {
        title: "Pomodoro Timer",
        link: "https://eluong1217.github.io/Pomodoro-Timer/",
        description: "A timer I created to help replicate the Pomodoro effect to enhance productivity. I used HTML, CSS, and Javascript to create this project as well as Github Pages to host the website.",
        alt: "portfolio picture",
        techstack: ["HTML", "CSS", "Javascript","Github Pages"],
        image: "/project_pomodoro.png"
    },
    {
        title: "Pixar vs. DreamWorks",
        link: "https://github.com/eluong1217/Pixar-Vs.-DreamWorks",
        description: "A statistical analysis between the performance of Pixar and DreamWorks movies. I used RStudio to create the visual aspects of the set as well as Microsoft Suite to import the data and organize it in a digestible manner.",
        alt: "portfolio picture",
        techstack: ["R", "RStudio", "Word", "Excel", "Powerpoint"],
        image: "/project_pvd.png"
    }
]

const Project = (props: {project: Project}) => {
    
    return (
        <>
            <Center py={6}>
                <LinkBox
                    w={"full"}
                    bg={useColorModeValue("white", "gray.900")}
                    boxShadow={"2xl"}
                    rounded={"md"}
                    px={6}
                    py={3}
                    mx={5}
                    overflow={"hidden"}
                    _hover={{ cursor: "pointer" }}
                    onClick={() => {
                    props.project.link && window.open(props.project.link);
                    }}
                >
                    <Box bg={"gray.100"} mt={-6} mx={-6} pos={"relative"}>
                    <Image
                        src={props.project.image}
                        objectFit={"cover"}
                        alt={props.project.alt}
                        maxH={"210px"}
                        h={"210px"}
                        w="full"
                    />
                    </Box>
                    <Stack mb={3}>
                    <Text
                        mt={3}
                        color={"blue.500"}
                        textTransform={"uppercase"}
                        fontWeight={800}
                        fontSize={"lg"}
                        letterSpacing={1.1}
                    >
                        {props.project.title}
                    </Text>
                    <Text color={"gray.500"}>{props.project.description}</Text>
                    </Stack>
                    {props.project.techstack.map((tech) => (
                    <Tag size="sm" padding="0 5px" key={tech} mx={1}>
                        {tech}
                    </Tag>
                    ))}
                </LinkBox>
                </Center>
        </>
    )
}

export default function Projects() {
    return (
        <> 
            <Flex justifyContent="center" flexDirection="column" alignItems="center">
                <Stack direction="row" spacing={5} alignItems="center" my={5}>
                    <Icon as={GrCode} boxSize={"10"} />
                    <Heading size="2xl" fontWeight="800">
                        Projects
                    </Heading>
                </Stack>
                
                <SimpleGrid columns={[1,1,3]} spacing={5} width="100%" mb={5}>
                    { 
                        projects.map((project, index) => (
                            <Project project={project} key={index} />
                        ))
                    }
                </SimpleGrid>
            </Flex>
        </>
    )
}