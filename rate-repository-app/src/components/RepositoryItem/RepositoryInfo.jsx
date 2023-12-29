import { Image, StyleSheet, View } from 'react-native';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 24,
  },
  image: {
    borderRadius: 6,
  },
  infoContainer: {
    display: 'flex',
    gap: 4,
    flexShrink: 1,
  },
  language: {
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    padding: 6,
    borderRadius: 6,
  },
});

const RepositoryInfo = ({
  ownerAvatarUrl,
  fullName,
  description,
  language,
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: ownerAvatarUrl, width: 60, height: 60 }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text fontWeight="bold">{fullName}</Text>
        <Text color="textSecondary">{description}</Text>
        <Text color="white" style={styles.language}>
          {language}
        </Text>
      </View>
    </View>
  );
};

export default RepositoryInfo;
