import { create } from 'zustand';

type CursorMode = 'default' | 'hover' | 'view' | 'hidden';

interface CursorStore {
  mode: CursorMode;
  text: string;
  setMode: (mode: CursorMode, text?: string) => void;
}

export const useCursorStore = create<CursorStore>((set) => ({
  mode: 'default',
  text: '',
  setMode: (mode, text = '') => set({ mode, text }),
}));
