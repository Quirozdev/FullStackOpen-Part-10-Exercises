import { Alert, Pressable, StyleSheet, View } from 'react-native';
import Text from './Text';
import theme from '../theme';
import { format } from 'date-fns';
import { Link } from 'react-router-native';
import useDeleteReview from '../hooks/useDeleteReview';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flexDirection: 'column',
  },
  subcontainer: {
    backgroundColor: theme.colors.white,
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    padding: 16,
  },
  rating: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderStyle: 'solid',
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    textAlign: 'center',
    verticalAlign: 'middle',
    alignSelf: 'flex-start',
  },
  reviewRightInfo: {
    flexShrink: 1,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    alignSelf: 'center',
    marginBottom: 12,
  },
  button: {
    borderRadius: 6,
    backgroundColor: theme.colors.primary,
    padding: 16,
  },
});

const ReviewItem = ({ text, rating, createdAt, user }) => {
  return (
    <View style={styles.subcontainer}>
      <Text
        color={'primary'}
        fontWeight={'bold'}
        fontSize={'subheading'}
        style={styles.rating}
      >
        {rating}
      </Text>
      <View style={styles.reviewRightInfo}>
        <Text fontWeight={'bold'} fontSize={'subheading'}>
          {user.username}
        </Text>
        <Text color={'textSecondary'}>{format(createdAt, 'dd.MM.yyyy')}</Text>
        <Text>{text}</Text>
      </View>
    </View>
  );
};

export const MyReviewItem = ({
  id,
  text,
  rating,
  createdAt,
  repository,
  refetch,
}) => {
  const [deleteReview] = useDeleteReview();

  return (
    <View style={{ backgroundColor: 'white' }}>
      <View style={styles.subcontainer}>
        <Text
          color={'primary'}
          fontWeight={'bold'}
          fontSize={'subheading'}
          style={styles.rating}
        >
          {rating}
        </Text>
        <View style={styles.reviewRightInfo}>
          <Text fontWeight={'bold'} fontSize={'subheading'}>
            {repository.ownerName}/{repository.name}
          </Text>
          <Text color={'textSecondary'}>{format(createdAt, 'dd.MM.yyyy')}</Text>
          <Text>{text}</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable
          style={{ ...styles.button, backgroundColor: theme.colors.primary }}
        >
          <Link to={`/${repository.id}`}>
            <Text
              color={'white'}
              fontSize={theme.fontSizes.subheading}
              fontWeight={theme.fontWeights.bold}
            >
              View repository
            </Text>
          </Link>
        </Pressable>
        <Pressable
          style={{ ...styles.button, backgroundColor: theme.colors.redish }}
          onPress={() => {
            Alert.alert(
              'Delete review',
              'Are you sure you want to delete this review?',
              [
                {
                  text: 'Cancel',
                  style: 'cancel',
                },
                {
                  text: 'DELETE',
                  onPress: async () => {
                    await deleteReview({ id });
                    refetch();
                  },
                },
              ]
            );
          }}
        >
          <Text
            color={'white'}
            fontSize={theme.fontSizes.subheading}
            fontWeight={theme.fontWeights.bold}
          >
            Delete review
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ReviewItem;
