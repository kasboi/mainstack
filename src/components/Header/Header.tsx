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


const Header = () => {
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
                <div className={`${style.tools_box} ${style.tools__apps}`}>
                    <img src={apps} alt="apps icon" />
                    <span>Apps</span>
                </div>
            </div>
            <div className={style.menu}>
              <img src={chat} alt="chat icon" />
              <img src={notifications} alt="notifications icon" />
              <div className="menu__group">
                <span className="menu__group--text">OJ</span>
                <img src={menu} alt="menu icon" />
              </div>
            </div>
        </nav>
    )
}

export default Header
