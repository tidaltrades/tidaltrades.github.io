import React from "react";
import { Box, Heading, Text, Link, Divider, Image } from "@chakra-ui/react";
import Header from "./Header";

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
      title: "Mastering the Dip: Strategies for Buying During Market Downturns",
      excerpt:
        "Market downturns can be scary, but they also present opportunities for savvy investors. Learn strategies to navigate the dip and potentially score big.",
      content: `Market downturns, while unsettling, can create unique opportunities for investors...
                    ...
                    ... Join us as we dive into the strategies that can help turn market turmoil into an investment advantage.`,
      thumbnail: "/assets/blog/dip-buying.jpg",
    },
    {
      id: 2,
      title: "Identifying High-Growth Potential Stocks: Beyond the Market Buzz",
      excerpt:
        "Don't get swept away by hype. Discover key metrics and analysis techniques to identify truly promising stocks with substantial growth potential.",
      content: `In a world where stock market buzz and hype can often lead investors astray...
                    ...
                    ... this post will equip you with the knowledge to make more informed decisions in the ever-evolving stock market.`,
      thumbnail: "/assets/blog/high-growth-stocks.jpg",
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
          <Link href={`/blog/${post.id}`} variant="link">
            Read More
          </Link>
          <Divider my="4" />
        </Box>
      ))}
    </Box>
  );
};

export default Blog;
