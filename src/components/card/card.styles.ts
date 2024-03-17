import { ButtonBase, Card, styled } from '@mui/material';
import theme from 'theme/theme';

export const StyledButtonBase = styled(ButtonBase)`
  display: block;
`;

export const StyledCard = styled(Card)({
  marginBottom: '1rem',
  border: `0.1rem solid ${theme.palette.primary.main}`,
  cursor: 'pointer',

  '& > .MuiButtonBase-root': {
    padding: '1rem',
    width: '100%',
    display: 'block',

    '& > *': {
      width: '100%',
      textAlign: 'start',
    },
  },
});
