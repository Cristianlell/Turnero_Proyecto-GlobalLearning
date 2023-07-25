import { create } from "zustand";
import axios from "axios";

export const useProfessional = create((set) => (
      {
            professionals: [],
            setProfessionals: async () => {
                  const {data} = await axios.get('http://localhost:3000/api/turns/professional')
                  set({professionals:data})
            }
      }
))