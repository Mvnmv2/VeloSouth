import React from 'react';
import classNames from "classnames";

import '../../App.scss'
import s from './hero.module.scss'
import btnS from '../../UI/button/button.module.scss'
import Button from "../../UI/button/Button";

import heroImg from '../../assets/img/hero-img.png'
import heroImg768 from '../../assets/img/hero-img768.png'
import heroImg480 from '../../assets/img/hero-img480.png'
import heroImg320 from '../../assets/img/hero-img320.png'
import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <section className={s.hero}>
            <div className={classNames('container', s.hero__container)}>
                <h1 className={s.hero__title}>Свобода движения,<span className={classNames(s.hero__title, s.secondLine)}>радость открытий!</span>
                </h1>
                <h2 className={s.hero__subtitle}>Большой выбор велосипедов от Вело Юг</h2>

                <Link className={s.hero__link}  to={'/catalog'} state={'Велосипеды'}>
                    <Button className={btnS.hero__btn}>Перейти в каталог</Button>
                </Link>

                <img className={s.hero__img} src={heroImg} alt="hero-image"/>
                <img className={s.hero__img768} src={heroImg768} alt="hero-image"/>
                <img className={s.hero__img480} src={heroImg480} alt="hero-image"/>
                <img className={s.hero__img320} src={heroImg320} alt="hero-image"/>
            </div>
        </section>
    );
};

export default Hero;