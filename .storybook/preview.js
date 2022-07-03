/* eslint-disable */

import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';
import { defaultTheme } from "../src/styles/theme/default-theme";


// pass ThemeProvider and array of your themes to decorator
addDecorator(withThemes(ThemeProvider, [defaultTheme]));
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
