import style from "./Header.module.css"

import logo from "../../assets/Header/mainstack-logo.png"
import home from "../../assets/Header/home.png"
import analytics from "../../assets/Header/analytics.png"
import revenue from "../../assets/Header/revenue.png"
import crm from "../../assets/Header/crm.png"
import apps from "../../assets/Header/apps.png"

import chat from "../../assets/Header/chat.png"
import notifications from "../../assets/Header/notifications.png"
import menu from "../../assets/Header/menu.png"

import { ChevronDownOutline } from "react-ionicons"

import { useState } from "react"

const Header = () => {
    const [appsToggle, setAppsToggle] = useState(false)
    return (
        <nav className={style.nav}>
            <div className="logo">
                <img src={logo} alt="mainstack logo" />
            </div>
            <div className={style.tools}>
                <div className={`${style.tools_box} ${style.tools__home}`}>
                    <img src={home} alt="home icon" />
                    <span>Home</span>
                </div>
                <div className={`${style.tools_box} ${style.tools__analytics}`}>
                    <img src={analytics} alt="analytics icon" />
                    <span>Analytics</span>
                </div>
                <div className={`${style.tools_box} ${style.tools__revenue}`}>
                    <img src={revenue} alt="revenue icon" />
                    <span>Revenue</span>
                </div>
                <div className={`${style.tools_box} ${style.tools__crm}`}>
                    <img src={crm} alt="crm icon" />
                    <span>CRM</span>
                </div>
                {appsToggle && (
                    <div
                        className={`${style.tools_box} ${style.tools__apps_toggle}`}
                        onClick={() => setAppsToggle(!appsToggle)}
                    >
                        <img src={apps} alt="apps icon" />
                        <span>Apps</span>
                    </div>
                )}
                {!appsToggle && (
                    <div
                        className={`${style.tools_box} ${style.tools__apps}`}
                        onClick={() => setAppsToggle(!appsToggle)}
                    >
                        <div className={style.tools__apps_left}>
                            <img src={apps} alt="apps icon" />
                            <span>Apps</span>
                        </div>
                        <div className={style.tools__apps_right}>
                            <span>Link in Bio</span>
                            <ChevronDownOutline
                                color={"#00000"}
                                title={"apps icon"}
                                height="20px"
                                width="20px"
                                style={{ paddingTop: "7px" }}
                            />
                        </div>
                    </div>
                )}
            </div>
            <div className={style.menu}>
                <img src={chat} alt="chat icon" />
                <img src={notifications} alt="notifications icon" />
                <div className={style.menu__group}>
                    <span className={style.menu__group_text}>OJ</span>
                    <img src={menu} alt="menu icon" />
                </div>
            </div>
        </nav>
    )
}

export default Header
