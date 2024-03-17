import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Select from './Select';

describe('Select Component', () => {
  test('renders textBefore correctly', () => {
    const textBefore = 'Sort by:';
    render(<Select textBefore={textBefore} data={[]} />);
    const textElement = screen.getByText(textBefore);
    expect(textElement).toBeInTheDocument();
  });

  test('renders options correctly', () => {
    const data = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
    ];
    render(<Select textBefore="Sort by:" data={data} />);
    const selectButton = screen.getByRole('combobox');
    fireEvent.mouseDown(selectButton);
    const option1 = screen.getByText('Option 1');
    const option2 = screen.getByText('Option 2');
    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
  });
});
