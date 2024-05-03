import React, {useRef, useState} from 'react';
import classNames from 'classnames';

import s from './header.module.scss'
import '../../App.scss'

import HeaderLogo from "../../assets/img/svg/logo.svg";
import Arrow from '../../assets/img/arrow.svg?react'
import SearchIcon from '../../assets/img/svg/search.svg?react'
import UserIcon from '../../assets/img//svg/user.svg?react'
import CartIcon from '../../assets/img/svg/card.svg?react'

import BurgerButton from "../../UI/burgerButton/BurgerButton";
import CatalogPopup from "../CatalogPupup/CatalogPopup";
import CustomersPopup from "../CustomersPopup/CustomersPopup";
import {Link} from "react-router-dom";


const Header = () => {

    const [openPopup, setOpenPopup] = useState({
        catalog: false,
        customers: false
    });


    const catalogLinkRef = useRef(null)
    const customerLinkRef = useRef(null)

    const handleClick = (e) => {
        e.preventDefault()

        if (e.target.name === 'catalog') {
            setOpenPopup({
                catalog: !openPopup.catalog,
                customers: false
            });
        } else if (e.target.name === 'customers') {
            setOpenPopup({
                catalog: false,
                customers: !openPopup.customers,
            });
        }
    }

    return (
        <header className={s.header}>
            <div className={classNames('container', 'header__container')}>
                <div className={s.header__wrapper}>
                    <div className="header__logo">
                        <Link to="/"><img className={s.header__logoImg} src={HeaderLogo} alt="Логотип Вело-Юг"/></Link>
                    </div>
                    <nav className="header__nav">
                        <ul className={classNames(s.header__navList, 'listReset')}>
                            <li className={s.header__navItem}>

                                <a className={s.header__navItem__link}
                                   href="#"
                                   name="catalog"
                                   onClick={handleClick}
                                   ref={catalogLinkRef}
                                >
                                    Каталог<Arrow className={classNames(s.arrow, openPopup.catalog && s.active)}/>
                                </a>

                                {openPopup.catalog &&
                                    <CatalogPopup openPopup={openPopup} setOpenPopup={setOpenPopup} catalogLinkRef={catalogLinkRef} />}
                            </li>
                            <Link to="/" className={s.header__navItem}>
                                <div className={s.header__navItem__link} href="#">Технологии</div>
                            </Link>
                            <li className={s.header__navItem}>

                                <a className={s.header__navItem__link} href="#"
                                   name="customers"
                                   onClick={handleClick}
                                   ref={customerLinkRef}
                                >
                                    Покупателям<Arrow className={classNames(s.arrow, openPopup.customers && s.active)}/>
                                </a>

                                {openPopup.customers &&
                                    <CustomersPopup openPopup={openPopup} setOpenPopup={setOpenPopup} customerLinkRef={customerLinkRef}/>}
                            </li>
                            <Link to="/" className={s.header__navItem}>
                                <div className={s.header__navItem__link} href="#">Контакты</div>
                            </Link>
                            <Link to="/" className={s.header__navItem}>
                                <div className={s.header__navItem__link} href="#">Дилерам</div>
                            </Link>
                        </ul>
                    </nav>

                    <ul className={classNames(s.header__listIcons, 'listReset')}>
                        <li className={s.header__icon}>
                            <a href="#"><SearchIcon/></a>
                        </li>
                        <li className={s.header__icon}>
                            <a href="#"><UserIcon/></a>
                        </li>
                        <li className={s.header__icon}>
                            <a href="#"><CartIcon/></a>
                        </li>
                    </ul>

                    <BurgerButton />
                </div>
            </div>
        </header>
    );
};

export default Header;