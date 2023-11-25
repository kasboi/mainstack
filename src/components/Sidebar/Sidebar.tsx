import style from "./Sidebar.module.css"

import link from "../../assets/Icons/link.png"
import store from "../../assets/Icons/store.png"
import media_kit from "../../assets/Icons/media_kit.png"
import invoicing from "../../assets/Icons/invoicing.png"

import "reactjs-popup/dist/index.css"

const Sidebar = () => {
    return (
        <div className={style.sidebar}>
            <div className={style.icon_box}>
                <img
                    src={link}
                    className={`${style.icons} ${style.icon_1}`}
                    alt="icons"
                />
            </div>
            <div className={style.icon_box}>
                <img
                    src={store}
                    className={`${style.icons} ${style.icon_2}`}
                    alt="icons"
                />
            </div>
            <div className={style.icon_box}>
                <img
                    src={media_kit}
                    className={`${style.icons} ${style.icon_3}`}
                    alt="icons"
                />
            </div>
            <div className={style.icon_box}>
                <img
                    src={invoicing}
                    className={`${style.icons} ${style.icon_4}`}
                    alt="icons"
                />
            </div>
        </div>
    )
}

export default Sidebar
