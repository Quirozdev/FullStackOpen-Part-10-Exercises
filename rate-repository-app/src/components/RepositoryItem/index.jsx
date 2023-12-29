import { StyleSheet, View } from 'react-native';
import theme from '../../theme';
import RepositoryStatistics from './RepositoryStatistics';
import RepositoryInfo from './RepositoryInfo';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 12,
    gap: 12,
  },
});

const RepositoryItem = ({
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
}) => {
  return (
    <View style={styles.container}>
      <RepositoryInfo
        description={description}
        fullName={fullName}
        language={language}
        ownerAvatarUrl={ownerAvatarUrl}
      />
      <RepositoryStatistics
        starsCount={stargazersCount}
        forksCount={forksCount}
        ratingAverage={ratingAverage}
        reviewCount={reviewCount}
      />
    </View>
  );
};

export default RepositoryItem;
