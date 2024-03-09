import React from "react";
import { Box, Container, Heading, Text, Table, Thead, Tbody, Tr, Th, Td, Link } from "@chakra-ui/react";
import Header from "./Header";

const Research = () => {
  const researchArticles = [
    { id: 1, company: "Amazon.com Inc.", stockExchange: "NASDAQ", ticker: "AMZN", reportsCount: 1, lastUpdate: "December 27, 2023" },
    { id: 2, company: "Walt Disney Co.", stockExchange: "NYSE", ticker: "DIS", reportsCount: 1, lastUpdate: "December 27, 2023" },
    { id: 3, company: "Bank Of America", stockExchange: "NYSE", ticker: "BAC", reportsCount: 1, lastUpdate: "December 27, 2023" },
    { id: 4, company: "Johnson Controls International PLC", stockExchange: "NYSE", ticker: "JCI", reportsCount: 1, lastUpdate: "December 27, 2023" },
    { id: 5, company: "Marathon Oil Corporation", stockExchange: "MRO", ticker: "NYSE", reportsCount: 1, lastUpdate: "December 27, 2023" },
  ];

  return (
    <Box bg="white" color="gray.700">
      <Header />
      <Container maxW="container.xl" mt="8" p={4}>
        <Heading as="h1" mb="8">
          Research Articles
        </Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Company</Th>
              <Th>Stock Exchange</Th>
              <Th>Ticker</Th>
              <Th># of Reports</Th>
              <Th>Most Recent Update</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {researchArticles.map((article) => (
              <Tr key={article.id}>
                <Td>{article.company}</Td>
                <Td>{article.stockExchange}</Td>
                <Td>{article.ticker}</Td>
                <Td>{article.reportsCount}</Td>
                <Td>{article.lastUpdate}</Td>
                <Td>
                  <Link color="blue.500" href={`/view-report/${article.id}`}>
                    View Reports
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>
    </Box>
  );
};

export default Research;
