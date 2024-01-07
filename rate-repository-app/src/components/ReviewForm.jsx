import { Formik } from 'formik';
import * as yup from 'yup';
import { Alert, Pressable, View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import styles from '../styles/form';
import Text from './Text';
import useCreateReview from '../hooks/useCreateReview';
import { useNavigate } from 'react-router-native';

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Owner name is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup
    .number()
    .typeError('Rating needs to be a number')
    .min(0, 'Rating needs to be 0 or higher')
    .max(100, 'Rating needs to be 100 or less')
    .required('Rating is required'),
  text: yup.string().optional(),
});

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name={'ownerName'}
        placeholder={'Repository owner name'}
        style={styles.input}
      />
      <FormikTextInput
        name={'repositoryName'}
        placeholder={'Repository name'}
        style={styles.input}
      />
      <FormikTextInput
        name={'rating'}
        placeholder={'Rating between 0 and 100'}
        style={styles.input}
        keyboardType="number-pad"
      />
      <FormikTextInput
        name={'text'}
        placeholder={'Review'}
        style={styles.input}
        multiline
      />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text
          color="white"
          fontWeight="bold"
          fontSize="subheading"
          style={styles.buttonText}
        >
          Create a review
        </Text>
      </Pressable>
    </View>
  );
};

const ReviewFormContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const repositoryId = await createReview({
        ...values,
        rating: Number(values.rating),
      });
      navigate(`/${repositoryId}`);
    } catch (error) {
      console.log(error);
      Alert.alert('Error', error.message);
    }
  };

  return <ReviewFormContainer onSubmit={onSubmit} />;
};

export default CreateReview;
