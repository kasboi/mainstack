import { create } from "zustand"

export interface Filter {
    fromDate: string
    toDate: string
    transactionStatus: string[]
    transactionType: string[]
}

interface DateState extends Filter {
    setFromDate: (date: string) => void
    setToDate: (date: string) => void
    setTransactionStatus: (status: string[]) => void
    setTransactionType: (type: string[]) => void
}

// State management for filter modal values
export const useDate = create<DateState>((set) => ({
    fromDate: "",
    toDate: "",
    transactionStatus: [],
    transactionType: [],
    setFromDate: (date: string) => set({ fromDate: date }),
    setToDate: (date: string) => set({ toDate: date }),
    setTransactionStatus: (status: string[]) =>
        set(() => ({
            transactionStatus: [...status],
        })),
    setTransactionType: (type: string[]) =>
        set(() => ({
            transactionType: [...type],
        })),
}))


export interface FilterState {
    filter: Filter
    setFilter: (filter: Filter) => void
}
// State management for filter values
export const useFilter = create<FilterState>((set) => ({
    filter: {
        fromDate: "",
        toDate: "",
        transactionStatus: [],
        transactionType: [],
    },
    setFilter: (filter: Filter) => set({ filter }),
}))
