import { View } from 'react-native';
import Text from '../Text';
import { suffixThousandNumbers } from '../../utils/utils';

const CountComponent = ({ count, text, style, ...props }) => {
  return (
    <View style={style} {...props}>
      <Text fontWeight={'bold'} style={{ textAlign: 'center' }}>
        {suffixThousandNumbers(count)}
      </Text>
      <Text color={'textSecondary'} style={{ textAlign: 'center' }}>
        {text}
      </Text>
    </View>
  );
};

export default CountComponent;
