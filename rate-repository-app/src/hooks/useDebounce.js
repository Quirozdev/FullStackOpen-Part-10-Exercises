import { useState } from 'react';

let timeoutId;

const useDebounce = ({ value, delay }) => {
  const [debouncedValue, setDebouncedValue] = useState('');

  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(() => {
    setDebouncedValue(value);
  }, delay);

  return debouncedValue;
};

export default useDebounce;
