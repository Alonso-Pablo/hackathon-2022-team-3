import { User } from 'firebase/auth';
import create from 'zustand';

interface Props {
  user: User | null;
  change: (newState: User | null) => void;
}

export const useUser = create<Props>((set) => ({
  user: null,
  logout: () => set(() => ({ user: null })),
  change: (newState) => set(() => ({ user: newState })),
}));
