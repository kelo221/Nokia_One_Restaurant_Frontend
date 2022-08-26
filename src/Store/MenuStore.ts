import create from "zustand";
import axios from "axios";

import { FoodMenuInterface } from "../DataStructure/FoodMenuInterface";

interface BearState {
  fetch: () => Promise<void>;
  data: Partial<FoodMenuInterface>;
  isLoading: boolean;
  hasErrors: boolean;
}

const menuStore = create<BearState>((set) => ({
  data: {},
  isLoading: false,
  hasErrors: false,
  fetch: async () => {
    set(() => ({ isLoading: true }));
    try {
      const response = await axios.get(
        "https://www.sodexo.fi/en/ruokalistat/output/weekly_json/80"
      );
      set((state: { data: any }) => ({
        data: (state.data = response.data),
        isLoading: false,
      }));
    } catch (err) {
      set(() => ({ hasErrors: true, isLoading: false }));
    }
  },
}));

export default menuStore;
