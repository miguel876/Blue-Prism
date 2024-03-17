import { styled } from '@mui/material';

export const StyledWrapper = styled('section')(({ theme }) => ({
  height: 'calc(100vh - 6rem)',
  overflowY: 'auto',
  paddingRight: '1rem',

  [theme.breakpoints.down('sm')]: {
    height: '17rem',
  },

  '&::-webkit-scrollbar': {
    width: 10,
  },
  '&::-webkit-scrollbar-track': {
    background: theme.palette.primary.light,
    borderRadius: 8,
  },
  '&::-webkit-scrollbar-thumb': {
    background: theme.palette.primary.contrastText,
    borderRadius: 8,
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: theme.palette.primary.dark,
  },
}));

export const StyledButtonContainer = styled('div')`
  display: flex;
  justify-content: flex-end;
`;

export const StyledFilterWrapper = styled('div')`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ErrorContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
