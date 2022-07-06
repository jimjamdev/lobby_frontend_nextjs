import { buttonSizesTheme, buttonsTheme } from './buttons';
import { colorsTheme } from './colors';

const theme: any = {};

theme.colors = colorsTheme();
theme.buttons = buttonsTheme({ colors: theme.colors });
theme.buttonSizes = buttonSizesTheme();

export { theme as defaultTheme };
