import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Details from './Details';
import * as useQueryModule from 'hooks/useQuery';

const mockUseQuery = jest.fn() as jest.MockedFunction<typeof useQueryModule.default>;

describe('Details Component', () => {
  beforeEach(() => {
    mockUseQuery.mockReset();
  });

  test('renders loading indicator when isLoading is true', () => {
    mockUseQuery.mockReturnValue({ data: null, isError: null, isLoading: true });

    jest.spyOn(useQueryModule, 'default').mockImplementation(mockUseQuery);

    render(<Details />);

    const loadingIndicator = screen.getByRole('progressbar');
    expect(loadingIndicator).toBeInTheDocument();
  });

  test('renders error message when there is an error', () => {
    mockUseQuery.mockReturnValue({ data: null, isError: new Error('Test error'), isLoading: false });

    jest.spyOn(useQueryModule, 'default').mockImplementation(mockUseQuery);

    render(<Details />);

    const errorMessage = screen.getByText('errors.no-logs');
    expect(errorMessage).toBeInTheDocument();
  });
});
