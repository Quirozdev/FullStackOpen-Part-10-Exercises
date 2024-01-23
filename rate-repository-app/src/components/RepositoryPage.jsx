import RepositoryList from './RepositoryList';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

const RepositoryPage = () => {
  const [orderPrinciple, setOrderPrinciple] = useState('LATEST');

  return (
    <>
      <Picker
        selectedValue={orderPrinciple}
        onValueChange={(itemValue) => setOrderPrinciple(itemValue)}
        prompt="Select an item..."
      >
        <Picker.Item label="Latest repositories" value={'LATEST'} />
        <Picker.Item
          label="Highest rated repositories"
          value={'HIGHEST_RATED'}
        />
        <Picker.Item label="Lowest rated repositories" value={'LOWEST_RATED'} />
      </Picker>
      <RepositoryList orderPrinciple={orderPrinciple} />
    </>
  );
};

export default RepositoryPage;
