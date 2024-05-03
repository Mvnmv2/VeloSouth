import React from 'react';
import s from "./card.module.scss";
import classNames from "classnames";
import btnStyles from "../button/button.module.scss";
import {Link} from "react-router-dom";

const Card = ({catalogPage, image, priceActual, priceNotActual, title, sortViewToggle}) => {

    const priceFormat = (p) => {
        return new Intl.NumberFormat("ru", {
            style: "currency", currency: "RUB"
        }).format(p)
    }

    return (
        <>
            <Link to={''} className={s.card__link}>
                <div className={classNames(s.card, !sortViewToggle && catalogPage && s.lineView )}>
                    <div className={classNames(s.image, catalogPage && s.bgcCatalogPage)}>
                        <img src={image} alt="card-image"/>
                    </div>
                    {
                        catalogPage && <ul className={classNames(s.description, sortViewToggle && catalogPage && s.lineView, 'listReset')}>
                            <li>Модель оснащена алюминиевой рамой</li>
                            <li>Дисковые гидравлические тормоза</li>
                            <li>24 скорости</li>
                            <li>Пружинно-эластомерная с блокировкой вилка</li>
                            <li>Задний переключатель Shimano Altus</li>
                        </ul>
                    }

                    <div className={s.price}>
                        <p className={s.price__actual}>{priceFormat(priceActual)}</p>
                        <p className={s.price__not__actual}>{priceFormat(priceNotActual)}</p>
                    </div>
                    <div className={s.title}>{title}</div>
                    <button
                        className={classNames(s.button, btnStyles.button__blue, 'btnReset', catalogPage && s.btnCatalogPage)}>Выбрать
                    </button>
                </div>
            </Link>
        </>
    );
};

export default Card;

