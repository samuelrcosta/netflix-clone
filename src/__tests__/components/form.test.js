import { render, fireEvent } from '@testing-library/react';
import { Form } from '../../components';
import * as ROUTES from '../../constants/routes';
import { MemoryRouter } from 'react-router-dom';

describe('<Form />', () => {
  it('renders <Form /> with populated data', () => {
    const { container, getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <Form>
          <Form.Title>Sign In now</Form.Title>

          <Form.Base>
            <Form.Input placeholder="Email address" onChange={() => {}} />

            <Form.Input type="password" autoComplete="off" placeholder="Password" onChange={() => {}} />

            <Form.Submit disabled type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </MemoryRouter>
    );

    expect(
      getByText("This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.")
    ).toBeTruthy();
    expect(getByText('Sign up now.')).toBeTruthy();
    expect(getByText('Sign In now')).toBeTruthy();
    expect(getByText('Sign In').disabled).toBeTruthy();
    expect(getByPlaceholderText('Email address')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders <Form /> with an error', () => {
    const { container, getByText, queryByText } = render(
      <Form>
        <Form.Error>Wrong credentials.</Form.Error>

        <Form.Base>
          <Form.Input placeholder="Email address" onChange={() => {}} />

          <Form.Input type="password" autoComplete="off" placeholder="Password" onChange={() => {}} />

          <Form.Submit type="submit">Sign In</Form.Submit>
        </Form.Base>
      </Form>
    );

    expect(getByText('Wrong credentials.')).toBeTruthy();
    expect(queryByText('Sign In').disabled).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
