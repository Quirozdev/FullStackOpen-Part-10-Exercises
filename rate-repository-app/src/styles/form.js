import { Dimensions, StyleSheet } from 'react-native';
import theme from '../theme';

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

export default styles;
