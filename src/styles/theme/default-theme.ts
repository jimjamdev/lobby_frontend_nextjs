const theme: any = {};

theme.colors = {
  primary: '#0070f3',
};

theme.buttons = {
  primary: {
    color: theme.colors.primary,
    backgroundColor: 'blue',
    '&:hover': {
      background: 'pink',
    },
  },
  secondary: {
    color: 'green',
    backgroundColor: 'yellow',
    '&:hover': {
      background: 'orange',
    },
  },
};

export { theme as defaultTheme };
