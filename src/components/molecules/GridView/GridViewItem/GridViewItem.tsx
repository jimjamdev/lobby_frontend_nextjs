import { Grid } from '~components/atoms/Grid';

import { TGridViewItem } from './GridViewItem.types';

export function GridViewItem({ children, span = [1, 4, 6] }: TGridViewItem) {
  const gridTemplateColumns = Array.isArray(span)
    ? span.map((amount) => `span ${amount}`)
    : `span ${span}`;

  return (
    <Grid gridTemplateColumns={gridTemplateColumns}>
      {children}
    </Grid>
  );
}
