import { Dispatch, SetStateAction, useState } from "react"
import style from "./FilterModal.module.css"
import CustomDoubleDateRange from "./CustomDoubleDateRange"
// import CustomDateRange from './CustomDoubleDateRange'
import CustomSelect from "./CustomSelect"
import CloseIcon from "../../assets/Icons/close"

interface Props {
    setFilters: Dispatch<SetStateAction<any>>
}

import { useModal } from "../../zustand/store"

export default function FilterModal({ setFilters }: Props) {
    const { isModalOpen, closeModal } = useModal()

    const [closingModal, setClosingModal] = useState(false)
    const [transactionStatus, setTransactionStatus] = useState<Array<string>>(
        []
    )
    const [transactionType, setTransactionType] = useState<Array<string>>([])
    const [fromDate, setFromDate] = useState("")
    const [toDate, setToDate] = useState("")

    const delayClose = (milli: number) => {
        setClosingModal(true)
        setTimeout(() => {
            setClosingModal(false)
            closeModal()
        }, milli)
    }

    const applyFilters = () => {
        setFilters({
            fromDate,
            toDate,
            transactionStatus,
            transactionType,
        })
        delayClose(300)
    }

    const clearFilters = () => {
        setToDate("")
        setFromDate("")
        setTransactionStatus([])
        setTransactionType([])
        setFilters({})
        delayClose(300)
    }

    const modifyArray = (arrayName: string, item: string) => {
        if (arrayName === "transactionStatus") {
            let temp = [...transactionStatus]
            if (temp.includes(item)) {
                temp = temp.filter((tempItem) => tempItem !== item)
            } else {
                temp.push(item)
            }
            setTransactionStatus(temp)
        } else {
            let temp = [...transactionType]
            if (temp.includes(item)) {
                temp = temp.filter((tempItem) => tempItem !== item)
            } else {
                temp.push(item)
            }
            setTransactionType(temp)
        }
    }

    return (
        <div
            className={`${style.modal__bg} ${isModalOpen ? style.visible : ""}`}
            onClick={() => delayClose(300)}
        >
            <div className={style.modal} onClick={(e) => e.stopPropagation()}>
                <div
                    className={`${style.modal__inner} ${
                        closingModal ? style.invisible : ""
                    }`}
                >
                    <div className={style.header}>
                        <h2>Filter</h2>
                        <button onClick={() => delayClose(300)}>
                            <CloseIcon />
                        </button>
                    </div>
                    <div className={style.chips}>
                        <button
                            className={`${style.primary_btn} ${style.chip}`}
                        >
                            Today
                        </button>
                        <button
                            className={`${style.primary_btn} ${style.chip}`}
                        >
                            Last 7 days
                        </button>
                        <button
                            className={`${style.primary_btn} ${style.chip}`}
                        >
                            This month
                        </button>
                        <button
                            className={`${style.primary_btn} ${style.chip}`}
                        >
                            Last 3 months
                        </button>
                    </div>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className={style.form__input}>
                            <label>Date Range</label>
                            <CustomDoubleDateRange
                                fromValue={fromDate}
                                toValue={toDate}
                                onChange={(type, date) => {
                                    type === "FROM"
                                        ? setFromDate(date)
                                        : setToDate(date)
                                }}
                            />
                        </div>
                        <div className={style.form__input}>
                            <label>Transaction Type</label>
                            <CustomSelect
                                label="Select Transaction Type"
                                value={transactionType}
                                options={[
                                    "Store Transactions",
                                    "Get Tipped",
                                    "Withdrawals",
                                    "Chargebacks",
                                    "Cashbacks",
                                    "Refer & Earn",
                                ]}
                                onChange={(option) =>
                                    modifyArray("transactionType", option)
                                }
                            />
                        </div>
                        <div className={style.form__input}>
                            <label>Transaction Status</label>
                            <CustomSelect
                                label="Select Transaction Status"
                                value={transactionStatus}
                                options={["successful", "pending", "failed"]}
                                onChange={(option) =>
                                    modifyArray("transactionStatus", option)
                                }
                            />
                        </div>
                    </form>
                    <div className={style.bottom__actions}>
                        <button
                            className={`${style.primary_btn} ${style.outline}`}
                            onClick={() => clearFilters()}
                        >
                            Clear
                        </button>
                        <button
                            className={`${style.primary_btn}`}
                            disabled={
                                !(
                                    transactionType.toString() ||
                                    transactionStatus.toString() ||
                                    toDate ||
                                    fromDate
                                )
                            }
                            onClick={() => applyFilters()}
                        >
                            Apply
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
