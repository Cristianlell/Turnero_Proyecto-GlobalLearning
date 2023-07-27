import { create } from "zustand";
import axios from "axios";

export const useProfessional = create((set) => (
      {
            professionals: [],
            specialties: [],
            setProfessionals: async () => {
                  const { data } = await axios.get('http://localhost:3000/api/turns/professional')
                  set({ professionals: data.body })
            },
            setSpecialties: async () => {
                  const { data } = await axios.get('http://localhost:3000/api/turns/specialties')
                  const specialties = data.body.filter((item, index) => data.body.indexOf(item) === index); // elimino duplicados                  
                  set({ specialties})
            }
      }
))