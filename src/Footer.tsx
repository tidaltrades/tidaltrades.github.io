// Footer.js
import React from 'react';
import { Box, Text, VStack, Heading, Link, SimpleGrid } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" bg="white" color="gray.700" borderTop="1px" borderColor="gray.200" p="4">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} maxW="container.xl" mx="auto" textAlign="center" justifyContent="center">
        {/* Main Navigation */}
        <VStack spacing={3}>
          <Heading size="sm">Main Navigation</Heading>
          <Link href="/">Home</Link>
          <Link href="#/blog">Blog</Link>
          <Link href="#/research">Research</Link>
          <Link href="#/picks">Picks</Link>
          <Link href="#/about">About</Link>
          <Link href="#/contact">Contact</Link>
        </VStack>

        {/* Legal */}
        <VStack spacing={3}>
          <Heading size="sm">Legal</Heading>
          <Link href="/">Terms & Conditions</Link>
        </VStack>

        {/* Follow Us */}
        <VStack spacing={3}>
          <Heading size="sm">Follow Us</Heading>
          {/* Social Media Links or Icons */}
          {/* ... */}
        </VStack>
      </SimpleGrid>

      <Text align="center" fontSize="sm" mt="8">
        © 2024 Tidal Trades. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
