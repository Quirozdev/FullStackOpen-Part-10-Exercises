import { StyleSheet, View } from 'react-native';
import CountComponent from './CountComponent';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  countComponent: {
    flexGrow: 1,
  },
});

const RepositoryStatistics = ({
  starsCount,
  forksCount,
  reviewCount,
  ratingAverage,
}) => {
  return (
    <View style={styles.container}>
      <CountComponent
        style={styles.countComponent}
        count={starsCount}
        text="Stars"
      />
      <CountComponent
        style={styles.countComponent}
        count={forksCount}
        text="Forks"
      />
      <CountComponent
        style={styles.countComponent}
        count={reviewCount}
        text="Reviews"
      />
      <CountComponent
        style={styles.countComponent}
        count={ratingAverage}
        text="Rating"
      />
    </View>
  );
};

export default RepositoryStatistics;
