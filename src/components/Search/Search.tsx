import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
  Text,
  useOutsideClick,
} from '@chakra-ui/react';
import React, {
  MutableRefObject,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import { inputGroup, searchBtn } from './Style';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { IProduct } from '@src/model';
import { groq } from 'next-sanity';
import { client } from '@utils/sanity.client';
import Link from 'next/link';

// TODO: TypeAhead to search for products

const query: string = groq`
    *[_type == "product" && (name match $searchText || description match $searchText) ] {
      ...,
      "id": _id,
      "slug": slug.current,
        "mainImage": mainImage.asset->url,
        category->{
            name,
            "id": _id,
            "image": image.asset->url
        },
        "gallery": gallery[].asset->url
    }
`;

export const Search = () => {
  const ref = useRef<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  useOutsideClick({
    ref: ref,
    handler: () => {
      setIsModalOpen(false);
      setProducts([]);
    },
  });

  const fetchProducts = async () => {
    setIsLoading(true);
    const products: IProduct[] = await client.fetch(query, {
      searchText: `*${searchText}*`,
    });
    setProducts(products);
    setIsLoading(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchText.trim().length >= 3) {
        fetchProducts();
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [searchText]);

  return (
    <Box pos="relative" w="25rem" ref={ref}>
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
          value={searchText}
          onClick={() => setIsModalOpen(true)}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </InputGroup>

      {isModalOpen && (
        <Box
          pos="absolute"
          bg="white"
          shadow="md"
          padding="0.5rem"
          w="100%"
          boxSizing="border-box"
          maxH="500px"
          overflowY="auto"
        >
          {products.length === 0 ? (
            isLoading ? (
              <>Loading...</>
            ) : (
              <> No Products Found</>
            )
          ) : (
            <SearchedProductList products={products} />
          )}
        </Box>
      )}
    </Box>
  );
};

interface SearchedProductListProps {
  products: IProduct[];
}

const SearchedProductList = ({ products }: SearchedProductListProps) => {
  return (
    <>
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.slug}`}>
          <Box
            borderBottomWidth="1px"
            borderBottomColor="gray.200"
            p="2"
            _hover={{ bgColor: 'gray.100' }}
          >
            <Flex align="center">
              <Image
                alt={product.name}
                src={product.mainImage}
                boxSize="24px"
                mr="10px"
              />
              <Text>{product.name}</Text>
            </Flex>
            <Flex justify="flex-end">
              <Tag size="sm">{product.category.name}</Tag>
            </Flex>
          </Box>
        </Link>
      ))}
    </>
  );
};
