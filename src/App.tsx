import { useState } from "react"

import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import Transactions from "./components/Transactions/Transactions"
import "./index.css"
import FilterModal from "./components/FilterModal/FilterModal"

function App() {
    const [filters, setFilters] = useState<any>({})
    const [isLoading, setIsLoading] = useState(true)
    return (
        <>
            <Header />
            <Sidebar />
            <Transactions />
            <FilterModal setFilters={setFilters}/>
        </>
    )
}

export default App
