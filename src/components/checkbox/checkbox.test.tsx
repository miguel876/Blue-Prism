import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Checkbox from './Checkbox';

describe('Checkbox Component', () => {
  it('renders label text correctly', () => {
    const labelText = 'Checkbox Label';
    const { getByText } = render(<Checkbox label={labelText} />);
    const labelElement = getByText(labelText);
    expect(labelElement).toBeInTheDocument();
  });

  it('calls onClick callback when checkbox is clicked', () => {
    const onClickMock = jest.fn();
    const { getByRole } = render(<Checkbox onClick={onClickMock} />);
    const checkboxElement = getByRole('checkbox');
    fireEvent.click(checkboxElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('applies label placement correctly', () => {
    const labelText = 'Checkbox Label';
    const { getByText } = render(<Checkbox label={labelText} position="end" />);
    const labelElement = getByText(labelText);
    expect(labelElement.parentElement).toHaveClass('MuiFormControlLabel-labelPlacementEnd');
  });

  it('uses default position if not specified', () => {
    const labelText = 'Checkbox Label';
    const { getByText } = render(<Checkbox label={labelText} />);
    const labelElement = getByText(labelText);
    expect(labelElement.parentElement).toHaveClass('MuiFormControlLabel-labelPlacementStart');
  });
});