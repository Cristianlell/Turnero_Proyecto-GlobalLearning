import { useUserContext } from '../utils/UserContext';
import { Navigate } from 'react-router-dom';

export const Auth = ({ children }) => {
  const { isLoggedin, userData } = useUserContext();

  console.log(isLoggedin);
  if (!isLoggedin) {
    return <Navigate to='/login' />;
  }
  return children;
};
