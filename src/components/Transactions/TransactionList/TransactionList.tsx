import { ChevronDownOutline, DownloadOutline } from "react-ionicons"
import style from "./TransactionList.module.css"


import incoming from "../../../assets/Icons/incoming.svg"
import outgoing from "../../../assets/Icons/outgoing.svg"

import { useModal } from "../../../zustand/store"

const TransactionList = () => {
    const {openModal} = useModal()
    return (
        <div className={style.container}>
            <div className={style.heading}>
                <div className={style.heading_text}>
                    <h3>24 Transactions</h3>
                    <p>Your transactions for the last 7 days</p>
                </div>
                <div className={style.heading_btn}>
                    <button
                        className={style.btn}
                        onClick={() => openModal()}
                    >
                        Filter
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
            <div className={style.transactions}>
                <div className={style.transaction_box}>
                    <img
                        src={incoming}
                        alt="incoming"
                        className={style.transaction_type}
                    />
                    <div className={style.transaction_desc}>
                        <p className={style.transaction_name}>
                            Psychology of Money{" "}
                        </p>
                        <span className={style.transaction_status}>
                            Roy Cash
                        </span>
                    </div>
                    <div className={style.transaction_details}>
                        <p className={style.transaction_amount}>USD600</p>
                        <span className={style.transaction_date}>
                            Apr 03,2022
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionList
