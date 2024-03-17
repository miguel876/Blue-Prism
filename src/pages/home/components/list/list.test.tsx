import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import List from './List';
import * as useQueryModule from 'hooks/useQuery';
import * as useMutationModule from 'hooks/useMutation';
import { toast } from 'react-toastify'

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
  },
}))

describe('List Component', () => {
  beforeEach(() => {
    // Reset mock functions before each test
    jest.clearAllMocks();
  });

  test('renders loading skeleton when data is loading', () => {
    const mockUseQuery = jest.spyOn(useQueryModule, 'default');
    mockUseQuery.mockReturnValue({ data: null, isLoading: true, isError: null });

    render(<List />);

    const loadingSkeletons = screen.getAllByTestId('skeleton-line');
    expect(loadingSkeletons).toHaveLength(6);
  });

  test('renders error message when there is an error', () => {
    const mockUseQuery = jest.spyOn(useQueryModule, 'default');
    mockUseQuery.mockReturnValue({ data: null, isLoading: false, isError: new Error('Test error') });

    render(<List />);

    expect(screen.getByText('errors.no-schedules')).toBeInTheDocument();
  });

  test('retires a schedule when button is clicked', async () => {
    const testData = [{ id: 1, title: 'Test Title', detail: 'Test Detail', retired: false }];
    const mockUseQuery = jest.spyOn(useQueryModule, 'default');
    mockUseQuery.mockReturnValue({ data: testData, isLoading: false, isError: null, refetch: jest.fn() });

    const mockUseMutation = jest.spyOn(useMutationModule, 'default');
    mockUseMutation.mockReturnValue([jest.fn(), { isSuccess: true, isError: null, isLoading: false, data: null }]);

    render(<List />);

    const retireButton = screen.getByText('labels.retire');
    fireEvent.click(retireButton);

    expect(mockUseMutation).toHaveBeenCalledWith('PUT');

    expect(toast.success).toHaveBeenCalled()

  });

});
