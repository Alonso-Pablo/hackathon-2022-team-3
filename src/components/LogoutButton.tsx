import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components';

import { logOut } from '@/services';

export function LogoutButton({
  className = 'bg-blue-primary text-white px-4 py-2 rounded-lg hover:scale-105 transition duration-500 ease-in-out hover:bg-blue-secondary w-fit',
  children,
}: {
  className?: string;
  children?: string | ReactNode;
}) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/signin');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Button className={className} onClick={handleLogout}>
      {children}
    </Button>
  );
}
