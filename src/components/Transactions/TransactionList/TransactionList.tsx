import { ChevronDownOutline, DownloadOutline } from "react-ionicons"
import style from "./TransactionList.module.css"

import incoming from "../../../assets/Icons/incoming.svg"
import outgoing from "../../../assets/Icons/outgoing.svg"

import { useModal, useLoading, FilteredTransactions } from "../../../zustand/store"
import { useFilter } from "../../../zustand/FilterModal"
import EmptyState from "../../Filter/Filter"

import { formatDate } from "../../../utilities/functions"

const TransactionList = () => {
    const { openModal } = useModal()
    const { isLoading } = useLoading()
    const { filterTransactions } = FilteredTransactions()
    const {filterCount} = useFilter()

    return (
        <div className={style.container}>
            <div className={style.heading}>
                <div className={style.heading_text}>
                    <h3>{filterTransactions.length} Transactions</h3>
                    <p>Your transactions for the last 7 days</p>
                </div>
                <div className={style.heading_btn}>
                    <button className={style.btn} onClick={() => openModal()}>
                        Filter
                        {filterCount > 0 && <span className={style.count}>{filterCount}</span>}
                        <ChevronDownOutline
                            color={"#00000"}
                            height="18px"
                            width="18px"
                            style={{ paddingTop: "3px" }}
                        />
                    </button>
                    <button className={style.btn}>
                        Export list
                        <DownloadOutline
                            color={"#00000"}
                            height="18px"
                            width="18px"
                        />
                    </button>
                </div>
            </div>
            {(isLoading || filterTransactions.length == 0) && <EmptyState />}
            {filterTransactions && (
                <div className={style.transactions}>
                    {filterTransactions.map((transaction) => (
                        <div className={style.transaction_box} key={transaction.payment_reference}>
                            <img
                                src={
                                    transaction.type === "deposit"
                                        ? incoming
                                        : outgoing
                                }
                                alt={
                                    transaction.type === "deposit"
                                        ? "incoming"
                                        : "outgoing"
                                }
                                className={style.transaction_type}
                            />
                            <div className={style.transaction_desc}>
                                <p className={style.transaction_name}>
                                    {transaction.metadata?.product_name ||
                                        "Cash Withdrawal"}
                                </p>
                                <span className={style.transaction_status}>
                                    {transaction.metadata?.name ||
                                        transaction.status}
                                </span>
                            </div>
                            <div className={style.transaction_details}>
                                <p className={style.transaction_amount}>
                                    USD {transaction.amount.toFixed(2)}
                                </p>
                                <span className={style.transaction_date}>
                                    {formatDate(transaction.date)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default TransactionList
