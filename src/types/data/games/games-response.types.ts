import { TMeta } from '~types/data';

export type TGamesResponse = {
  data: [TGameResponse];
  meta: TMeta;
};

export type TGameResponse = {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
};
