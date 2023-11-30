import style from "./Filter.module.css"

import ReceiptIcon from "../../assets/Icons/Receipt"

interface Props {
    header?: string
    sub?: string
}

import { useDate, useFilter } from "../../zustand/FilterModal"
import { useModal } from "../../zustand/store"

export default function EmptyState({
    header = "No matching transaction found for the selected filter",
    sub = "Change your filters to see more results, or add a new product.",
}: Props) {
    const { closeModal, setClosingModal } = useModal()
    const { setToDate, setFromDate, setTransactionStatus, setTransactionType } =
        useDate()
    const { setFilter } = useFilter()

    const delayClose = (milli: number) => {
        setClosingModal(true)
        setTimeout(() => {
            setClosingModal(false)
            closeModal()
        }, milli)
    }

    const clearFilters = () => {
        setToDate("")
        setFromDate("")
        setTransactionStatus([])
        setTransactionType([])
        setFilter({
            fromDate: "",
            toDate: "",
            transactionStatus: [],
            transactionType: [],
        })
        delayClose(300)
    }
    return (
        <div className={style.empty__state}>
            <ReceiptIcon />
            <div>
                <h3>{header}</h3>
                <p>{sub}</p>
            </div>
            <button
                className={style.secondary_btn}
                onClick={() => clearFilters()}
            >
                Clear Filter
            </button>
        </div>
    )
}
