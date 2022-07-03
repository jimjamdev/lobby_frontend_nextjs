const theme: any = {};

theme.colors = {
  primary: ['#007E6E', 'blue', 'green', 'purple', 'yellow'],
};

theme.buttons = {
  primary: {
    color: 'white',
    backgroundColor: theme.colors.primary[0],
    fontWeight: 700,
    borderRadius: '500rem',
    borderStyle: 'solid',
    borderWidth: '5px',
    borderColor: 'transparent',
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
  alternative: {
    color: theme.colors.primary,
    backgroundColor: 'white',
    borderWidth: '5px',
    borderStyle: 'solid',
    borderRadius: '500rem',
    borderColor: theme.colors.primary,
  },
};

theme.buttonSizes = {
  xl: {
    fontSize: '22px',
    padding: '0 15px',
    minWidth: '250px',
    minHeight: '60px',
  },
  lg: {
    fontSize: '18px',
    padding: '0 10px',
    minWidth: '315px',
    minHeight: '50px',
  },
  md: {
    fontSize: '16px',
    padding: '0 8px',
    minWidth: '180px',
    minHeight: '40px',
  },
  sm: {
    fontSize: '12px',
    padding: '0 8px',
    minWidth: '120px',
    minHeight: '30px',
  },
  xs: {
    fontSize: '11px',
    padding: '0 8px',
    minWidth: '80px',
    minHeight: '25px',
  },
};

export { theme as defaultTheme };
