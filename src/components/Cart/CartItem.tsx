import {
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  Text,
} from '@chakra-ui/react';
import { AppContext } from '@src/context/AppContext';
import { IItem } from '@src/model';
import { useContext } from 'react';
import { BsTrash } from 'react-icons/bs';

interface CartItemProps {
  item: IItem;
}

//TODO:  add responsiveness

export const CartItem = ({ item }: CartItemProps) => {
  const { increaseCount, decreaseCount, removeItem } = useContext(AppContext);

  return (
    <Grid
      alignItems="center"
      templateColumns="repeat(8, 1fr)"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      my="2"
    >
      <GridItem>
        <Image
          src={item.mainImage}
          boxSize="40px"
          rounded="full"
          borderWidth="1px"
          borderColor="gray.300"
        />
      </GridItem>
      <GridItem colSpan={3}>
        <Text>{item.name}</Text>
      </GridItem>
      <GridItem colSpan={2}>
        <HStack maxW="140px" my="0.5rem">
          <Button onClick={() => decreaseCount('cart', item.id)}>-</Button>
          <Input value={item.count} readOnly={true} />
          <Button onClick={() => increaseCount('cart', item.id)}>+</Button>
        </HStack>
      </GridItem>
      <GridItem textAlign="right">
        <Text fontWeight="bold">$ {item.price * item.count}</Text>
      </GridItem>

      <GridItem textAlign="right">
        <Button
          variant="ghost"
          colorScheme="red"
          onClick={() => removeItem('cart', item.id)}
        >
          <BsTrash />
        </Button>
      </GridItem>
    </Grid>
  );
};
