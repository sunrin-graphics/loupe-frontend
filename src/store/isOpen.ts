import { create } from 'zustand';

interface IsOpenStore {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
const useIsOpenStore = create<IsOpenStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
}));

export default useIsOpenStore;
