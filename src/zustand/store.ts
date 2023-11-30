import { create } from "zustand";

interface ModalState {
  isModalOpen: boolean;
  closingModal: boolean;
  openModal: () => void;
  closeModal: () => void;
  setClosingModal: (closingModal: boolean) => void;
}
export const useModal = create<ModalState>((set) => ({
  isModalOpen: false,
  closingModal: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  setClosingModal: (closingModal: boolean) => set({ closingModal }),
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

interface WalletState {
  wallet: Wallet | null;
  setWallet: (wallet: Wallet) => void;
}

type Wallet = {
  balance: number;
  total_payout: number;
  total_revenue: number;
  pending_payout: number;
  ledger_balance: number;
}

export const useWallet = create<WalletState>((set) => ({
  wallet: null,
  setWallet: (wallet: Wallet) => set({ wallet }),
}));

export interface Transactions {
  amount: number;
  metadata?: Metadata | null;
  payment_reference?: string | null;
  status: string;
  type: string;
  date: string;
}
export interface Metadata {
  name: string;
  type: string;
  email: string;
  quantity: number;
  country: string;
  product_name?: string | null;
}

interface TransactionState {
  transactions: Transactions[];
  setTransactions: (transactions: Transactions[]) => void;
}

export const useTransactions = create<TransactionState>((set) => ({
  transactions: [],
  setTransactions: (transactions: Transactions[]) => set({ transactions }),
}));

interface FilteredTransactionState {
  filterTransactions: Transactions[];
  setFilteredTransactions: (transactions: Transactions[]) => void;
}

export const FilteredTransactions = create<FilteredTransactionState>((set) => ({
  filterTransactions: [],
  setFilteredTransactions: (filterTransactions: Transactions[]) => set({ filterTransactions }),
}));

export interface User {
  first_name: string;
  last_name: string;
  email: string;
}

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
}

export const useUser = create<UserState>((set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
}));