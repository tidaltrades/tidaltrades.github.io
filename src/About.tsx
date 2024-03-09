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
        In Tidal Trades, we foster a dynamic environment for discussing investment trends, conducting market research, and sharing invaluable insights. Whether you're a seasoned pro or just starting your investment journey, our diverse community provides a supportive space to learn, grow, and prosper.

 You can expect 

in-depth discussions, where members dive into thought-provoking conversations about stocks, cryptocurrencies, commodities, and more.
Our detailed, weekly market analysis allows investors to stay ahead of the curve with real-time market analyses and trends.
Members also gain access a treasure trove of resources, from beginner guides to advanced trading strategies. We also off a variety of
Networking Opportunities, where you can connect with like-minded individuals, professionals, and experts in the financial field. 
        </Text>
        {/* Additional content */}
      </Container>

      <Footer />
    </Box>
  );
};

export default About;
