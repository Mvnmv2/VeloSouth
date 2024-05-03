import React, {useRef} from 'react';
import classNames from "classnames";
import s from "../Header/popup.module.scss";

import useHandleClickOutside from '../../Hooks/useHandleClickOutside.js'
import {Link} from "react-router-dom";


interface Props {
    openPopup: {
        catalog: boolean,
        customers: boolean
    }
    setOpenPopup: (openPopup) => void;
}

const CatalogPopup = ({openPopup, setOpenPopup, catalogLinkRef, handleClick}: Props) => {

    const catalogRef = useRef(null);

    const brands = ['BLACKOUT', 'SCENERIDE', 'MATCH', 'SHIFT', 'PULSE', 'FLAGMAN', 'KMS', 'Зайка']
    const bicycles = ['Взрослые', 'Детские', 'Подростковые', 'Женские', 'Мужские', 'Для\ девочек', 'Для\ мальчиков']
    const scooters = ['Детские', 'Трюковые', 'Для\ девочек', 'Для\ мальчиков']
    const skates = ['Пенниборды', 'Круизеры', 'Роллерсферы', 'Взрослые', 'Детские']

    const closePopup = () => {
        setOpenPopup({
                ...openPopup,
                catalog: !openPopup.catalog
            }
        )
    }

    useHandleClickOutside(catalogLinkRef, catalogRef, closePopup);

    return (
        <div className={s.popup} ref={catalogRef} >
            <ul className={classNames(s.popup__list, 'listReset')}>
                <li>
                    <h4><Link to="catalog" onClick={closePopup} state="Бренды">Бренды</Link></h4>
                    {
                        brands.map((brand, i) => <Link to="catalog" key={i} onClick={closePopup} state={`Бренды / ${brand}`}>{brand}</Link>)
                    }
                </li>
                <li>
                    <h4><Link to="catalog" onClick={closePopup} state="Велосипеды">Велосипеды</Link></h4>
                    {
                        bicycles.map((bicycle, i) => <Link to="catalog" key={i} onClick={closePopup} state={`Велосипеды / ${bicycle}`}>{bicycle}</Link>)
                    }
                </li>
                <li>
                    <h4><Link to="catalog" onClick={closePopup} state="Самокаты">Самокаты</Link></h4>
                    {
                        scooters.map((scooter, i) => <Link to="catalog" key={i} onClick={closePopup} state={`Самокаты / ${scooter}`}>{scooter}</Link>)
                    }
                </li>
                <li>
                    <h4><Link to="catalog" onClick={closePopup} state="Скейтбординг">Скейтбординг</Link></h4>
                    {
                        skates.map((skate, i) => <Link to="catalog" key={i} onClick={closePopup} state={`Скейтбординг / ${skate}`}>{skate}</Link>)
                    }
                </li>
            </ul>
        </div>
    );
};

export default CatalogPopup;