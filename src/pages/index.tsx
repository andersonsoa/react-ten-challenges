import { Box, Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Animated } from "../components/Animated";
import { Paragraph } from "../components/typograph/Paragraph";
import { Title } from "../components/typograph/Title";

const Home: NextPage = () => {
  return (
    <Animated>
      <Box pt="10" width="60ch" mx="auto">
        <Title align="center">
          10 ReactJS Coding Challenge <br /> (💥Coding Interview Prep💥)
        </Title>

        <Paragraph delay={0.2}>
          Last month, I posted 2 ReactJS interview questions 🎤 - Advance
          Questions and Commonly Asked Question and got a significant welcome by
          dev.to community. 🤗 🥰 Many thanks to all of you!
        </Paragraph>
        <Paragraph delay={0.3}>
          I decided to complete the package by creating codepen exercises 📝 and
          a video 📺 to follow up on that effort as one will need to code
          following the technical interview questions. Also, I added potential
          solutions for the exercises which is listed below.
        </Paragraph>
        <Paragraph delay={0.4}>
          If you need to brush up 🆙 your ninja ReactJS skills, you can try to
          answer the exercises below OR click the video below to guide you
          step-by-step interactively. (No filler, fast, straight to the point as
          I highly respect/value your time)
        </Paragraph>
      </Box>
    </Animated>
  );
};

export default Home;
