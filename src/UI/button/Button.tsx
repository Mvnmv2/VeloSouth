import React, {ReactNode} from 'react';
import classNames from "classnames";

import s from './button.module.scss'

export interface Props {children: ReactNode}

const Button = ({children}: Props) => {
    return (
        <>
            <button className={classNames(s.button, s.button__blue, s.hero__btn, 'btnReset')}>{children}</button>
        </>
    );
};

export default Button;