import { Select, styled } from '@mui/material';

export const StyledWrapper = styled('section')`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 0.6rem;
`;

export const StyledSelect = styled(Select)({
  '.MuiInputBase-input': {
    padding: '0.2rem',
  },
});
