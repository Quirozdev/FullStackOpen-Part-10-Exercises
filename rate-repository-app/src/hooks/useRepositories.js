import { useQuery } from '@apollo/client';
import { GET_ALL_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { data, loading, refetch } = useQuery(GET_ALL_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  return { repositories: data?.repositories, loading, refetch: refetch };
};

export default useRepositories;
