import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';
import Text from './Text';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-native';

const SignOut = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  useEffect(() => {
    signOut();
  }, []);

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    navigate('/sign-in');
  };

  return <Text>Logging out...</Text>;
};

export default SignOut;
