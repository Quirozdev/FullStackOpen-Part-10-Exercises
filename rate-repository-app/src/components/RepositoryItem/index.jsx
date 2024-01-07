import { FlatList, Linking, Pressable, StyleSheet, View } from 'react-native';
import theme from '../../theme';
import RepositoryStatistics from './RepositoryStatistics';
import RepositoryInfo from './RepositoryInfo';
import Text from '../Text';
import { useNavigate, useParams } from 'react-router-native';
import useRepository from '../../hooks/useRepository';
import ReviewItem from '../Reviews';
import ItemSeparator from '../ItemSeparator';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 12,
    gap: 12,
  },
  githubButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    padding: 16,
  },
  githubButtonText: {
    textAlign: 'center',
  },
});

export const RepositoryContainer = () => {
  const { repositoryId } = useParams();
  const { repository, loading } = useRepository(repositoryId);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  const reviews = repository.reviews.edges.map((edge) => edge.node);

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem {...item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => (
        <RepositoryItem
          description={repository.description}
          forksCount={repository.forksCount}
          fullName={repository.fullName}
          language={repository.language}
          ownerAvatarUrl={repository.ownerAvatarUrl}
          ratingAverage={repository.ratingAverage}
          reviewCount={repository.reviewCount}
          stargazersCount={repository.stargazersCount}
          url={repository.url}
          showGithubLink={true}
        />
      )}
      ListHeaderComponentStyle={{ marginBottom: 10 }}
    />
  );
};

export const PressableRepositoryItem = (props) => {
  const navigate = useNavigate();

  const onPress = () => {
    navigate(`/${props.id}`);
  };

  return (
    <Pressable onPress={onPress}>
      <RepositoryItem {...props} />
    </Pressable>
  );
};

const RepositoryItem = ({
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  url,
  ownerAvatarUrl,
  showGithubLink = false,
}) => {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <View testID="repositoryItem" style={styles.container}>
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
      {showGithubLink && (
        <Pressable style={styles.githubButton} onPress={handlePress}>
          <Text
            color={'white'}
            fontWeight={'bold'}
            style={styles.githubButtonText}
          >
            Open in GitHub
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default RepositoryItem;
