import { Pressable, StyleSheet, View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Dimensions } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import Text from './Text';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    height: Dimensions.get('window').height,
    padding: 16,
    gap: 16,
  },
  input: {
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
    padding: 12,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 12,
    borderRadius: 4,
  },
  buttonText: {
    textAlign: 'center',
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="username"
        placeholder="Username"
        style={styles.input}
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text
          color="white"
          fontWeight="bold"
          fontSize="subheading"
          style={styles.buttonText}
        >
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

export const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signIn({ username, password });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
