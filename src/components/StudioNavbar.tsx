import { Flex } from '@chakra-ui/react';
import { colors } from '@src/theme';
import Link from 'next/link';
import React, { CSSProperties } from 'react';
import { NavbarProps } from 'sanity';

const linkStyle: CSSProperties = {
  textDecoration: 'none',
  color: colors.brand.primary,
};

export const StudioNavbar = (props: NavbarProps) => {
  return (
    <div>
      <div
        style={{
          padding: '0.6rem 2rem',
          display: 'flex',
          gap: '2rem',
        }}
      >
        <Link href="/" style={linkStyle}>
          Back Home
        </Link>
        <Link href="/products" style={linkStyle}>
          View Products
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};
