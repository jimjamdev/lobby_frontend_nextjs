import { TMeta } from '~types/data';
import { TDefaultRecord } from '~types/data/common';

export type TGamesResponse = {
  data?: Array<TGameResponse>;
  meta?: TMeta;
};

export type TGameResponse = TDefaultRecord & {
  id: string;
  name: string;
  description: string;
  locale: string;
};
