import { InformationCircleOutline } from "react-ionicons"
import style from "./Balance.module.css"
import Chart from "../Chart"
import Skeleton from "../../Skeleton/Skeleton"

import { useLoading } from "../../../zustand/store"

const Transactions = () => {
    const { isLoading } = useLoading()
    return (
        <div className={style.container}>
            <div className={style.left_container}>
                <div className={style.balance}>
                    <div className={style.balance_textbox}>
                        <p className={style.balance_text}>Available Balance</p>
                        {isLoading ? (
                            <Skeleton />
                        ) : (
                            <p className={style.balance_amount}>
                                usd120,500.00
                            </p>
                        )}
                    </div>
                    <button className={style.balance_btn}>Withdraw</button>
                </div>
                <div className={style.chart_div}>
                    <Chart />
                </div>
            </div>
            <div className={style.right_container}>
                <div className={style.wallet_balance}>
                    <div className={style.wallet_balance_box}>
                        <p className={style.wallet_balance_text}>
                            Ledger Balance
                        </p>
                        {isLoading ? (
                            <Skeleton />
                        ) : (
                            <p className={style.wallet_balance_amount}>
                                USD 0.00
                            </p>
                        )}
                    </div>
                    <InformationCircleOutline
                        color={"#56616b89"}
                        height="25px"
                        width="25px"
                    />
                </div>
                <div className={style.wallet_balance}>
                    <div>
                        <p className={style.wallet_balance_text}>
                            Total Payout
                        </p>
                        {isLoading ? (
                            <Skeleton />
                        ) : (
                            <p className={style.wallet_balance_amount}>
                                USD 55,080.00
                            </p>
                        )}
                    </div>
                    <InformationCircleOutline
                        color={"#56616b89"}
                        height="25px"
                        width="25px"
                    />
                </div>
                <div className={style.wallet_balance}>
                    <div>
                        <p className={style.wallet_balance_text}>
                            Total Revenue
                        </p>
                        {isLoading ? (
                            <Skeleton />
                        ) : (
                            <p className={style.wallet_balance_amount}>
                                USD 175,580.00
                            </p>
                        )}
                    </div>
                    <InformationCircleOutline
                        color={"#56616b89"}
                        height="25px"
                        width="25px"
                    />
                </div>
                <div className={style.wallet_balance}>
                    <div>
                        <p className={style.wallet_balance_text}>
                            Pending Payout
                        </p>
                        {isLoading ? (
                            <Skeleton />
                        ) : (
                            <p className={style.wallet_balance_amount}>
                                USD 0.00
                            </p>
                        )}
                    </div>
                    <InformationCircleOutline
                        color={"#56616b89"}
                        height="25px"
                        width="25px"
                    />
                </div>
            </div>
        </div>
    )
}
export default Transactions
