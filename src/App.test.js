import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();  
});

test('renders learn react reload', () => {
  render(<App />);
  const linkElement2 = screen.getByText(/reload/i);
  expect(linkElement2).toBeInTheDocument()
});

