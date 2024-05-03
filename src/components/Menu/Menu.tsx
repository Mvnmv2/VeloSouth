import React from 'react';

import s from './menu.module.scss';
import classNames from "classnames";

import MountBikeImg from '../../assets/img/menu/mount-bike.png';
import KidsBikeImg from '../../assets/img/menu/kids-bike.png';
import SkatesImg from '../../assets/img/menu/skates.png';
import SmImg from '../../assets/img/menu/sm.png';
import WheelImg from '../../assets/img/menu/wheel.png';

const Menu = () => {
    return (
        <section className={s.menu}>
            <div className={classNames(s.menu__container, 'container')}>
                <div className={s.menu__cardsList}>
                    <div className={s.menu__card}>
                        <a className={s.menu__cardLink} href="#">
                            <h2 className={s.menu__cardTitle}>Велосипеды горные</h2>
                            <img className={s.card__img} src={MountBikeImg} alt="Велосипеды горные"/>
                        </a>
                    </div>
                    <div className={s.menu__card}>
                        <a className={s.menu__cardLink} href="#">
                            <h2 className={s.menu__cardTitle}>Велосипеды<br/>детские</h2>
                            <img className={s.card__img} src={KidsBikeImg} alt="Велосипеды детские"/>
                        </a>
                    </div>
                    <div className={s.menu__card}>
                        <a className={s.menu__cardLink} href="#">
                            <h2 className={s.menu__cardTitle}>Скейтбординг</h2>
                            <img className={s.card__img} src={SkatesImg} alt="Скейтбординг"/>
                        </a>
                    </div>
                    <div className={s.menu__card}>
                        <a className={s.menu__cardLink} href="#">
                            <h2 className={s.menu__cardTitle}>Самокаты детские и трюковые</h2>
                            <img className={s.card__img} src={SmImg} alt="Самокаты"/>
                        </a>
                    </div>
                    <div className={s.menu__card}>
                        <a className={s.menu__cardLink} href="#">
                            <h2 className={s.menu__cardTitle}>Перейти в<br/>каталог</h2>
                            <img className={s.card__img} src={WheelImg} alt="Колесо"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu;