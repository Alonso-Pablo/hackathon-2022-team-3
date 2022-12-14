import { RegisterOptions, useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Field, Button } from '@/components';

import SignInGoogle from './SignInGoogle';
import { Login } from '@/models';
import { signUp } from '@/services';
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

const SignUp = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate('/signin');
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Login>({ mode: 'onTouched' });
  const [isloading, setIsloading] = useState(false);
  const onSubmit = async ({ email, password }: Login) => {
    try {
      setIsloading(true);
      await signUp(email, password);
      setIsloading(false);
      navigate('/');
    } catch (e) {
      setIsloading(false);
      console.log(e);
      /*  setError(e.message);
      console.log(e.message); */
    }
  };

  return (
    <div className="h-screen container bg-gainsboro m-auto flex justify-center items-center antialiased">
      <div className="md:max-w-xl border-2 border-gray-300 bg-gray-100 rounded-3xl px-6 py-10 dark:bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-5 text-blue-secondary tracking-wide dark:text-gray-50">
          Register
        </h2>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <span className="flex flex-col gap-2">
            <Field
              register={register('email', EMAIL_VALIDATION)}
              text="Email:"
              type="email"
              placeholder="Email"
              error={errors.email}
            />
          </span>
          <span className="flex flex-col gap-2">
            <Field
              text="Password:"
              type="password"
              register={register('password', PASSWORD_VALIDATION)}
              placeholder="Password"
              error={errors.password}
            />
          </span>

          <span className="flex flex-col divide-y-2 divide-gray-400 gap-4">
            <span>
              <Button
                type="submit"
                className="bg-blue-primary text-white px-4 py-2 rounded-lg hover:scale-105 transition duration-500 ease-in-out hover:bg-blue-secondary w-full disabled:bg-gray-500 disabled:text-white"
              >
                Register
              </Button>
            </span>
            <span className="space-y-3 flex flex-col items-center">
              {<SignInGoogle />}
            </span>
            <span>
              <p className="text-gray-500 text-center text-sm pt-2 dark:text-gray-200">
                Already registered?{' '}
                <Button
                  disabled={isSubmitting}
                  onClick={handleSignIn}
                  className="ml-1 underline hover:underline-offset-2 tracking-wider"
                >
                  sign in
                </Button>
              </p>
            </span>
          </span>
          {isloading && <Spinner />}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
