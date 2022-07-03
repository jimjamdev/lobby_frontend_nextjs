const theme: any = {};

theme.colors = {
  primary: '#0070f3',
};

theme.buttons = {
  primary: {
    color: theme.colors.primary,
    backgroundColor: 'blue',
  },
  secondary: {
    color: 'green',
    backgroundColor: 'yellow',
  },
};

export { theme as defaultTheme };
