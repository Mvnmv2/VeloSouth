import React, {useState} from 'react';
import s from "./category.module.scss";
import classNames from "classnames";
import {Link} from "react-router-dom";

const Category = () => {

    const list = ['Велосипеды', 'Самокаты', 'Скейтбординг']

    const [active, setActive] = useState(0)

    return (
        <>
            <div className={s.title}>
                Категории
            </div>
            <ul className={classNames(s.category, 'listReset')}>

                {
                    list.map((item, i) => <Link key={i} to='/catalog'>
                        <li className={i === active ? s.active : ''}
                            onClick={() => setActive(i)}
                        > {item}</li>
                    </Link>)
                }
            </ul>
        </>
    );
};

export default Category;