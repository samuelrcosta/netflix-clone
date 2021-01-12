import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import FirebaseContext from '../../contexts/firebase';
import { SignUp } from '../../pages';

describe('<SignUp />', () => {
  it('renders the sign up page with a form submission', async () => {
    const firebase = {
      auth: jest.fn(() => ({
        createUserWithEmailAndPassword: jest.fn(() =>
          Promise.resolve({ user: { updateProfile: jest.fn(() => Promise.resolve('I am signed up!')) } })
        ),
      })),
    };

    const { queryByTestId, getByPlaceholderText, getByTestId } = render(
      <MemoryRouter>
        <FirebaseContext.Provider value={{ firebase }}>
          <SignUp />
        </FirebaseContext.Provider>
      </MemoryRouter>
    );

    await act(async () => {
      await fireEvent.change(getByPlaceholderText('First Name'), {
        target: { value: 'Samuel' },
      });

      await fireEvent.change(getByPlaceholderText('Email address'), {
        target: { value: 'samu.rcosta@gmail.com' },
      });

      await fireEvent.change(getByPlaceholderText('Password'), {
        target: { value: 'pass123' },
      });

      fireEvent.click(getByTestId('sign-up'));

      expect(getByPlaceholderText('First Name').value).toBe('Samuel');
      expect(getByPlaceholderText('Email address').value).toBe('samu.rcosta@gmail.com');
      expect(getByPlaceholderText('Password').value).toBe('pass123');
      expect(queryByTestId('error')).toBeFalsy();
    });
  });
});
