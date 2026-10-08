import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders the shared layout around the current page', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Women at 36,000 feet/ })).toBeInTheDocument();
  expect(screen.getByText(/Flight Path Productions/)).toBeInTheDocument();
});
