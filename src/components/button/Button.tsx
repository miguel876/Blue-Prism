import React, { FC } from 'react'
import { StyledButton } from './button.styles';
import { PropTypes } from './button.types';

const Button: FC<PropTypes> = ({ children, variant = 'outlined', color = 'primary', ...rest }) => {
  return (
    <StyledButton variant={variant} color={color} {...rest}>
        { children }
    </StyledButton>
  )
}

export default Button;
