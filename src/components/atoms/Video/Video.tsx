import React from 'react';

import { TVideo } from './Video.type';

export function Video({
  src,
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
}: TVideo) {
  return (
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
      <source src={src} type={type} />
    </video>
  );
}
