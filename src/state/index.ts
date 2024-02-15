import { create } from "zustand";


interface SearchState {
  searchQuery: string,
  setSearchQuery: (searchQuery: string) => void
}

interface ModalState {
  isOpen: boolean,
  title: string,
  director: string,
  rating: string,
  poster: string,
  openModal: (isOpen: boolean) => void,
  closeModal: (isOpen: boolean) => void,
  setTitle: (title: string) => void,
  setDirector: (director: string) => void,
  setRating: (rating: string) => void,
  setPoster: (poster: string) => void
}

export const useSearchStore = create<SearchState>()((set) => ({
  searchQuery: "",
  setSearchQuery: (searchQuery: string) => set({searchQuery})
}))

export const useModalStore = create<ModalState>()((set) => ({
  isOpen: false,
  title: "",
  director: "",
  rating: "",
  poster: "",
  openModal: () => set(() => ({isOpen: true})),
  closeModal: () => set(() => ({isOpen: false, title: "", director: "", rating: "", poster:""})),
  setTitle: (title: string) => set({title}),
  setDirector: (director: string) => set({director}),
  setRating: (rating: string) => set({rating}),
  setPoster: (poster: string) => set({poster})
}))