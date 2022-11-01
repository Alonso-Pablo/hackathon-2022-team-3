import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import googleLogo from '@/assets/google.svg';
import { useUser } from '@/store';
import { googleSignIn } from '@/services';
import { Button } from '@/components';

function SignInGoogle() {
  const { user } = useUser();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState<boolean>(false);

  const handleGoogleSignIn = async () => {
    try {
      setAuthing(true);
      await googleSignIn();
    } catch (error) {
      console.log(error);
      setAuthing(false);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/');
    }
  }, [user]);

  return (
    <div>
      <p className="text-gray-500 text-center text-sm pt-2 dark:text-gray-50">
        You can log-in google
      </p>
      <Button
        className="px-4 py-2 rounded-lg active:scale-110 transition-all duration-300 ease-in disabled:grayscale dark:bg-gray-800"
        onClick={handleGoogleSignIn}
        disabled={authing}
      >
        <img
          src={googleLogo}
          alt="Google"
          className="h-8 w-fit drop-shadow-lg"
        />
      </Button>
    </div>
  );
}

export default SignInGoogle;
