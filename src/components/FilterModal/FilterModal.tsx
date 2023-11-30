import { useState } from "react"
import style from "./FilterModal.module.css"
import DateRange from "./DateRange"

import CustomSelect from "./CustomSelect"
import CloseIcon from "../../assets/Icons/close"

import { useModal } from "../../zustand/store"

import { useDate, useFilter } from "../../zustand/FilterModal"
import { setDateRange } from "../../utilities/functions"

export default function FilterModal() {
    const { isModalOpen, closeModal, closingModal, setClosingModal } =
        useModal()
    const {
        fromDate,
        toDate,
        setFromDate,
        setToDate,
        transactionStatus,
        setTransactionStatus,
        transactionType,
        setTransactionType,
    } = useDate()

    const { setFilter } = useFilter()

    // const [closingModal, setClosingModal] = useState(false)
    const [newDateRange, setNewDateRange] = useState(-1)

    const delayClose = (milli: number) => {
        setClosingModal(true)
        setTimeout(() => {
            setClosingModal(false)
            closeModal()
        }, milli)
    }

    const applyFilters = () => {
        setFilter({
            fromDate,
            toDate,
            transactionStatus,
            transactionType,
        })
        delayClose(300)
    }

    const selectDateRange = (daysDifference: number) => {
        const todayDate = new Date()
        const previousDate = new Date()
        previousDate.setDate(todayDate.getDate() - daysDifference)

        setToDate(todayDate.toDateString())
        setFromDate(previousDate.toDateString())
        setNewDateRange(daysDifference)
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
                            className={`${style.primary_btn} ${style.chip} ${
                                newDateRange === 0 ? "active" : ""
                            }`}
                            onClick={() => selectDateRange(0)}
                        >
                            Today
                        </button>
                        <button
                            className={`${style.primary_btn} ${style.chip} ${
                                newDateRange === 7 ? "active" : ""
                            }`}
                            onClick={() => selectDateRange(7)}
                        >
                            Last 7 days
                        </button>
                        <button
                            className={`${style.primary_btn} ${style.chip} ${
                                newDateRange === 30 ? "active" : ""
                            }`}
                            onClick={() => selectDateRange(30)}
                        >
                            This month
                        </button>
                        <button
                            className={`${style.primary_btn} ${style.chip} ${
                                newDateRange === 90 ? "active" : ""
                            }`}
                            onClick={() => selectDateRange(90)}
                        >
                            Last 3 months
                        </button>
                    </div>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className={style.form__input}>
                            <label>Date Range</label>
                            <DateRange
                                onChange={(type, date) => {
                                    setDateRange(
                                        type,
                                        date,
                                        setFromDate,
                                        setToDate
                                    )
                                    setNewDateRange(-1)
                                }}
                            />
                        </div>
                        <div className={style.form__input}>
                            <label>Transaction Type</label>
                            <CustomSelect
                                label="Select Transaction Type"
                                value={transactionType}
                                options={[
                                    "deposit",
                                    "Get Tipped",
                                    "withdrawal",
                                    "Chargebacks",
                                    "Cashbacks",
                                    "Refer & Earn",
                                ]}
                                onChange={(option) => {
                                    modifyArray("transactionType", option)
                                }}
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
