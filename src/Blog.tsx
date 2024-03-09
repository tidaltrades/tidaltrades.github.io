import React from "react";
import { Box, Heading, Text, Link, Divider, Image, MenuList, MenuItem } from "@chakra-ui/react";
import Header from "./Header";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  thumbnail?: string; // Optional image path
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "2024 Tidal Trades Yearly Outlook",
      excerpt:
        "2024 is going to be a very interesting year starting so close to all-time highs. Big institutions are split with predictions. Some are bearish, some bullish, and an interesting amount are flat.",
      content: `Market downturns, while unsettling, can create unique opportunities for investors...
                    ...
                    ... Join us as we dive into the strategies that can help turn market turmoil into an investment advantage.`,
      
    },
    {
      id: 2,
      title: "THE SOPHISTICATED SETUP",
      excerpt:
        "This setup is used for both swing trading and day trading both $SPY & $QQQ as well as other large-cap equities and various ETFs.",
      content: `In a world where stock market buzz and hype can often lead investors astray...
                    ...
                    ... this post will equip you with the knowledge to make more informed decisions in the ever-evolving stock market.`,
      
    },
    // ... Add additional blog post objects
  ];

  return (
    <Box p="4">
      <Header />
      <Heading as="h1" mb="8">
        Blog
      </Heading>
      {blogPosts.map((post) => (
        <Box
          key={post.id}
          mb="8"
          bg="gray.100" // Light gray background color
          p="4" // Padding for the card
          borderRadius="md" // Rounded corners
          boxShadow="sm" // Box shadow for the floating effect
        >
          {post.thumbnail && (
            <Image
              src={post.thumbnail}
              alt={`${post.title} thumbnail`}
              width={300}
              height={200}
              mb="4"
            />
          )}
          <Heading as="h2" size="md" mb="2">
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </Heading>
          <Text fontSize="lg" mb="4">
            {post.excerpt}
          </Text>
          <ChakraLink as={RouterLink} to={`/blog${post.id}`} variant="link">
            Read More
          </ChakraLink>
          <Divider my="4" />
        </Box>
      ))}
    </Box>
  );
};

export default Blog;
