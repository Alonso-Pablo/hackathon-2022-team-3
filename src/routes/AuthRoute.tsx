import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useLottie } from 'lottie-react';
import loaderAnimation from '../assets/loading.json';

export interface AuthRouteProps {
  children: any;
}

const AuthRoute: React.FunctionComponent<AuthRouteProps> = (props) => {
  const { children } = props;
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const options = {
    animationData: loaderAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  useEffect(() => {
    const AuthCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading: false;
      } else {
        navigate('/signin');
      }
    });
  }, [auth]);

  if (loading)
    return (
      <div>
        <div className="flex justify-center items-center">{View}</div>
      </div>
    );

  return <>{children}</>;
};

export default AuthRoute;
