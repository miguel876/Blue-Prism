import { Paper, styled } from '@mui/material';

export const StyledWrapper = styled('section')``;

export const Item = styled(Paper)(({ theme }) => ({
  border: `0.1rem solid ${theme.palette.primary.main}`,
  padding: '1rem',
  backgroundColor: theme.palette.secondary.main,
}));

export const CenterWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
