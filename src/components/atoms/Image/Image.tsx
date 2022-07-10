// eslint-disable-next-line import/no-named-default
import NextImage from 'next/image';

import { TImage } from './Image.types';

export function Image({ children, ...props }: TImage) {
  return (
    <NextImage {...props}>{children}</NextImage>
  );
}
