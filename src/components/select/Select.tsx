import React from 'react'
import { StyledSelect, StyledWrapper } from './select.style';
import { FormControl, MenuItem, Typography } from '@mui/material';
import { PropTypes } from './select.types';

const Select = ({ textBefore, data, ...rest }: PropTypes): JSX.Element => {
  return (
    <StyledWrapper>
      <Typography variant="caption" sx={{ mr: 1 }}>{textBefore}</Typography>
        <FormControl sx={{ minWidth: '6rem' }}>
        <StyledSelect 
          displayEmpty
          defaultValue=""
          {...rest}
        >
          {
            data.map(({ value, label }) => <MenuItem key={value} value={value}><Typography variant="caption">{label}</Typography></MenuItem>)
          }
        </StyledSelect>
      </FormControl>
    </StyledWrapper>
  )
}

export default Select;