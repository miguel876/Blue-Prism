import colors from './colors';

export default {
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: '1rem',
      },
    },
  },
  MuiButton: {
    variants: [
      {
        props: { variant: 'outlined' as const },
        style: {
          textTransform: 'capitalize' as const,
          border: `0.1rem solid ${colors.primary.main}`,
          padding: '0rem 0.5rem',
          '&:hover': {
            border: `0.1rem solid ${colors.primary.main}`,
          },
        },
      },
    ],
  },
};
