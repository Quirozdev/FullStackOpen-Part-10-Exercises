import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import { SignInContainer } from '../../components/SignIn';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const fnMock = jest.fn();
      render(<SignInContainer onSubmit={fnMock} />);

      fireEvent.changeText(
        screen.getByPlaceholderText('Username'),
        'testing wow'
      );

      fireEvent.changeText(
        screen.getByPlaceholderText('Password'),
        'ultrasecret'
      );

      fireEvent.press(screen.getByText('Sign in'));

      await waitFor(() => {
        expect(fnMock).toHaveBeenCalledTimes(1);

        expect(fnMock.mock.calls[0][0]).toEqual({
          username: 'testing wow',
          password: 'ultrasecret',
        });
      });
    });
  });
});
