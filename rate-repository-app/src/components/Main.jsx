import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { StatusBar } from 'expo-status-bar';
import theme from '../theme';
import { Navigate, Route, Routes } from 'react-router-native';
import SignIn from './SignIn';
import SignOut from './SignOut';
import { RepositoryContainer } from './RepositoryItem';
import CreateReview from './ReviewForm';
import SignUp from './SignUp';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.greyish,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/:repositoryId" element={<RepositoryContainer />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/create-review" element={<CreateReview />} />
        <Route path="/sign-out" element={<SignOut />} />
        <Route path="*" element={<Navigate to={'/'} replace />} />
      </Routes>
      <StatusBar style="auto" />
    </View>
  );
};

export default Main;
