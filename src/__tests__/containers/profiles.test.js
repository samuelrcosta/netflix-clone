import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SelectProfileContainer from '../../containers/profiles';

describe('<Profiles />', () => {
  it('renders the <Profiles />', () => {
    const user = { displayName: 'Samuel Costa', photoURL: '2' };
    const setProfile = jest.fn();
    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <SelectProfileContainer user={user} setProfile={setProfile} />
      </MemoryRouter>
    );

    fireEvent.click(getByTestId('user-profile'));
    expect(setProfile).toHaveBeenCalled();
  });
});
