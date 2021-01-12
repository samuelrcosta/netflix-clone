import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import FirebaseContext from '../../contexts/firebase';
import { SignIn } from '../../pages';

describe('<SignIn />', () => {
  it('renders the sign in page with a form submission', async () => {
    const firebase = {
      auth: jest.fn(() => ({
        signInWithEmailAndPassword: jest.fn(() => Promise.resolve('I am signed in!')),
      })),
    };

    const { queryByTestId, getByPlaceholderText, getByTestId } = render(
      <MemoryRouter>
        <FirebaseContext.Provider value={{ firebase }}>
          <SignIn />
        </FirebaseContext.Provider>
      </MemoryRouter>
    );

    await act(async () => {
      await fireEvent.change(getByPlaceholderText('Email address'), {
        target: { value: 'samu.rcosta@gmail.com' },
      });

      await fireEvent.change(getByPlaceholderText('Password'), {
        target: { value: 'pass123' },
      });

      fireEvent.click(getByTestId('sign-in'));

      expect(getByPlaceholderText('Email address').value).toBe('samu.rcosta@gmail.com');
      expect(getByPlaceholderText('Password').value).toBe('pass123');
      expect(queryByTestId('error')).toBeFalsy();
    });
  });
});
