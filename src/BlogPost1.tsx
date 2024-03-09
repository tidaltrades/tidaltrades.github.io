import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import Header from "./Header";

const BlogPost1 = () => {
  const post = {
    id: 1,
    title: "Amazon : Strategies for Buying During Market Downturns",
    excerpt: "Learn strategies to navigate market downturns and potentially score big.",
    content: `Market downturns, while unsettling, can create unique opportunities for investors. This post explores various strategies that individuals can employ to navigate through these times effectively. Understanding the market dynamics, recognizing the signs of a potential turnaround, and knowing when to make your move are crucial aspects of mastering the dip. We'll dive into historical data, analyze patterns, and provide actionable insights that could help you turn a market downturn into a significant investment opportunity.`,
    thumbnail: "/assets/blog/dip-buying.jpg",
  };

  return (
    <Box p="4">
      <Header />
      <Box mb="8" bg="gray.100" p="4" borderRadius="md" boxShadow="sm">
        {post.thumbnail && (
          <Image src={post.thumbnail} alt={`${post.title} thumbnail`} width={300} height={200} mb="4" />
        )}
        <Heading as="h1" mb="4">{post.title}</Heading>
        <Text fontSize="lg" mb="4">{post.excerpt}</Text>
        <Text fontSize="md">{post.content}</Text>
      </Box>
    </Box>
  );
};

export default BlogPost1;
