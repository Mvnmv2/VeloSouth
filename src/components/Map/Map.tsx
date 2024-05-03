import React from 'react';

import s from './map.module.scss'

import mountTop from '../../assets/img/map-bgc_Top4.png'
import mountBottom from '../../assets/img/map-bgc_bottom.png'
import footerLogo from '../../assets/img/Footer-logo.png'
import YandexMap from "../../UI/yandexMap/YandexMap";

const Map = () => {
    return (
        <section className={s.map}>
            <div className={s.map__container}>
                <div className={s.map__title}>Где купить? <span
                    className={s.map__title__city}>Ростов-на-дону</span></div>
                <div className={s.map__wrap}>
                    <img className={s.map__wrap__bgc__top} src={mountTop} alt="Горы верх"/>
                    {/*<div className="embed" style={{position: 'relative'}}>*/}
                        {/*<a href="https://yandex.ru/maps/39/rostov-na-donu/?utm_medium=mapframe&utm_source=maps"*/}
                        {/*   style={{*/}
                        {/*       color: '#eee',*/}
                        {/*       fontSize: '12px',*/}
                        {/*       position: 'absolute',*/}
                        {/*       top: '0'*/}
                        {/*   }}>Ростов‑на‑Дону</a>*/}
                        {/*<a href="https://yandex.ru/maps/geo/rostov_na_donu/53166035/?ll=39.759964%2C47.254342&utm_campaign=desktop&utm_medium=mapframe&utm_source=maps&z=11"*/}
                        {/*   style={{*/}
                        {/*       color: '#eee',*/}
                        {/*       fontSize: '12px',*/}
                        {/*       position: 'absolute',*/}
                        {/*       top: '14px'*/}
                        {/*   }}>Яндекс Карты</a>*/}
                        {/*<iframe*/}
                        {/*    src="https://yandex.ru/map-widget/v1/?ll=39.759964%2C47.254342&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE2NjAzNRIo0KDQvtGB0YHQuNGPLCDQoNC-0YHRgtC-0LIt0L3QsC3QlNC-0L3RgyIKDaXhHkIVaeM8Qg%2C%2C&utm_campaign=desktop&utm_medium=search&utm_source=maps&z=11"*/}
                        {/*    width="560" height="400" frameBorder="0"*/}
                        {/*    allowFullScreen={true}>*/}

                        {/*</iframe>*/}

                        <YandexMap />


                    {/*</div>*/}

                        <img className={s.map__wrap__bgc__bottom} src={mountBottom} alt="Горы низ"/>

                    <img className={s.map__wrap__icon} src={footerLogo} alt="Логотип"/>
                </div>
            </div>
        </section>
    );
};

export default Map;