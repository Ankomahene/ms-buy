import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';
import { AppContext } from '@src/context/AppContext';
import { useContext } from 'react';
import { BsHeart } from 'react-icons/bs';
import { WishlistItem } from './WishlistItem';

export const Wishlist = () => {
  const {
    state: { wishlist },
  } = useContext(AppContext);

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
          {wishlist.length === 0 ? (
            <>Your Wishlist is Empty</>
          ) : (
            wishlist.map((item) => <WishlistItem key={item.id} item={item} />)
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
