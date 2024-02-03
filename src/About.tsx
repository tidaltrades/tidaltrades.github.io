import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Header from "./Header"; 
import Footer from "./Footer";

const About = () => {
  return (
    <Box bg="white" color="gray.700">
      <Header />

      <Container maxW="container.xl" mt="8" p="4">
        <Heading as="h2" mb="4">
          About Tidal Trades
        </Heading>
        <Text fontSize="lg" mb="4">
          Tidal Trades is a leading platform for... [Add more content about your company]
        </Text>
        {/* Additional content */}
      </Container>

      <Footer />
    </Box>
  );
};

export default About;
