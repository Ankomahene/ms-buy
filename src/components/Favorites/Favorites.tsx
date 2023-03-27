import React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  UnorderedList,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { BsHeart } from 'react-icons/bs';

export const Favorites = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          color="brand.primary"
          variant="ghost"
          _hover={{
            bgColor: 'transparent',
          }}
        >
          <BsHeart size="0.9rem" /> <Text mx="1">Wishlist</Text>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader color="brand.primary" fontWeight="bold">
          Wishlist
        </PopoverHeader>
        <PopoverBody p="1rem">
          <UnorderedList>
            <ListItem p="0.5rem">Item 1</ListItem>
            <ListItem p="0.5rem">Item 2</ListItem>
            <ListItem p="0.5rem">Item 3</ListItem>
            <ListItem p="0.5rem">Item 4</ListItem>
            <ListItem p="0.5rem">Item 5</ListItem>
            <ListItem p="0.5rem">Item 6</ListItem>
            <ListItem p="0.5rem">Item 7</ListItem>
            <ListItem p="0.5rem">Item 8</ListItem>
            <ListItem p="0.5rem">Item 9</ListItem>
            <ListItem p="0.5rem">Item 10</ListItem>
          </UnorderedList>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
