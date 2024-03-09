import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog'; 
import Research from './Research'; 
import Picks from './Picks'; 
import About from './About';
import Contact from './Contact';
import BlogPost1 from './BlogPost1';

function App() {
  return (
    <ChakraProvider>
      <HashRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog1/" element={<BlogPost1 />} />
          <Route path="/research" element={<Research />} />  
          <Route path="/picks" element={<Picks />} />  
          <Route path="/about" element={<About />} />  
          <Route path="/contact" element={<Contact />} />       
          {/* can add more routes  */}
        </Routes>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
