import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the shared layout around the current page', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'About Page' })).toBeInTheDocument();
  expect(screen.getByText(/Flight Path Productions/)).toBeInTheDocument();
});
