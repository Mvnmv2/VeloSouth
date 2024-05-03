import React, {useRef} from 'react';
import classNames from "classnames";
import s from "../Header/popup.module.scss";

import useHandleClickOutside from '../../Hooks/useHandleClickOutside.js'


interface Props {
    openPopup: {
        catalog: boolean,
        customers: boolean
    }
    setOpenPopup: (openPopup) => void;
}


const CustomersPopup = ({openPopup, setOpenPopup, customerLinkRef}: Props) => {

    const customerRef = useRef(null);

    const list = ['Где\ купить', 'Видео\ сборки', 'Техподдержка', 'Написать\ нам']

    const closePopup = () => {
        setOpenPopup({
                ...openPopup,
                customers: false
            }
        )
    }

    useHandleClickOutside(customerLinkRef, customerRef, closePopup)


    return (
        <div ref={customerRef} className={s.popup}>
            <ul className={classNames(s.popup__list, 'listReset')}>
                {
                    list.map((item, i) => <li key={i} onClick={closePopup}><a href="#">{item}</a></li>)
                }
            </ul>
        </div>
    );
};

export default CustomersPopup;