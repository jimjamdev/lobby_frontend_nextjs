export function buttonsTheme({ colors } : { colors: any }) {
  return {
    primary: {
      color: 'white',
      backgroundColor: colors.primary[7],
      fontWeight: 700,
      borderRadius: '500rem',
      borderStyle: 'solid',
      borderWidth: '5px',
      borderColor: 'transparent',
      '&:hover': {
        background: colors.primary[6],
      },
      '&:focus': {
        background: colors.primary[6],
      },
      '&:active': {
        background: colors.primary[6],
      },
    },
    secondary: {
      color: 'white',
      backgroundColor: colors.secondary[5],
      fontWeight: 700,
      borderRadius: '500rem',
      borderStyle: 'solid',
      borderWidth: '5px',
      borderColor: 'transparent',
      '&:hover': {
        background: colors.secondary[4],
      },
      '&:focus': {
        background: colors.secondary[4],
      },
      '&:active': {
        background: colors.secondary[4],
      },
    },
    alternative: {
      fontWeight: 700,
      color: colors.primary[0],
      backgroundColor: 'white',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderRadius: '500rem',
      borderColor: colors.primary[0],
    },
  };
}

export function buttonSizesTheme() {
  return {
    xl: {
      fontSize: '22px',
      padding: '0 15px',
      minWidth: '250px',
      height: '60px',
    },
    lg: {
      fontSize: '18px',
      padding: '0 10px',
      minWidth: '315px',
      height: '50px',
    },
    md: {
      fontSize: '16px',
      padding: '0 8px',
      minWidth: '180px',
      height: '40px',
    },
    sm: {
      fontSize: '12px',
      padding: '0 8px',
      minWidth: '120px',
      height: '30px',
    },
    xs: {
      fontSize: '11px',
      padding: '0 8px',
      minWidth: '80px',
      height: '25px',
    },
  };
}
