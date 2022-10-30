import { useEffect } from 'react';

import { useUser } from '@/store';
import { auth } from '@/services/firebase';

import { onAuthStateChanged } from 'firebase/auth';

import AppRouter from '@/routes/AppRouter';

function App() {
  const { change } = useUser();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      change(currentUser);
    });
  }, []);

  return <AppRouter />;
}

export default App;
