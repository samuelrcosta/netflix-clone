import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Home } from '../../pages';

test('renders the homepage', () => {
  const { getByText, getAllByPlaceholderText, getAllByText } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(getByText('Unlimited films, TV programmes and more.')).toBeTruthy();
  expect(getByText('Watch anywhere. Cancel at any time.')).toBeTruthy();
  expect(getAllByText('Ready to watch? Enter your email to create or restart your membership')).toBeTruthy();
  expect(getAllByPlaceholderText('Email address')).toBeTruthy();
});
