import React from 'react';

import s from './popular.module.scss'

import ArrowMoreIcon from '../../assets/img/bicycle/arrow-more.svg?react'
import Card from "../../UI/card/Card";


const Popular = () => {

    const cardItems = [
        {
            id: 0,
            image: 'src/assets/img/catalog/11.png',
            priceActual: 27085,
            priceNotActual: 57000,
            title: 'Горный велосипед KMS диаметр 26”',
        },
        {
            id: 1,
            image: 'src/assets/img/catalog/22.png',
            priceActual: 13054,
            priceNotActual: 32614,
            title: 'Городской велосипед PULSE диаметр 27,5”',
        },
        {
            id: 2,
            image: 'src/assets/img/catalog/33.png',
            priceActual: 2200,
            priceNotActual: 6586,
            title: 'Самокат трюковой KMS TRICK, дека 48 см',
        },
        {
            id: 3,
            image: 'src/assets/img/catalog/44.png',
            priceActual: 1620,
            priceNotActual: 4795,
            title: 'Самокат двухколесный складной, дека 35 см',
        },

    ]

    return (
        <section className={s.popular}>
            <div className={s.popular__container}>
                <div className={s.popular__header}>
                    <div className={s.popular__header__title}>Популярное</div>
                    <div className={s.popular__header__more}>
                        <a className={s.more__link} href="#">Смотреть больше</a>
                        <ArrowMoreIcon className={s.arrowMoreIcon}/>
                    </div>
                </div>
                <div className={s.popular__slider}>

                    {
                        cardItems.map(card =>  <Card key={card.id} {...card}/> )
                    }
                </div>
            </div>
        </section>
    );
};

export default Popular;