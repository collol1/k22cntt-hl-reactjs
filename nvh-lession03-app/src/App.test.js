import { render, screen } from '@testing-library/react';
import NvhApp from './NvhApp';

test('renders learn react link', () => {
  render(<NvhApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
