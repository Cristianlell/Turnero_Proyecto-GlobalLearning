import { useNavigate } from "react-router-dom";
import { useUserContext } from "../utils/UserContext";
import { useEffect } from "react";
import { useTurn } from "../store/useTurn.js";
import './dashboard.css'
const Dashboard = () => {
  const navigate = useNavigate();
  const { getTurns, turns } = useTurn();
  useEffect(() => {
    getTurns();
  }, [getTurns]);

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



   const filteredTurn = turns.filter((turn) => {
    return turn.affiliateNumber === userData.dni;
  });
  console.log(filteredTurn); 

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Turno/s</h2>
      {userData ? (
        <div className="dashboard-user-data">
          <h3>Tus datos:</h3>
          <p>DNI: {filteredTurn[0]?.dni}</p>
          <p>Especialidad: {filteredTurn[0]?.specialty}</p>
          <p>Profesional: {filteredTurn[0]?.professional}</p>
          <p>Horario de su turno: {filteredTurn[0]?.hour}</p>
        </div>
      ) : (
        <p className="dashboard-error">No se encontraron datos de usuario.</p>
      )}
      <button className="dashboard-button" onClick={handleClick}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Dashboard;
