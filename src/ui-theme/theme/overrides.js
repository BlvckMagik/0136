import palette from './palette';

const overrides = {
  MuiButton: {
    defaultProps: {
      variant: 'contained',
    },
    styleOverrides: {
      root: {
        fontFamily: 'PT Sans',
        textTransform: 'none',
        fontWeight: 400,
        width: '50%',
        height: '43px',
        borderRadius: '80px',
        backgroundColor: palette.primary.dark,

        '&.target': {
          backgroundColor: palette.primary.dark,
        },
      },
    },
  },
};

export default overrides;
