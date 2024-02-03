import React from "react";
import { Box, Container, Heading, Text, Table, Thead, Tbody, Tr, Th, Td, Link } from "@chakra-ui/react";
import Header from "./Header";

const Research = () => {
  const researchArticles = [
    { id: 1, company: "GreenTech Inc.", stockExchange: "NASDAQ", ticker: "GNT", reportsCount: 6, lastUpdate: "June 15, 2023" },
    { id: 2, company: "BlockFinance Ltd.", stockExchange: "NYSE", ticker: "BFT", reportsCount: 5, lastUpdate: "July 2, 2023" },
    { id: 3, company: "HealthAI Solutions", stockExchange: "LSE", ticker: "HAI", reportsCount: 7, lastUpdate: "June 28, 2023" },
    { id: 4, company: "ShopWorld Inc.", stockExchange: "HKEX", ticker: "SWI", reportsCount: 4, lastUpdate: "June 5, 2023" },
    { id: 5, company: "SecureNet Systems", stockExchange: "TSX", ticker: "SNS", reportsCount: 3, lastUpdate: "July 10, 2023" },
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
