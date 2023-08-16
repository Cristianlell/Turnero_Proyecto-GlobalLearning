import { useNavigate } from "react-router-dom";
import { useUserContext } from "../utils/UserContext";
import { useEffect } from "react";
import { useTurn } from "../store/useTurn.js";

const Dashboard = () => {
  const navigate = useNavigate();
  const { getTurns, turns } = useTurn();

  const handleClick = () => {
    setIsLoggedin(false);
    navigate("/login");
  };

  const { isLoggedin, userData, setIsLoggedin } = useUserContext();
  useEffect(() => {
    if (!isLoggedin) {
      navigate("/dashboard");
    }
  }, [isLoggedin, navigate]);

  
  useEffect(() => {
    getTurns();
  }, [getTurns]);
  
  const {body}= turns 
  const filteredTun = body.filter((turn)=>{
    turn.affiliateNumber === userData.dni;

  })
  console.log(filteredTun);
 
  return (
    <div>
      <h2>Dashboard</h2>
      {userData ? (
        <div>
          <h3>Tus datos:</h3>
          <p>DNI: {userData.dni}</p>
          <p>Número de teléfono: {userData.phoneNumber}</p>
          <p>Tipo de usuario: {userData.userType}</p>
        </div>
      ) : (
        <p>No se encontraron datos de usuario.</p>
      )}
      <button onClick={handleClick}>Cerrar sesión</button>
    </div>
  );
};

export default Dashboard;
