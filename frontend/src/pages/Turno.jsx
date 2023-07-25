import { useEffect } from 'react';
import { useProfessional } from '../store/useTurns.js';
export const Turno = () => {
      const professionals = useProfessional((state) => state.professionals)
      const { setProfessionals } = useProfessional()
      useEffect(() => {
            setProfessionals()
      }, [setProfessionals])
      console.log(professionals);

      return (
            <div>Turno</div>
      )
}
