import React, { FC } from 'react'
import { StyledCard } from './card.styles'
import { ButtonBase } from '@mui/material';
import { PropTypes } from './card.types';

const Card: FC<PropTypes> = ({ children, onClick, retired = false, ...rest }) => {
  return (
    <StyledCard sx={{ backgroundColor: (theme) => retired ? theme.palette.primary.light : theme.palette.secondary.main }} {...rest}>
      <ButtonBase onClick={(evt) => onClick?.(evt)}>
          { children }
      </ButtonBase>
    </StyledCard>
  )
}

export default Card;