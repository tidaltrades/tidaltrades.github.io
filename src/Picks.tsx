import React from "react";
import { Container, Heading, UnorderedList, ListItem, Box } from "@chakra-ui/react";
import Header from "./Header";

const Picks = () => {
  // Example picks - replace with real data or fetch from an API
  const investmentPicks = ["$BAC Bank Of America", "$DIS Walt Disney Co. ","$AMZN Amazon.com", "$JCI Johnson Controls Inc.", "$MRO Marathon Oil Corporation"];
  const investmentPicks2 = ["$TNA - Direxion Daily Small Cap Bull 3x ETF (~$32.78 1/19/24)" , "$SPYD S&P 500 High Dividend Yield ETF"];

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
        <Heading as="h1" mb="8">
          2024 Weekly ETF Accumulation  
        </Heading>
        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="sm">
          <UnorderedList>
            {investmentPicks2.map((pick, index) => (
              <ListItem key={index}>{pick}</ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Container>
    </Box>
  );
};

export default Picks;
