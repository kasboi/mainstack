import style from "./Sidebar.module.css"

import link from "../../assets/Icons/link.png"
import store from "../../assets/Icons/store.png"
import media_kit from "../../assets/Icons/media_kit.png"
import invoicing from "../../assets/Icons/invoicing.png"

import { Tooltip } from "react-tooltip"

const Sidebar = () => {
    return (
        <>
            <div className={style.sidebar}>
                <div
                    className={style.icon_box}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Link in Bio"
                    data-tooltip-place="right"
                >
                    <img
                        src={link}
                        className={`${style.icons} ${style.icon_1}`}
                        alt="icons"
                    />
                </div>
                <div
                    className={style.icon_box}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Store"
                    data-tooltip-place="right"
                >
                    <img
                        src={store}
                        className={`${style.icons} ${style.icon_2}`}
                        alt="icons"
                    />
                </div>
                <div
                    className={style.icon_box}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Media Kit"
                    data-tooltip-place="right"
                >
                    <img
                        src={media_kit}
                        className={`${style.icons} ${style.icon_3}`}
                        alt="icons"
                    />
                </div>
                <div
                    className={style.icon_box}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Invoicing"
                    data-tooltip-place="right"
                >
                    <img
                        src={invoicing}
                        className={`${style.icons} ${style.icon_4}`}
                        alt="icons"
                    />
                </div>
                <Tooltip id="my-tooltip" />
            </div>
        </>
    )
}

export default Sidebar
