import { useQuery } from '@apollo/client';
import { GET_ALL_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ searchQuery, order, direction }) => {
  const { data, loading, fetchMore, refetch } = useQuery(GET_ALL_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      searchKeyword: searchQuery,
      orderBy: order,
      orderDirection: direction,
      first: 5,
    },
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        searchKeyword: searchQuery,
        orderBy: order,
        orderDirection: direction,
      },
    });
  };

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    refetch: refetch,
  };
};

export default useRepositories;
