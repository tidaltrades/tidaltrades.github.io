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
            Your go-to source for insightful financial analysis and premier market
            research. Discover the future of trading with us. The markets are gnarly, make sure you know how to surf! 
          </Text>
        </Box>

        {/* Content Sections */}
        <Flex direction={isMobile ? "column" : "row"} gap="6">
          {/* Blog Post Section */}
          <Box flex="2">
            <Heading as="h1" mb="4">
              Amazon crushes another quarter, as expected 
            </Heading>
            <Text fontSize="lg" mb="4">
              Amazon ($AMZN) reports $170 billion in revenue, a 13% YoY increase, while operating income increased to $13.2 billion, 383% from the previous year.  
        
            </Text>
            <Divider my="4" />
            {/* Additional Blog Posts */}
            {/* ... */}
          </Box>

          {/* Picks of the Day Section */}
          <Box flex="1" bg="gray.50" p="4" borderRadius="md">
            <Heading size="md" mb="4">
              2024 Potential Outperformers AAAA
            </Heading>
            <Text mb="2">1. $AMZN Amazon.com Inc </Text>
            <Text mb="2">
              2. $DIS Walt Disney Co. 
            </Text>
            <Text mb="4">
              3. $BAC Bank of America Corp
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
