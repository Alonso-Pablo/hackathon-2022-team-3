//@ts-nocheck
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

function LogoutButton() {
  const { logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/signin');
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <button
      className="bg-blue-primary text-white px-4 py-2 rounded-lg hover:scale-105 transition duration-500 ease-in-out hover:bg-blue-secondary w-fit"
      onClick={handleLogout}
    >
      Disconnect
    </button>
  );
}

export default LogoutButton;
