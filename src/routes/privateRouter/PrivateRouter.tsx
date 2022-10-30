import { FunctionComponent } from 'react';
import { Navigate } from 'react-router-dom';

import { useUser } from '@/store';

type PrivateProps = {
  children: JSX.Element;
};
const PrivateRouter: FunctionComponent<PrivateProps> = ({ children }) => {
  const { user } = useUser();
  console.log('user', user);
  return user ? children : <Navigate to="/signin" />;
};

export default PrivateRouter;
