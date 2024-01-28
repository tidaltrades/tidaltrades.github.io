import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import BlogPost from './BlogPost';

function App() {
  return (
    <ChakraProvider>
      <BlogPost />
    </ChakraProvider>
  );
}

export default App;
