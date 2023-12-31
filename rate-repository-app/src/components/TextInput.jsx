import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  error: {
    borderWidth: 1,
    borderColor: theme.colors.redish,
    borderStyle: 'solid',
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, error && styles.error];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
