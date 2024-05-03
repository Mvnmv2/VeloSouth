import React from 'react';

import s from './instruction.module.scss'

import poster from '../../assets/img/poster.png'
import instruction from '../../assets/video/instruction.mp4'

const Instruction = () => {
    return (
        <section className={s.instruction}>
            <div className={s.instruction__container}>
                <div className={s.instruction__title}>Наши велосипеды легко собираются</div>
                <div className={s.instruction__description}>Убедитесь в этом сами, просмотр видео
                    займёт 5
                    минут
                </div>
                <div className="embed">
                    <video controls poster={poster} width="1562" height="684">
                        <source src={instruction} type="video/mp4"/>
                        Ваш браузер не поддерживает
                        встроенные видео: (
                    </video>
                </div>
            </div>
        </section>
    );
};

export default Instruction;