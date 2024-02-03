import React from "react";
import { Box, Heading, Text, Link, Divider } from "@chakra-ui/react";

interface BlogPostType {
  id: number;
  title: string;
  excerpt: string;
  // ... other fields that blog post might have
}

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <Box mt="8">
      <Link href={`/blog/${post.id}`}>
        <Heading as="h2" size="md" mb="4">
          {post.title}
        </Heading>
      </Link>

      <Text fontSize="lg" mb="4">
        {post.excerpt}
      </Text>
      <Link href={`/blog/${post.id}`} variant="link">
        Read more
      </Link>
      <Divider my="4" />
    </Box>
  );
};

export default BlogPost;
