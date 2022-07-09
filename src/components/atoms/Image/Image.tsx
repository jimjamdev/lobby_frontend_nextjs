import { default as NextImage } from 'next/image';

import { TImage } from './Image.types';

export function Image({ children, ...props }: TImage) {
  return (
    <NextImage {...props}>{children}</NextImage>
  );
}
