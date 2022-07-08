// eslint-disable-next-line import/no-named-default
import { default as NextLink } from 'next/link';

import { TLink } from './Link.types';

export function Link({ children, href, ...props }: TLink) {
  return (
    <NextLink href={href} passHref>
      <a {...props}>{children}</a>
    </NextLink>
  );
}
