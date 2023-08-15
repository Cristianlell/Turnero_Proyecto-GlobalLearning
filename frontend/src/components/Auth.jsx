
import { useUserContext } from '../utils/UserContext';
import { Navigate } from 'react-router-dom';

export const Auth = ({children}) => {
const {  isLoggedIn } = useUserContext();
  
    if(!isLoggedIn){
        return <Navigate to='/login'/>

    }
    return children
}
