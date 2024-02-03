import React from "react";
import { Box, Heading, Text, Container, Flex, Divider, Image } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import Header from "./Header"; // Import the Header component
import Footer from "./Footer";
import stocksImage from "./stocks.jpg";

const Home = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box bg="white" color="gray.700">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <Container maxW="container.xl" mt="8" p={isMobile ? "2" : "4"}>
        {/* Welcome */}
        <Box mb="8">
          {/* <Image src={stocksImage} alt="Stocks" /> */}
        
          <Heading as="h2" mb="2" marginTop={"60px"}>
            Welcome to Tidal Trades!
          </Heading>
          <Text fontSize="lg" mb="4">
            Your go-to source for insightful financial analysis and top market
            picks. Discover the future of trading with us.
          </Text>
        </Box>

        {/* Content Sections */}
        <Flex direction={isMobile ? "column" : "row"} gap="6">
          {/* Blog Post Section */}
          <Box flex="2">
            <Heading as="h1" mb="4">
              NVIDIA Stock Performance Analysis
            </Heading>
            <Text fontSize="lg" mb="4">
              NVIDIA has been a standout in the tech sector, showing remarkable
              growth in stock value over the past year. Their advancements in AI
              and gaming technology continue to drive investor confidence.
            </Text>
            <Divider my="4" />
            {/* Additional Blog Posts */}
            {/* ... */}
          </Box>

          {/* Picks of the Day Section */}
          <Box flex="1" bg="gray.50" p="4" borderRadius="md">
            <Heading size="md" mb="4">
              Picks of the Day
            </Heading>
            <Text mb="2">1. Alpha Tech - Innovative solutions in AI.</Text>
            <Text mb="2">
              2. Green Energy Inc. - Leading the way in renewable resources.
            </Text>
            <Text mb="4">
              3. Global Health - Revolutionizing healthcare with technology.
            </Text>
            {/* ... */}
          </Box>
        </Flex>
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Home;
