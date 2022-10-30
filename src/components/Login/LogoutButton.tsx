import React from 'react';
import { getAuth, signOut } from 'firebase/auth';

function LogoutButton() {
  const auth = getAuth();

  const logOut = () => {
    signOut(auth);
    location.reload();
  };

  return (
    <button
      className="bg-blue-primary text-white px-4 py-2 rounded-lg hover:scale-105 transition duration-500 ease-in-out hover:bg-blue-secondary w-fit"
      onClick={logOut}
    >
      Disconnect
    </button>
  );
}

export default LogoutButton;
