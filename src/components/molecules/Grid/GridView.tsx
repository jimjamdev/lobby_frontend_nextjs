import { Grid } from '~components/atoms/Grid';

import { TGridView } from './GridView.types';

export function GridView({ children, columns = [1, 4, 6], gridGap = [2, 4, 6] }:TGridView) {
  const gridTemplateColumns = Array.isArray(columns) ? columns.map((column) => `repeat(${column}, 1fr)`) : `repeat(${columns}, 1fr)`;
  console.log('gridTemplateColumns', gridTemplateColumns);

  return <Grid gridTemplateColumns={gridTemplateColumns} gridGap={gridGap}>{children}</Grid>;
}
