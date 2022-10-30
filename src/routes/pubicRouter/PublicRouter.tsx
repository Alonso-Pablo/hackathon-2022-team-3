import { ReactNode } from 'react';
import { Navigate } from 'react-router';

import { useUser } from '@/store';

interface Props {
  children: ReactNode;
}

export const PublicRouter = ({ children }: Props) => {
  const { user } = useUser();
  return user ? <Navigate to="/" /> : children;
};
