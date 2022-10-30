import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import googleLogo from '../../assets/google.svg';

function SignInGoogle() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState<boolean>(false);

  const signInGoogle = () => {
    setAuthing(true);
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate('/');
      })
      .catch((err) => {
        console.log(err.message);
        setAuthing(false);
      });
  };

  return (
    <div>
      <p className="text-gray-500 text-center text-sm pt-2">
        You can log-in google
      </p>
      <button
        className="text-black px-4 py-2 rounded-lg active:scale-110 transition-all duration-300 ease-in disabled:grayscale"
        onClick={signInGoogle}
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
