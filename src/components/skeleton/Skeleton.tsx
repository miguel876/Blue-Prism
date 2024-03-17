import React, { FC } from 'react'
import { StyledSkeleton } from './skeleton.styles';
import { PropTypes } from './skeleton.types';

const Skeleton:FC<PropTypes> = ({ lines = 1, variant = 'rectangular', height = 110, ...rest }) => {
  return (
    <>
        {[...Array(lines)].map((_, index) => <StyledSkeleton key={index} variant={variant} height={height} data-testid="skeleton-line" {...rest} />)}
    </>
  )
}

export default Skeleton;