'use client';
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react';
import React from 'react';

interface IQuantityProps {
  step: number;
  defaultValue: number;
  min: number;
  max: number;
}

export const Quantity = ({ step, defaultValue, min, max }: IQuantityProps) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step,
      defaultValue,
      min,
      max,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack maxW="140px" my="0.5rem">
      <Button {...dec}>-</Button>
      <Input {...input} />
      <Button {...inc}>+</Button>
    </HStack>
  );
};

Quantity.defaultProps = {
  step: 1,
  defaultValue: 1,
  min: 1,
  max: 20,
};
