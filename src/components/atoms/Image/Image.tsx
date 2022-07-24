// eslint-disable-next-line import/no-named-default
import NextImage from 'next/image';
import styled from 'styled-components';
import { border, compose } from 'styled-system';

import { TImage } from './Image.types';

export const Image = styled(NextImage)<TImage>(compose(border));
