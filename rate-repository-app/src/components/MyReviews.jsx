import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';
import { FlatList } from 'react-native';
import { MyReviewItem } from './Reviews';
import ItemSeparator from './ItemSeparator';

const MyReviews = () => {
  const { loading, data, refetch } = useQuery(ME, {
    variables: { includeReviews: true },
  });

  if (loading) {
    return null;
  }

  const reviews = data.me.reviews.edges.map((edge) => {
    return edge.node;
  });

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <MyReviewItem {...item} refetch={refetch} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default MyReviews;
