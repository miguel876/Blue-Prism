import React, { FC } from 'react'
import { StyledCheckbox } from './checkbox.styles';
import { FormControlLabel, Typography } from '@mui/material';
import { PropTypes } from './checkbox.types';

const Checkbox: FC<PropTypes> = ({ position = 'start', label = '', ...rest }) => {
  return (
    <FormControlLabel
      control={<StyledCheckbox size="small" {...rest} />}
      label={<Typography variant='caption'>{label}</Typography>}
      labelPlacement={position}
    />
  )
}

export default Checkbox;