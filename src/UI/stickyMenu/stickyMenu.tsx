import React, {useState} from 'react';
import {Link} from "react-router-dom";
import classNames from "classnames";

import s from './stickyMenu.module.scss'

import main from './icons/MainIcon'
import search from './icons/SarchIcon'
import card from './icons/CardIcon'
import user from './icons/UserIcon'

const StickyMenu = () => {

    const [activeLink, setActiveLink] = useState(0);

    const listItems = [main, search, card, user]

    return (
        <ul className={classNames(s.list, 'listReset')}>
            {
                listItems.map((item, i) => (
                    <li className="item" key={i} onClick={() => setActiveLink(i)}>
                        <Link to={'/'} >{item(classNames(s.icon, activeLink === i ? s.active : ''))}
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
};

export default StickyMenu;