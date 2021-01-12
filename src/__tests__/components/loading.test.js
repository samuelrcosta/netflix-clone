import { render, fireEvent } from '@testing-library/react';
import { Loading } from '../../components';

describe('<Loading />', () => {
  it('render the <Loading /> component', () => {
    const { container, getByTestId } = render(<Loading src="/images/test.png" data-testid="loading" />);

    expect(getByTestId('loading')).toBeTruthy();
    expect(getByTestId('loading-picture')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <Loaing.ReleaseBody />', () => {
    const { container, getByTestId } = render(<Loading.ReleaseBody />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
