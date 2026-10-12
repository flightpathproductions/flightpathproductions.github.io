import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, expect, test } from 'vitest';
import SupporterCard from './SupporterCard';
import type { SupporterData } from '../data/supporters';

const supporter: SupporterData = {
  name: 'Test supporter',
  role: 'Pilot',
  image: '/test-image.jpg',
  quote: 'A test quote.',
};

afterEach(cleanup);

test('renders a square image when requested', () => {
  render(<SupporterCard supporter={supporter} imageShape="square" />);

  expect(screen.getByRole('img', { name: supporter.name })).toHaveClass('aspect-square', 'object-cover');
});

test('renders a natural-proportion image when requested', () => {
  render(<SupporterCard supporter={supporter} imageShape="natural" />);

  expect(screen.getByRole('img', { name: supporter.name })).toHaveClass('w-full', 'h-auto');
  expect(screen.getByRole('img', { name: supporter.name })).not.toHaveClass('aspect-square', 'object-cover');
});