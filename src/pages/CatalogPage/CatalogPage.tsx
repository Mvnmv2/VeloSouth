import React, {useEffect, useState} from 'react';
import classNames from "classnames";
import {Link} from 'react-router-dom';

import s from './catalogPage.module.scss'
import BreadCramps from "../../UI/breadCramps/BreadCramps";

import MatchBrand from '../../assets/img/brand-list/MATCH.svg?react'
import BlackOutBrand from '../../assets/img/brand-list/BLACKOUT.svg?react'
import SceneRideBrand from '../../assets/img/brand-list/SCENERIDE.svg?react'
import ShiftBrand from '../../assets/img/brand-list/shift.svg?react'
import RooksBrand from '../../assets/img/brand-list/rooks.svg?react'
import FlagmanBrand from '../../assets/img/brand-list/FLAGMAN.svg?react'
import greyBoxImg from '../../assets/img/sort-view/grey-box.svg'
import blueBoxImg from '../../assets/img/sort-view/blue-box.svg'
import greyLineImg from '../../assets/img/sort-view/grey-line.svg'
import blueLineImg from '../../assets/img/sort-view/blue-line.svg'
import Category from "../../components/Category/Category";
import CheckBoxBlock from "../../components/CheckBoxBlock/CheckBoxBlock";
import Card from "../../UI/card/Card";
import FiltersList from "../../components/FiltersList/FiltersList";
import GreyLine from "../../UI/greyLine/GreyLine";
import axios from "axios";


const CatalogPage = () => {

    const bradsList = [<MatchBrand/>, <BlackOutBrand/>, <SceneRideBrand/>, <ShiftBrand/>, <RooksBrand/>,
        <FlagmanBrand/>]

    const [sortViewToggle, setSortViewToggle] = useState(true)
    const [cardItems, setCardItems] = useState([])

    const [filters, setFilters] = useState(null)


    const changeView = () => {
        setSortViewToggle(!sortViewToggle)
        console.log('changeView')
    }


    useEffect(() => {
        try {
            fetch('http://localhost:3001/catalogItems')
                .then(res => res.json())
                .then(json => setCardItems(json))
        } catch (e) {
            console.log(e + ' Ошибка загрузки каталога товаров')
        }

        const getWheels = async () => {
            try {
                let res = await axios.get('http://localhost:3001/filters')
                setFilters(res.data)

            } catch (e) {
                console.log('Ошибка загрузки параметров фильтрации :' + e)
            }
        }
        getWheels()
    }, [])

    return (

        <div className={classNames(s.catalogPage, s.catalogPage__container, 'container')}>

            <BreadCramps/>

            <h1 className={s.title}>Все велосипеды<span className={s.title__Count}>110 товаров</span></h1>

            <ul className={classNames(s.brandList, 'listReset')}>
                {
                    bradsList.map((brand, i) => <Link key={i} className={s.brandList__item}>
                        <li>{brand}</li>
                    </Link>)
                }
            </ul>

            <div className={s.filter_Sort_CatalogItems__container}>

                <aside className={s.filter}>

                    <Category/>

                    <GreyLine/>

                    <CheckBoxBlock/>

                    <GreyLine/>

                    <FiltersList filters={filters}/>

                </aside>

                <div className="sort_CatalogItems__container">

                    <section className={s.sort}>

                        <form className={s.sortForm}>
                            <select className={s.select} name="sort" id="sort">
                                <option>Рекомендуем</option>
                                <option>Сначала дешевле</option>
                                <option>Сначала дороже</option>
                                <option>Рейтинг</option>
                            </select>
                        </form>

                        <div className="sort__view">
                            <button className={classNames(s.sort__viewBtn, 'btnReset')}
                                    onClick={changeView}>
                                <img src={sortViewToggle ? blueBoxImg : greyBoxImg} alt="box"/>
                            </button>
                            <button className={classNames(s.sort__viewBtn, 'btnReset')}
                                    onClick={changeView}>
                                <img src={sortViewToggle ? greyLineImg : blueLineImg} alt="line"/>
                            </button>
                        </div>


                    </section>

                    <section className={classNames(s.catalogItems, !sortViewToggle && s.lineView)}>
                        {
                            cardItems.map((card) => <Card key={card.id} catalogPage {...card}
                                                          sortViewToggle={sortViewToggle}/>)
                        }
                    </section>

                    <div className={s.pagination}>pagination</div>

                </div>

            </div>
        </div>
    );
};

export default CatalogPage;