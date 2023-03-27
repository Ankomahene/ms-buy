import { SearchIcon } from '@chakra-ui/icons';
import { Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';
import { inputGroup, searchBtn } from './Style';

export const Search = () => {
  return (
    <InputGroup {...inputGroup}>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.400" />}
      />
      <Input
        type="text"
        placeholder="Search..."
        focusBorderColor="brand.primaryLight"
        borderWidth="1px"
        borderColor="gray.400"
      />
      <Button {...searchBtn}>Search</Button>
    </InputGroup>
  );
};
