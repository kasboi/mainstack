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

import link from "../../assets/Icons/link.svg"
import store from "../../assets/Icons/store.svg"
import media_kit from "../../assets/Icons/media_kit.svg"
import invoicing from "../../assets/Icons/invoicing.svg"

import {
    BugOutline,
    CardOutline,
    ChevronDownOutline,
    ExitOutline,
    GridOutline,
    NewspaperOutline,
    PeopleOutline,
    SettingsOutline,
} from "react-ionicons"

import { useState } from "react"

const Header = () => {
    const [appsToggle, setAppsToggle] = useState(false)
    const [settingsToggle, setSettingsToggle] = useState(false)
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
                {!appsToggle && (
                    <div
                        className={`${style.tools_box} ${style.tools__apps_toggle}`}
                        onClick={() => setAppsToggle(!appsToggle)}
                    >
                        <img src={apps} alt="apps icon" />
                        <span>Apps</span>
                    </div>
                )}
                {appsToggle && (
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
                        <div className={style.tools__apps_dropdown}>
                            <div className={style.tools__apps_dropdown_box}>
                                <div className={style.tools__apps_dropdown_img}>
                                    <img src={link} alt="apps icon" />
                                </div>
                                <div
                                    className={style.tools__apps_dropdown_text}
                                >
                                    <h3>Link in Bio</h3>
                                    <p>Manage your link in bio</p>
                                </div>
                            </div>
                            <div className={style.tools__apps_dropdown_box}>
                                <div className={style.tools__apps_dropdown_img}>
                                    <img src={store} alt="apps icon" />
                                </div>
                                <div
                                    className={style.tools__apps_dropdown_text}
                                >
                                    <h3>Store</h3>
                                    <p>Manage your store activities</p>
                                </div>
                            </div>
                            <div className={style.tools__apps_dropdown_box}>
                                <div className={style.tools__apps_dropdown_img}>
                                    <img src={media_kit} alt="apps icon" />
                                </div>
                                <div
                                    className={style.tools__apps_dropdown_text}
                                >
                                    <h3>Media kit</h3>
                                    <p>Manage your media kit</p>
                                </div>
                            </div>
                            <div className={style.tools__apps_dropdown_box}>
                                <div className={style.tools__apps_dropdown_img}>
                                    <img src={invoicing} alt="apps icon" />
                                </div>
                                <div
                                    className={style.tools__apps_dropdown_text}
                                >
                                    <h3>Invoicing</h3>
                                    <p>Manage your Invoices</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className={style.menu} onClick={() => setSettingsToggle(!settingsToggle)}>
                <img src={chat} alt="chat icon" />
                <img src={notifications} alt="notifications icon" />
                <div className={style.menu__group}>
                    <span className={style.menu__group_text}>OJ</span>
                    <img src={menu} alt="menu icon" />
                </div>
                {settingsToggle && (
                    <div className={style.settings__dropdown}>
                        <div
                            className={`${style.settings__dropdown_box} ${style.settings__dropdown_text}`}
                        >
                            <span className={style.menu__group_text}>OJ</span>
                            <div className={style.settings__dropdown_text}>
                                <h3>Olivier Jones</h3>
                                <p>olivierjones@gmail.com</p>
                            </div>
                        </div>
                        <div className={style.settings__dropdown_box}>
                            <SettingsOutline
                                color={"#00000"}
                                // title={}
                                height="25px"
                                width="25px"
                            />
                            <p>Settings</p>
                        </div>
                        <div className={style.settings__dropdown_box}>
                            <NewspaperOutline
                                color={"#00000"}
                                // title={}
                                height="25px"
                                width="25px"
                            />
                            <p>Purchase History</p>
                        </div>
                        <div className={style.settings__dropdown_box}>
                            <CardOutline
                                color={"#00000"}
                                // title={}
                                height="25px"
                                width="25px"
                            />
                            <p>Refer and Earn</p>
                        </div>
                        <div className={style.settings__dropdown_box}>
                            <GridOutline
                                color={"#00000"}
                                // title={}
                                height="25px"
                                width="25px"
                            />
                            <p>Integrations</p>
                        </div>
                        <div className={style.settings__dropdown_box}>
                            <BugOutline
                                color={"#00000"}
                                // title={}
                                height="25px"
                                width="25px"
                            />
                            <p>Report Bug</p>
                        </div>
                        <div className={style.settings__dropdown_box}>
                            <PeopleOutline
                                color={"#00000"}
                                // title={}
                                height="25px"
                                width="25px"
                            />
                            <p>Switch Account</p>
                        </div>
                        <div className={style.settings__dropdown_box}>
                            <ExitOutline
                                color={"#00000"}
                                // title={}
                                height="25px"
                                width="25px"
                            />
                            <p>Sign Out</p>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Header
