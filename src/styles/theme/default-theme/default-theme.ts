const theme: any = {};

theme.colors = {
  primary: 'pink',
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
  'primary-outline': {
    color: theme.colors.primary,
    backgroundColor: 'white',
    borderWidth: '5px',
    borderStyle: 'solid',
    borderRadius: '500rem',
    borderColor: theme.colors.primary,
  },
};

export { theme as defaultTheme };
