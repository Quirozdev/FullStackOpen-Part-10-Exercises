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

const RepositoryList = () => {
  const { repositories, loading } = useRepositories();

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
