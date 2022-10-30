//@ts-nocheck
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import SignInGoogle from './SignInGoogle';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      navigate('/');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="h-screen container bg-gainsboro m-auto text-black flex justify-center items-center antialiased">
      <div className="md:w-1/2 border-2 border-gray-300 bg-gray-100 rounded-3xl px-6 py-10 hover:border-gray-500 transition duration-700 ease-in-out">
        <h2 className="text-4xl font-bold text-center mb-5 text-blue-secondary tracking-wide">
          Log in
        </h2>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <span className="flex flex-col gap-2">
            <label>Email:</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              placeholder="Email"
              id="register-email"
              className="px-3 py-2 rounded-md text-gray-700 focus:outline-blue-primary border-2"
            />
          </span>
          <span className="flex flex-col gap-2">
            <label>Password:</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              placeholder="Password"
              id="register-password"
              className="px-3 py-2 rounded-md text-gray-700 focus:outline-blue-primary border-2"
            />
          </span>
          <span className="flex flex-col divide-y-2 divide-gray-400 gap-4">
            <span>
              <button
                type="submit"
                className="bg-blue-primary text-white px-4 py-2 rounded-lg hover:scale-105 transition duration-500 ease-in-out hover:bg-blue-secondary w-full"
              >
                Login
              </button>
            </span>
            <span className="space-y-3 flex flex-col items-center">
              {<SignInGoogle />}
            </span>
            <span>
              <p className="text-gray-500 text-center text-sm pt-2">
                Don't have an account?{' '}
                <button
                  onClick={handleSignUp}
                  className="underline hover:underline-offset-2 tracking-wider"
                >
                  sign up
                </button>
              </p>
            </span>
          </span>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
