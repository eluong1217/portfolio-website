import Head from "next/head";
import { Inter } from "@next/font/google";
import {Container, Divider} from '@chakra-ui/react';
import Hero from '../components/Hero'
import WorkExperience from '../components/WorkExperience'
import Projects from '../components/Projects'
import Education from '../components/Education'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Eric Luong - Portfolio</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/smile.ico" />
      </Head>
      
      <Container maxW="container.lg">
        {/** Hero */}
        <Hero />
        <Divider my={5}/>
        
        {/** Education */}
        <Education />
        <Divider my={5}/>
        
        {/** Skills and work experience */}
        <WorkExperience />
        <Divider my={5}/>
        
        {/** Projects */}
        <Projects />
        
      </Container>
    </>
  );
}