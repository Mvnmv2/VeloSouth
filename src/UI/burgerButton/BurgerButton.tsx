import React from 'react';
import classNames from "classnames";


import '../../App.scss'
import s from './burgerBtn.module.scss'
import {BurgerMenuContext} from "../../App";

const BurgerButton = () => {

    const {showBurgerMenu, setShowBurgerMenu} = React.useContext(BurgerMenuContext)

    return (
        <>
            <button className={classNames(s.burger, 'btnReset')}
                    onClick={() =>{setShowBurgerMenu(!showBurgerMenu)} }
            >
                <span>Открыть навигацию</span></button>
        </>
    );
};

export default BurgerButton;