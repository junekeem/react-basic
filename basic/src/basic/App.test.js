import { render, screen } from '@testing-library/react';
import AppJSX from './App';

test('renders learn react link', () => {
  render(<AppJSX />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
