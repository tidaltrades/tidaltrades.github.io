import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer"; 

const Contact = () => {
  return (
    <Box bg="white" color="gray.700">
      <Header />

      <Container maxW="container.xl" mt="8" p="4">
        <Heading as="h2" mb="4">
          Contact Us
        </Heading>
        <Text fontSize="lg" mb="4">
          For inquiries, please contact us at: 
        </Text>
        <Text>Email: contact@tidaltrades.com</Text>
        <Text>Phone: 123-456-7890</Text>
        {/* Additional contact details or a contact form */}
      </Container>

      <Footer />
    </Box>
  );
};

export default Contact;
