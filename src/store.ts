import { create } from "zustand";


interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
}

interface GameQueryStore {
    gameQuery: GameQuery;
    setSearchText: (searchText: string) => void;
    setSortOrder: (sortOrder: string) => void;
    setGenreId: (genreId: number) => void;
    setPlatFromId: (platformId: number) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
    setSortOrder: (sortOrder) => set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
    setGenreId: (genreId) => set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
    setPlatFromId: (platformId) => set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
}))

export default useGameQueryStore;



