import { FlatList } from 'react-native';
import { PressableRepositoryItem } from './RepositoryItem/index';
import useRepositories from '../hooks/useRepositories';
import Text from './Text';
import ItemSeparator from './ItemSeparator';

export const RepositoryListContainer = ({ repositories }) => {
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
    />
  );
};

const RepositoryList = ({ orderPrinciple }) => {
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
  const { repositories, loading } = useRepositories({
    order,
    direction,
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
