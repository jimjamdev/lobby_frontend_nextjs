import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

export type TModalList = {
  auth?: ComponentType<JSX.Element>;
  gameInfo?: ComponentType<JSX.Element>;
};

export const modalsList: TModalList = {
  auth: dynamic(() => import('../../../components/organisms/modals/AuthModal/AuthModal')),
  gameInfo: dynamic(() => import('../../../components/organisms/modals/GameInfoModal/GameInfoModal')),
};
