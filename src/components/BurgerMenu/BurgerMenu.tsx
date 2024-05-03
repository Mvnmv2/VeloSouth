import React from 'react';
import classNames from "classnames";

import s from './burgerMenu.module.scss'

import sidebarLogo from '../../assets/img/sidebar-logo.svg'
import mainIcon from '../../assets/img/svg/sidebar/main.svg'
import searchIcon from '../../assets/img/svg/sidebar/search.svg'
import cardIcon from '../../assets/img/svg/sidebar/card.svg'
import userIcon from '../../assets/img/svg/sidebar/user.svg'
import {BurgerMenuContext} from "../../App";

const BurgerMenu = () => {

    const {showBurgerMenu, setShowBurgerMenu} = React.useContext(BurgerMenuContext)

    return (

        <aside className={s.sidebar}>

            <button className={classNames(s.sidebar__close, 'btnReset')}
                    onClick={() => setShowBurgerMenu(!showBurgerMenu)}
            ><span></span></button>

            <div className={s.sidebar__logo}>
                <a href="/">
                    <img className={s.sidebar__logoImg} src={sidebarLogo} alt="Логотип Вело-Юг"/>
                </a>
            </div>
            <nav className={s.sidebar__nav}>
                <ul className="listReset">
                    <li className={s.sidebar__navItem}><a href="#">Каталог</a></li>
                    <li className={s.sidebar__navItem}><a href="#">Технологии</a></li>
                    <li className={s.sidebar__navItem}><a href="#">Покупателям</a></li>
                    <li className={s.sidebar__navItem}><a href="#">Контакты</a></li>
                    <li className={s.sidebar__navItem}><a href="#">Дилерам</a></li>
                </ul>
            </nav>
            <nav>
                <ul className={classNames(s.sidebar__iconsList, 'listReset')}>
                    <li><a href="/"><img src={mainIcon} alt="main"/></a></li>
                    <li><a href="#"><img src={searchIcon} alt="search"/></a></li>
                    <li><a href="#"><img src={cardIcon} alt="card"/></a></li>
                    <li><a href="#"><img src={userIcon} alt="user"/></a></li>
                </ul>
            </nav>
        </aside>


    );
};

export default BurgerMenu;