import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';

describe('Card Component', () => {
  const buttonText = 'Click Me';
  test('renders children', () => {
    const { getByText } = render(<Card><span>{buttonText}</span></Card>);
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onClick callback when card is clicked', () => {
    const onClickMock = jest.fn();
    const { container } = render(<Card onClick={onClickMock}><span>{buttonText}</span></Card>);
    const cardElement = container.firstChild?.firstChild as HTMLElement;
    fireEvent.click(cardElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
