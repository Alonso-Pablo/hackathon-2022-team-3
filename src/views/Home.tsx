import { useLottie } from 'lottie-react';
import homeAnimation from '../assets/home.json';
import LogoutButton from '../components/Login/LogoutButton';

function Home() {
  const options = {
    animationData: homeAnimation,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-bold">This is the Home</h1>
      <div className="h-32 w-32">{View}</div>

      <LogoutButton />
    </div>
  );
}

export default Home;
