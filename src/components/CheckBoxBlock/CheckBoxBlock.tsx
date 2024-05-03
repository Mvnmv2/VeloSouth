import React from 'react';
import s from "./checkBoxBlock.module.scss";

const CheckBoxBlock = () => {

    const list = ['BLACKOUT', 'SCENERIDE', 'MATCH', 'SHIFT', 'PULSE', 'FLAGMAN', 'KMS', 'Зайка']

    return (
        <>
            <div className={s.title}>
                Бренды
            </div>

            {
                list.map((item, i) =>
                    <div className={s.brandItem} key={i}>
                        <input type="checkbox" id={'el' + i} name={item}/>
                        <label htmlFor={'el' + i}>{item}</label>
                    </div>
                )
            }
        </>
    );
};

export default CheckBoxBlock;