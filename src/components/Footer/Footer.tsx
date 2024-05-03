import React from 'react';
import classNames from "classnames";

import s from './footer.module.scss'

import footerLogo from '../../assets/img/Footer-logo.png'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={classNames('container', s.footer__container)}>
                <div className={s.footer__list}>
                    <div className={s.footer__logo}>
                        <a className={s.footer__link} href="#">
                            <img src={footerLogo} alt="Лого футер"/>
                        </a>
                    </div>
                    <div className={s.footer__list__item}>
                        <h3><a className={s.footer__link} href="#">Каталог</a></h3>
                        <p><a className={s.footer__link} href="#">Велосипед детский</a></p>
                        <p><a className={s.footer__link} href="#">Велосипед взрослый</a></p>
                        <p><a className={s.footer__link} href="#">Самокат</a></p>
                    </div>
                    <div className={s.footer__list__item}>
                        <h3><a className={s.footer__link} href="#">Покупателям</a></h3>
                        <p><a className={s.footer__link} href="#">Видео по сборке</a></p>
                        <p><a className={s.footer__link} href="#">Где купить</a></p>
                        <p><a className={s.footer__link} href="#">Политика конфиденциальности</a></p>
                    </div>
                    <div className={s.footer__list__item}>
                        <h3><a className={s.footer__link} href="#">Дилерам</a></h3>
                        <p><a className={s.footer__link} href="#">Написать нам</a></p>
                    </div>
                    <div className={s.footer__list__item}>
                        <h3><a className={s.footer__link} href="#">Связаться с нами</a></h3>
                        <p><a className={s.footer__link} href="tel:+79185999621">+7 918 599-96-21</a></p>
                        <p><a className={s.footer__link}
                              href="mailto:igrushki.veloopt2@toysbag.ru&body=Здравствуйте">igrushki.veloopt2@toysbag.ru</a>
                        </p>
                    </div>
                    <div className={s.footer__list__item}>
                        <h3><a className={s.footer__link} href="#">Наш адрес</a></h3>
                        <p><a className={s.footer__link} href="#">Ростов-на-Дону</a></p>
                        <p><a className={s.footer__link} href="#">ул.&nbsp;Днепропетровская&nbsp;83</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;