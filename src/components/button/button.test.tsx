import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with correct text', () => {
    const buttonText: string = 'Click Me';
    const { getByText }: RenderResult = render(<Button>{buttonText}</Button>);
    const buttonElement: HTMLElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onClick callback when clicked', () => {
    const onClickMock: jest.Mock = jest.fn();
    const { getByText }: RenderResult = render(<Button onClick={onClickMock}>Click Me</Button>);
    const buttonElement: HTMLElement = getByText('Click Me');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('calls onMouseDown callback when mouse down event occurs', () => {
    const onMouseDownMock: jest.Mock = jest.fn();
    const { getByText }: RenderResult = render(<Button onMouseDown={onMouseDownMock}>Click Me</Button>);
    const buttonElement: HTMLElement = getByText('Click Me');
    fireEvent.mouseDown(buttonElement);
    expect(onMouseDownMock).toHaveBeenCalledTimes(1);
  });
});
