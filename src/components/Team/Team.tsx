import React from 'react';

import s from './team.module.scss'

const Team = () => {
    return (
        <section className={s.team}>
            <div className={s.team__container}>
                <div className={s.team__left}>
                    <div className={s.team__left__title}>15&nbsp;лет</div>
                    <div className={s.team__left__subtitle}>на&nbsp;рынке</div>
                </div>
                <div className={s.team__right}>
                    <div className={s.team__right__title}>Мы команда профессионалов!</div>
                    <div className={s.team__right__descr}>Наш опыт и знания воплощаются в каждой детали.
                        Год от года мы совершенствуем наши велосипеды, делая их не просто качественными,
                        но и доступными. Наша миссия — сделать велосипедную езду максимально удобной
                        для каждого. Покоряйте дороги с нами!
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;