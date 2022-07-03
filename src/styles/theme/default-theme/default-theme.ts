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

theme.buttonSizes = {
  md: {
    fontSize: '16px',
    padding: '5px 10px',
    minWidth: '100px',
  },
};

export { theme as defaultTheme };
