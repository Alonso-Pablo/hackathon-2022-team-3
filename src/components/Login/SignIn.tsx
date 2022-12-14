import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterOptions, useForm } from 'react-hook-form';

import SignInGoogle from './SignInGoogle';

import { Field, Button } from '@/components';

import { Login } from '@/models';
import { login } from '@/services';
import Spinner from '../Spinner';

const EMAIL_VALIDATION: RegisterOptions<Login> = {
  minLength: { value: 4, message: 'Password must be at least 4 characters' },
  required: { value: true, message: 'Required field' },
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email must be valid',
  },
};

const PASSWORD_VALIDATION: RegisterOptions<Login> = {
  minLength: {
    value: 8,
    message: 'Password must be at least 8 characters',
  },
  required: {
    value: true,
    message: 'Required field',
  },
};

function SignIn() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [isloading, setIsloading] = useState(false);

  const handleSignUp = () => {
    navigate('/signup');
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Login>({ mode: 'onTouched' });

  const onSubmit = async ({ email, password }: Login) => {
    setError('');
    try {
      setIsloading(true);
      await login(email, password);
      setIsloading(false);
      navigate('/');
    } catch (e) {
      setIsloading(false);
      /* console.log(e);
      setError(e?.message);
      console.log(e?.message); */
    }
  };

  return (
    <div className="h-screen container bg-gainsboro m-auto text-black flex justify-center items-center antialiased ">
      <div className="md:max-w-xl border-2 border-gray-300 bg-gray-100 rounded-3xl px-6 py-10 dark:bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-5 text-blue-secondary tracking-wide dark:text-gray-50">
          Log in
        </h2>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <span className="flex flex-col gap-2">
            <Field
              text="Email:"
              type="email"
              placeholder="Email"
              register={register('email', EMAIL_VALIDATION)}
              error={errors.email}
            />
          </span>
          <span className="flex flex-col gap-2">
            <Field
              text="Password:"
              type="password"
              placeholder="Password"
              register={register('password', PASSWORD_VALIDATION)}
              error={errors.password}
            />
          </span>
          <span className="flex flex-col divide-y-2 divide-gray-400 gap-4">
            <span>
              <Button
                disabled={isSubmitting}
                type="submit"
                className="bg-blue-primary text-white px-4 py-2 rounded-lg hover:scale-105 transition duration-500 ease-in-out hover:bg-blue-secondary w-full"
              >
                Login
              </Button>
            </span>
            <span className="space-y-3 flex flex-col items-center">
              <SignInGoogle />
            </span>
            <span>
              <p className="text-gray-500 text-center text-sm pt-2 dark:text-gray-200">
                Don't have an account?{' '}
                <Button
                  onClick={handleSignUp}
                  className="underline hover:underline-offset-2 tracking-wider"
                >
                  sign up
                </Button>
              </p>
            </span>
          </span>
          {isloading && <Spinner />}
        </form>
      </div>
    </div>
  );
}

export default SignIn;
