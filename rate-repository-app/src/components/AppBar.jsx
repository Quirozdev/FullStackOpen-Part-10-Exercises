import { Pressable, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
  },
});

const AppBarTab = ({ tabName }) => {
  return (
    <Pressable>
      <Text color={'white'} fontWeight={'bold'} fontSize={'subheading'}>
        {tabName}
      </Text>
    </Pressable>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab tabName="Repositories" />
    </View>
  );
};

export default AppBar;
