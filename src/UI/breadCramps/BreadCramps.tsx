import { useLocation } from 'react-router-dom';

import s from './breadCramps.module.scss'

const BreadCramps = () => {

    const { state } = useLocation();
    return (
        <div className={s.root}>
            Главная / {state}
        </div>
    );
};

export default BreadCramps;