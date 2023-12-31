const { useContext } = require('react');
const {
  default: AuthStorageContext,
} = require('../contexts/AuthStorageContext');

const useAuthStorage = () => {
  return useContext(AuthStorageContext);
};

export default useAuthStorage;
