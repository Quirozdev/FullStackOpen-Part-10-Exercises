import { ScrollView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import { Link } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
  },
  scrollView: {
    gap: 18,
  },
});

const AppBarTab = ({ tabName, linkTo }) => {
  return (
    <Link to={linkTo}>
      <Text color={'white'} fontWeight={'bold'} fontSize={'subheading'}>
        {tabName}
      </Text>
    </Link>
  );
};

const AppBar = () => {
  const { loading, data } = useQuery(ME);

  if (loading) {
    return null;
  }

  const loggedInUser = data.me;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView} horizontal>
        <AppBarTab tabName="Repositories" linkTo={'/'} />
        {loggedInUser ? (
          <>
            <AppBarTab tabName="Create a review" linkTo={'/create-review'} />
            <AppBarTab tabName="Sign out" linkTo={'/sign-out'} />
          </>
        ) : (
          <AppBarTab tabName="Sign in" linkTo={'/sign-in'} />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
