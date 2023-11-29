import { create } from "zustand";

interface ModalState {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}
export const useModal = create<ModalState>((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));

interface LoadingState {
  isLoading: boolean;
  startLoading: () => void;
  endLoading: () => void;
}

export const useLoading = create<LoadingState>((set) => ({
  isLoading: true,
  startLoading: () => set({ isLoading: true }),
  endLoading: () => set({ isLoading: false }),
}));