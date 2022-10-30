//@ts-nocheck
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import googleLogo from '../../assets/google.svg';


function SignInGoogle() {
  const { googleSignIn, user } = UserAuth();
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
      <p className="text-gray-500 text-center text-sm pt-2">
        You can log-in google
      </p>
      <button
        className="text-black px-4 py-2 rounded-lg active:scale-110 transition-all duration-300 ease-in disabled:grayscale"
        onClick={handleGoogleSignIn}
        disabled={authing}
      >
        <img
          src={googleLogo}
          alt="Google"
          className="h-8 w-fit drop-shadow-lg"
        />
      </button>
    </div>
  );
}

export default SignInGoogle;
