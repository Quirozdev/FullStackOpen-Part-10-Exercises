import { ScrollView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import { Link } from 'react-router-native';

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
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView} horizontal>
        <AppBarTab tabName="Repositories" linkTo={'/'} />
        <AppBarTab tabName="Sign in" linkTo={'/sign-in'} />
      </ScrollView>
    </View>
  );
};

export default AppBar;
