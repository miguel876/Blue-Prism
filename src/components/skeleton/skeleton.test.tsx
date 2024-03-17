import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Skeleton from './Skeleton';
import { PropTypes } from './skeleton.types';

describe('Skeleton Component', () => {
  const defaultProps: PropTypes = {
    variant: 'rectangular',
    height: 110,
    lines: 3
  };

  test('renders skeleton lines correctly', () => {
    const { getAllByTestId } = render(<Skeleton {...defaultProps} />);
    const skeletonLines = getAllByTestId('skeleton-line');
    expect(skeletonLines).toHaveLength(defaultProps.lines);
    skeletonLines.forEach((line) => {
      expect(line).toHaveStyle(`height: ${defaultProps.height}px`);
    });
  });
});