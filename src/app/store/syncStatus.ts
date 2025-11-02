import { create } from "zustand";

interface SyncState {
  isLoading: boolean;
  error: string | null;
  setLoading: (value: boolean) => void;
  setError: (error: string | null) => void;
}

export const useSyncStore = create<SyncState>((set) => ({
  isLoading: false,
  error: null,
  setLoading: (value) => set({ isLoading: value }),
  setError: (error) => set({ error }),
}));
