import { create } from "zustand";
import { IGenresStore } from '../types/stores';
import { getGenres } from '../apis/genre';

export const useGenresStore = create<IGenresStore>((set) => ({
    genres: [],
    setGenres: (genres) => set({ genres }),
    getGenres: async (): Promise<void> => {
        try {
            const genres = await getGenres();
            set({ genres });
        }
        catch (error) {
            console.log(error);
        }
    }
}));