import { Button } from '@chakra-ui/react';
import { AppContext } from '@src/context/AppContext';
import { IProduct } from '@src/model';
import React, { useContext } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

interface IAddToWishlistButtonProps {
  product: IProduct;
}

export const AddToWishlistButton = ({ product }: IAddToWishlistButtonProps) => {
  const { addItem, removeItem, isAdded } = useContext(AppContext);

  return (
    <>
      {isAdded('wishlist', product.id) ? (
        <Button
          pos="absolute"
          variant="ghost"
          bgColor="transparent"
          color="red.400"
          _hover={{ bgColor: 'transparent' }}
          rounded="full"
          title="Remove from Wishlist"
          onClick={() => removeItem('wishlist', product.id)}
        >
          <BsHeartFill />
        </Button>
      ) : (
        <Button
          pos="absolute"
          variant="ghost"
          bgColor="transparent"
          color="red.400"
          _hover={{ bgColor: 'transparent' }}
          rounded="full"
          title="Add to Wishlist"
          onClick={() => addItem('wishlist', product)}
        >
          <BsHeart />
        </Button>
      )}
    </>
  );
};
