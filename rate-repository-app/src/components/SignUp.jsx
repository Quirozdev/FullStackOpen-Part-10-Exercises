import { Alert, Pressable, View } from 'react-native';
import styles from '../styles/form';
import { Formik } from 'formik';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Username must be at least 5 characters long')
    .max(30, 'Username must be 30 characters long or less')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters long')
    .max(50, 'Password must be 50 characters long or less')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'The passwords must match')
    .required('Password confirmation is required'),
});

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name={'username'}
        placeholder={'Username'}
        style={styles.input}
      />
      <FormikTextInput
        name={'password'}
        placeholder={'Password'}
        style={styles.input}
      />
      <FormikTextInput
        name={'passwordConfirmation'}
        placeholder={'Password confirmation'}
        style={styles.input}
      />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text
          color={'white'}
          fontWeight={'bold'}
          fontSize={'subheading'}
          style={styles.buttonText}
        >
          Sign up
        </Text>
      </Pressable>
    </View>
  );
};

const SignUpContainer = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signUp({ username, password });
      await signIn({ username, password });
      navigate('/');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignUp = () => {
  return <SignUpContainer />;
};

export default SignUp;
