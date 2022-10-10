import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders React Holy Grail', () => {
  render(<App />);
  const linkElement = screen.getByText(/React Holy Grail/i);
  expect(linkElement).toBeInTheDocument();
});
