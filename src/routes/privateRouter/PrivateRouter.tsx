//@ts-nocheck
import React, { FunctionComponent } from 'react';
import { Navigate } from 'react-router';
import { UserAuth } from '../../context/AuthContext';
import useFakeAuth from '../../hooks/useFakeAuth';
type PrivateProps = {
  children: JSX.Element;
};
const PrivateRouter: FunctionComponent<PrivateProps> = ({ children }) => {
  const { user } = UserAuth();
  console.log('user', user);
  return user ? children : <Navigate to="/signin" />;
};

export default PrivateRouter;
