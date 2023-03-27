import { ButtonProps, InputGroupProps, InputProps } from '@chakra-ui/react';

export const inputGroup: InputGroupProps = {
  maxW: '24rem',
  size: 'sm',
};

export const searchBtn: ButtonProps = {
  color: 'white',
  bgColor: 'brand.primaryDark',
  ml: 1,
  borderRadius: 'sm',
  px: '1rem',
  shadow: 'sm',
  _hover: { bgColor: 'brand.primary' },
};
