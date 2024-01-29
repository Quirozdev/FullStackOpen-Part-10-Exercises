import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (repositoryId, first) => {
  const { data, loading, fetchMore, refetch, error } = useQuery(
    GET_REPOSITORY,
    {
      fetchPolicy: 'cache-and-network',
      variables: {
        repositoryId,
        first,
      },
    }
  );

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        repositoryId,
      },
    });
  };

  return {
    repository: data?.repository,
    fetchMore: handleFetchMore,
    loading,
    refetch: refetch,
    error,
  };
};

export default useRepository;
