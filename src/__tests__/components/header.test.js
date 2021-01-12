import { render, fireEvent } from '@testing-library/react';
import { Header } from '../../components';
import { MemoryRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

describe('<Header />', () => {
  it('renders basic <Header /> with a default background', () => {
    const { container, getByText, getByTestId, queryByTestId } = render(
      <MemoryRouter>
        <Header>
          <Header.Frame>
            <Header.Logo to={ROUTES.HOME} src="./logo.svg" alt="Netflix" />
            <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
          </Header.Frame>
        </Header>
      </MemoryRouter>
    );

    expect(getByText('Sign In')).toBeTruthy();
    expect(getByTestId('header-bg')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the fulll <Header /> ith a background', () => {
    const { container, getByText, getByTestId } = render(
      <MemoryRouter>
        <Header src="joker1" dontShowOnSmallViewPort>
          <Header.Frame>
            <Header.Group>
              <Header.Logo to={ROUTES.HOME} src="/images/logo.svg" alt="Netflix" />
              <Header.TextLink active={'false'} onClick={() => {}}>
                Series
              </Header.TextLink>
              <Header.TextLink active onClick={() => {}}>
                Films
              </Header.TextLink>
            </Header.Group>
            <Header.Group>
              <Header.Search searchTerm="Joker" setSearchTerm={() => {}} />
              <Header.Profile>
                <Header.Picture src="/images/user.png" alt="User" />
                <Header.Dropdown>
                  <Header.Group>
                    <Header.Picture src="/images/user.png" alt="User" />
                    <Header.TextLink>User Test</Header.TextLink>
                  </Header.Group>
                  <Header.Group>
                    <Header.TextLink onClick={() => {}}>Sign out</Header.TextLink>
                  </Header.Group>
                </Header.Dropdown>
              </Header.Profile>
            </Header.Group>
          </Header.Frame>
          <Header.Feature>
            <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
            <Header.Text>Forever alone in a crowd</Header.Text>
            <Header.PlayButton>Play</Header.PlayButton>
          </Header.Feature>
        </Header>
      </MemoryRouter>
    );

    expect(getByTestId('search-input')).toBeTruthy();
    expect(getByTestId('search-input').value).toBe('Joker');
    fireEvent.change(getByTestId('search-input'), {
      target: { value: 'Simpsons' },
    });
    fireEvent.click(getByTestId('search-click'));
    expect(getByText('Series')).toBeTruthy();
    expect(getByText('Films')).toBeTruthy();
    expect(getByText('User Test')).toBeTruthy();
    expect(getByText('Watch Joker Now')).toBeTruthy();
    expect(getByText('Sign out')).toBeTruthy();
    expect(getByText('Forever alone in a crowd')).toBeTruthy();
    expect(getByText('Play')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders basic <Header /> without a background', () => {
    const { container, getByText, getByTestId, queryByTestId } = render(
      <MemoryRouter>
        <Header bg={false}>
          <Header.Frame>
            <Header.Logo to={ROUTES.HOME} src="./logo.svg" alt="Netflix" />
            <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
          </Header.Frame>
        </Header>
      </MemoryRouter>
    );

    expect(getByText('Sign In')).toBeTruthy();
    expect(queryByTestId('header-bg')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
