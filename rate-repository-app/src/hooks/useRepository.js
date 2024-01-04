import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (repositoryId) => {
  const { data, loading, refetch, error } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: {
      repositoryId,
    },
  });

  return { repository: data?.repository, loading, refetch: refetch, error };
};

export default useRepository;
