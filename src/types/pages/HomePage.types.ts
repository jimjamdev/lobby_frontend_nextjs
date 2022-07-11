import { TGames } from '~types/data';
import { TPage } from '~types/pages/Page.types';

export type THomePage = TPage & {
  defaultData: {
    games: TGames
  }
};
