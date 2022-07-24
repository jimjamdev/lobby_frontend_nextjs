import React, { FC } from 'react';

import { TVideo } from './Video.type';

export const Video: FC<TVideo> = ({
  url,
  className,
  loop,
  autoPlay,
  muted,
  playsInline,
  type,
  controls,
  width,
  height,
  onClick,
}) => (
  // eslint-disable-next-line jsx-a11y/media-has-caption
  <video
    loop={loop}
    autoPlay={autoPlay}
    muted={muted}
    playsInline={playsInline}
    controls={controls}
    width={width}
    height={height}
    onClick={onClick}
    className={className}
  >
    <source src={url} type={type} />
  </video>
);
