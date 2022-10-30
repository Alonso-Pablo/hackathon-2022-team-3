import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUser } from '@/store';

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();
  const navigate = useNavigate();

  if (!user) {
    navigate('signin');
  }
  return children;
};
