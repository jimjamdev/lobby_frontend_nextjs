import { buttonSizesTheme, buttonsTheme } from './buttons';
import { colorsTheme } from './colors';
import { radiiTheme } from './radii';

const theme: any = {};

theme.colors = colorsTheme();
theme.buttons = buttonsTheme({ colors: theme.colors });
theme.buttonSizes = buttonSizesTheme();
theme.radii = radiiTheme();

export { theme as defaultTheme };
