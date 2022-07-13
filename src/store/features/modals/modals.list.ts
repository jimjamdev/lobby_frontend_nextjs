import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

export type TModalList = {
  gameInfo?: ComponentType<any>;
};

export const modalsList: TModalList = {
  gameInfo: dynamic(
    () => import('../../../components/organisms/modals/GameInfoModal/GameInfoModal'),
  ),
};