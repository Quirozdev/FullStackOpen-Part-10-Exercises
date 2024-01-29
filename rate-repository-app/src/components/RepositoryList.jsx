import { FlatList } from 'react-native';
import { PressableRepositoryItem } from './RepositoryItem/index';
import useRepositories from '../hooks/useRepositories';
import Text from './Text';
import ItemSeparator from './ItemSeparator';

export const RepositoryListContainer = ({ repositories, onEndReach }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <PressableRepositoryItem {...item}></PressableRepositoryItem>
      )}
      keyExtractor={(item) => item.id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

const RepositoryList = ({ orderPrinciple, searchQuery }) => {
  const orderParams = {
    LATEST: {
      order: 'CREATED_AT',
      direction: 'DESC',
    },
    LOWEST_RATED: {
      order: 'RATING_AVERAGE',
      direction: 'ASC',
    },
    HIGHEST_RATED: {
      order: 'RATING_AVERAGE',
      direction: 'DESC',
    },
  };

  const { order, direction } = orderParams[orderPrinciple];
  const { repositories, loading, fetchMore } = useRepositories({
    order,
    direction,
    searchQuery,
  });

  const onEndReach = () => {
    fetchMore();
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <RepositoryListContainer
      repositories={repositories}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
