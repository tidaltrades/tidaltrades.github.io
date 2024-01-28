import React from 'react';
import { Box, Heading, Text, Container } from '@chakra-ui/react';

const BlogPost = () => {
  return (
    <Container maxW="container.md">
      <Heading as="h1" mb={4}>
        Tidal Trades 
      </Heading>
      <Text fontSize="xl">
        Welcome to tidal trades! This site is under construction.
      </Text>
      {/* Add more content here */}
    </Container>
  );
};

export default BlogPost;