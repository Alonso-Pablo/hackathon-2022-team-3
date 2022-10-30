import { useContext } from 'react';

import { FakeAuthContext } from '@/store/FakeAuthContext';

const useFakeAuth = () => {
  return useContext(FakeAuthContext);
};

export default useFakeAuth;
