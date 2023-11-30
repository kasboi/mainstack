import { useEffect } from "react"

import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import Transactions from "./components/Transactions/Transactions"
import "./index.css"
import FilterModal from "./components/FilterModal/FilterModal"

import axios from "axios"
import {
    useWallet,
    useTransactions,
    useUser,
    useLoading,
    FilteredTransactions,
} from "./zustand/store"
import { useFilter } from "./zustand/FilterModal"
import { applyFilters } from "./utilities/functions"

function App() {
    const { setWallet } = useWallet()
    const { transactions, setTransactions } = useTransactions()
    const { setUser } = useUser()
    const { startLoading, endLoading } = useLoading()
    const { setFilteredTransactions } = FilteredTransactions()

    const { filter, setFilterCount } = useFilter()

    /**
     * Fetches wallet data from the API and updates the state.
     */
    const fetchData = async (url: string, setterFn: (arg0: any) => void) => {
        const API_BASE_URL = "https://fe-task-api.mainstack.io"
        try {
            const response = await axios.get(API_BASE_URL + url)
            setterFn(response.data)
            if (url === "/transactions") {
                setFilteredTransactions(response.data)
            }
        } catch (error) {
            console.error("Error fetching wallet data:", error)
        }
    }

    /**
     * Fetches wallet and transactions data when the component mounts.
     */
    useEffect(() => {
        startLoading()

        Promise.all([
            fetchData("/wallet", setWallet),
            fetchData("/user", setUser),
            fetchData("/transactions", setTransactions),
        ]).then(() => {
            endLoading()
        })
    }, [])

    useEffect(() => {
        applyFilters(filter, transactions, setFilteredTransactions, setFilterCount)
    }, [filter])
    return (
        <>
            <Header />
            <Sidebar />
            <Transactions />
            <FilterModal />
        </>
    )
}

export default App
