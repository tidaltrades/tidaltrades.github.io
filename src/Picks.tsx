import React from "react";
import { Container, Heading, UnorderedList, ListItem, Box } from "@chakra-ui/react";
import Header from "./Header";

const Picks = () => {
  // Example picks - replace with real data or fetch from an API
  const investmentPicks = ["Stock A", "Stock B", "ETF C", "Bond D"];

  return (
    <Box bg="white" color="gray.700">
      <Header />
      <Container maxW="container.xl" mt="8" p={4}>
        <Heading as="h1" mb="8">
          2024 Potential Outperformers 
        </Heading>
        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="sm">
          <UnorderedList>
            {investmentPicks.map((pick, index) => (
              <ListItem key={index}>{pick}</ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Container>
    </Box>
  );
};

export default Picks;
