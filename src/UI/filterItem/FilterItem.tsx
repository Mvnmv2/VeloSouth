import s from '../../components/FiltersList/filtersList.module.scss'
import React, {useState} from "react";
import arrow from "../../assets/img/arrow.svg";
import classNames from "classnames";

function FilterItem({prop, foCss}) {

    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <>
            <div className={show ? classNames(s.title, s.show) : s.title} onClick={() => handleClick()}>
                <div>{prop?.title}</div>
                <div><img className={show ? classNames(s.arrowRotate, s.show) : s.arrowRotate} src={arrow} alt="arrow"/></div>
            </div>

            <div className={show ? classNames(s.item, s.show, s[foCss]) : classNames(s.item, s[foCss])}>
                {prop?.property.map((item, i) => (
                    <label key={i}>
                        <input type="checkbox" key={i}/><span>{item}</span>
                    </label>
                ))}
            </div>

            <hr className={s.line}/>
        </>
    )
}

export default FilterItem;


