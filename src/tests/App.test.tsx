import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders list all users link', () => {
  render(<App />);
  const linkElement = screen.getByText(/List all users/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders search for user link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Search for user/i);
  expect(linkElement).toBeInTheDocument();
});
