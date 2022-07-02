import { TMeta } from '~types/data';
import { TDefaultRecord } from '~types/data/common';

export type TGames = {
  data?: Array<TGame>;
  meta?: TMeta;
};

export type TGame = TDefaultRecord & {
  id: string;
  name: string;
  description: string;
  locale: string;
};
