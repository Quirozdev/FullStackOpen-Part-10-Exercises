import RepositoryList from './RepositoryList';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import useDebounce from '../hooks/useDebounce';

const RepositoryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [orderPrinciple, setOrderPrinciple] = useState('LATEST');
  const debouncedValue = useDebounce({ value: searchQuery, delay: 500 });

  return (
    <>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        mode="view"
        style={{ backgroundColor: 'white', margin: 16 }}
      />
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
      <RepositoryList
        orderPrinciple={orderPrinciple}
        searchQuery={debouncedValue}
      />
    </>
  );
};

export default RepositoryPage;
