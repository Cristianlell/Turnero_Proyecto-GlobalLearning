import { create } from "zustand";
import axios from "axios";
import { URL } from "../constants/URL.JS";

export const useTurn = create((set) => ({

      loading: false,
      data: null,
      error: null,
      sucess: false,
      turns: [],
      postTurn: async (body) => {
            set({ loading: true, data: null, error: null })
            try {
                  const response = await axios.post(`${URL}/turns`, body);
                  set({ loading: false, data: response.data, sucess: true });
                  setTimeout(() => {
                        set({ sucess: false });
                  }, 4500);
            } catch (error) {
                  console.log(error);
                  set({ loading: false, error: error.message, sucess: false });

            }
      },
      getTurns: async () => {

            try {

                  const { data } = await axios.get(`${URL}/turns/getTurns`);

                  set({ turns: data.body });
            } catch (error) {
                  console.log(error);


            }
      },


}
))

