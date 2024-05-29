import { create } from 'zustand';

interface IsOpenStore {
  load: boolean;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  toggleLoad: () => void;
}
const useIsOpenStore = create<IsOpenStore>((set) => ({
  load: false,
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
  toggleLoad: () => set((state) => ({ load: !state.load })),
}));

export default useIsOpenStore;
