import { create } from "zustand";

export const useTurns = create((set, get) =>{
      return {
            turns:[],
            getTurns:async () =>{
                  //hacer el fetch y setear la data
            }
      }
})