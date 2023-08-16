import { create } from "zustand";
import axios from "axios";
import { URL } from "../constants/URL.JS";

export const useProfessional = create((set) => (
      {
            professionals: [],
            specialties: [],
            setProfessionals: async () => {
                  const { data } = await axios.get(`${URL}/turns/professional`)
                  set({ professionals: data.body })
            },
            setSpecialties: async () => {
                  const { data } = await axios.get(`${URL}/turns/specialties`)
                  const specialties = data.body.filter((item, index) => data.body.indexOf(item) === index); // elimino duplicados                  
                  set({ specialties})
            }
      }
))