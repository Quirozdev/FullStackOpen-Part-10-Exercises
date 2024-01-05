import { StyleSheet, View } from 'react-native';
import Text from './Text';
import theme from '../theme';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  container: {
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
});

const ReviewItem = ({ text, rating, createdAt, user }) => {
  return (
    <View style={styles.container}>
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

export default ReviewItem;
