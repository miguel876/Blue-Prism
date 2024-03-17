import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

describe('Header Component', () => {
  test('renders header title', () => {
    const { getByText } = render(<Header />);
    const titleElement = getByText(/schedules/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('opens drawer when menu icon is clicked', () => {
    const { getByLabelText, getByRole } = render(<Header />);
    const menuIconButton = getByLabelText('menu-icon');
    fireEvent.click(menuIconButton);
    const drawerElement = getByRole('presentation');
    expect(drawerElement).toBeInTheDocument();
  });

  test('closes drawer when menu icon is clicked again', () => {
    const { getByLabelText, queryByRole } = render(<Header />);
    const menuIcon = getByLabelText('menu-icon');
    fireEvent.click(menuIcon);
    fireEvent.click(menuIcon); 
    const drawer = queryByRole('drawer');
    expect(drawer).not.toBeInTheDocument();
  });
});