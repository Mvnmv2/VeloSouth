import React from 'react';

import {YMaps, Map, Placemark} from "@pbe/react-yandex-maps";

import logo from '../../assets/img/Footer-logo.png'

import s from './yandexMap.module.scss'


const YandexMap = () => {

    return (
        <YMaps>
            <Map className={s.map}
                 defaultState={{
                     center: [47.266594, 39.704857],
                     zoom: 9,
                     controls: ["zoomControl", "fullscreenControl"],
                     behaviors: ['drag'],

                 }}
                 modules={["control.ZoomControl", "control.FullscreenControl"]}
            >
                <Placemark
                    modules={["geoObject.addon.balloon"]}
                    defaultGeometry={[47.266594, 39.704857]}
                    properties={{
                        balloonContentBody:
                            "Вело-Юг: Ростов-на-Дону, ул. Днепропетровская 83, тел.: +7 918 599-96-21",
                    }}
                />
            </Map>
        </YMaps>
    );
};

export default YandexMap;