import { SerializedError } from '@reduxjs/toolkit';

import { TMeta } from '~types/data';
import { TDefaultRecord } from '~types/data/common';

export type TGames = {
  data?: TGame[]
  meta?: TMeta;
  isLoading?: boolean;
  error?: SerializedError | null
};

export type TGame = TDefaultRecord & {
  id: string;
  name: string;
  description: string;
  locale: string;
};
