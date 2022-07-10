import { buttonSizesTheme, buttonsTheme } from './buttons';
import { colorsTheme } from './colors';
import { radiiTheme } from './radii';
import { textSizesTheme } from './text';

const theme: any = {};

theme.colors = colorsTheme();
theme.textSize = textSizesTheme();
theme.buttons = buttonsTheme({ colors: theme.colors });
theme.buttonSizes = buttonSizesTheme();
theme.radii = radiiTheme();

export { theme as defaultTheme };
