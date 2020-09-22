import React from 'react';
import { render } from '@testing-library/react';
import App from './main';

test('renders real Factor link', () => {
  const { getByRole } = render(<App />);
  const linkElement = getByRole('link', { name: "Go to the Real Factor_" });
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('href', 'https://www.factor75.com/');
});
