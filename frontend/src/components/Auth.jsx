import { useUserContext } from '../utils/UserContext';
import { Navigate } from 'react-router-dom';

export const Auth = () => {
  const { isLoggedin, userData } = useUserContext();

  if (!isLoggedin) {
    return <Navigate to='/login' />;
  }
  if(userData.userType === 'paciente') {
    return <Navigate to={'/turns'} />
  }
};
