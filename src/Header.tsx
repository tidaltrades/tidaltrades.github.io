import React, { useState } from 'react';
import {
  Heading,
  Flex,
  Link,
  Image,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useMediaQuery
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import logo from './tidallogo.png';

const Header = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      as="header"
      p="4"
      bg="white"
      borderBottom="1px"
      borderColor="gray.200"
      align="center"
      justify="space-between"
    >
      <Image
        src={logo}
        alt="Tidal Trades Logo"
        boxSize={isMobile ? "60px" : "100px"}
      />
      {/* <Heading size="md" flex="1">
        Tidal Trades
      </Heading> */}
      {isMobile ? (
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="outline"
            aria-label="Options"
          />
          <MenuList>
            <MenuItem as={Link} href="/">
              Home
            </MenuItem>
            <MenuItem as={Link} href="#/blog">
              Blog
            </MenuItem>
            <MenuItem as={Link} href="#/research">
              Business Research
            </MenuItem>
            <MenuItem as={Link} href="#/picks">
              2024 Potential Outperformers
            </MenuItem><MenuItem as={Link} href="#/about">
              About
            </MenuItem><MenuItem as={Link} href="#/contact">
              Contact
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Flex>
          <Link href="/" p="2">Home</Link>
          <Link href="#/blog" p="2">Blog</Link>
          <Link href="#/research" p="2">Business Research</Link>
          <Link href="#/picks" p="2">2024 Potential Outperformers</Link>
          <Link href="#/about" p="2">About</Link>
          <Link href="#/contact" p="2">Contact</Link>
        </Flex>
      )}
    </Flex>
  );
};

export default Header;
