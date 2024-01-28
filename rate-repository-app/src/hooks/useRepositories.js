import { useQuery } from '@apollo/client';
import { GET_ALL_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ searchQuery, order, direction }) => {
  const { data, loading, refetch } = useQuery(GET_ALL_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      searchKeyword: searchQuery,
      orderBy: order,
      orderDirection: direction,
    },
  });

  return { repositories: data?.repositories, loading, refetch: refetch };
};

export default useRepositories;
