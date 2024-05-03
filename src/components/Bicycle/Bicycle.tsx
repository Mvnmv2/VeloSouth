import React from 'react';
import classNames from "classnames";

import s from './bicycle.module.scss'

import blackoutLogo from '../../assets/img/bicycle/blackout-logo.png'
import scenerideLogo from '../../assets/img/bicycle/sceneride-logo.png'
import bicycle from '../../assets/img/bicycle/pink-bicycle.png'
import redSign from '../../assets/img/bicycle/red-sign.png'

const Bicycle = () => {
    return (
        <section className={s.bicycle}>
            <div className={s.bicycle__title}>Представляем нашу новую линейку велосипедов BLACKOUT и
                абсолютную новинку 2024 года SCENERIDE
            </div>
            <div className={s.bicycle__brands}>
                <div className={s.bicycle__brands__left}>
                    <img src={blackoutLogo} alt="blackout-logo"/>
                </div>
                <div className={s.bicycle__brands__right}>
                    <img src={scenerideLogo} alt="sceneride-logo"/>
                </div>
            </div>
            <div className={s.bicycle__img}>
                <img src={bicycle} alt="bicycle"/>
                <button className={classNames('btnReset', s.redSign)}>
                    <img src={redSign} alt="red-sign"/>
                </button>
                <button className={classNames('btnReset', s.redSign)}>
                    <img src={redSign} alt="red-sign"/>
                </button>
                <button className={classNames('btnReset', s.redSign)}>
                    <img src={redSign} alt="red-sign"/>
                </button>
                <button className={classNames('btnReset', s.redSign)}>
                    <img src={redSign} alt="red-sign"/>
                </button>
                <button className={classNames('btnReset', s.redSign)}>
                    <img src={redSign} alt="red-sign"/>
                </button>
                <button className={classNames('btnReset', s.redSign)}>
                    <img src={redSign} alt="red-sign"/>
                </button>
            </div>
        </section>
    );
};

export default Bicycle;