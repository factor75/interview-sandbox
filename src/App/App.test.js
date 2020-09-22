import React from 'react';
import { render } from '@testing-library/react';
import App from './main';

test('renders real Factor link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Go to the Real Factor_/i);
  expect(linkElement).toBeInTheDocument();
});
