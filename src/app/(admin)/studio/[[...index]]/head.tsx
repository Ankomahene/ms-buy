export { NextStudioHead } from 'next-sanity/studio/head';

// To customize it, use it as a children component:
import { NextStudioHead } from 'next-sanity/studio/head';

export default function CustomStudioHead() {
  return (
    <>
      <title>MS Buy | Admin</title>
      <NextStudioHead favicons={false} />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="shopping_cart.png"
      />
    </>
  );
}
