import React, {useState} from 'react'
import {Route, Routes} from "react-router-dom"

import './App.scss'
import {CSSTransition} from 'react-transition-group'

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import s from "./components/BurgerMenu/burgerMenu.module.scss";

import Home from "./pages/Home";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import StickyMenu from "./UI/stickyMenu/stickyMenu";

export const BurgerMenuContext = React.createContext({});

function App() {

    const [showBurgerMenu, setShowBurgerMenu] = useState(false);


    return (
        <div className='page__body'>
            <BurgerMenuContext.Provider value={{showBurgerMenu, setShowBurgerMenu}}>
                <div className="siteContainer">

                    <StickyMenu />

                    <Header/>

                    <CSSTransition
                        in={showBurgerMenu}
                        unmountOnExit
                        classNames={{
                            // enter: s.sidebarExit,
                            enterActive: s.sidebarExit,
                            enterDone: s.sidebarExit,
                            //
                            // exit: s.sidebar,
                            exitActive: s.sidebar,
                            // exitDone: s.sidebar,
                        }}
                        timeout={200}
                    >
                        <BurgerMenu/>
                    </CSSTransition>


                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/catalog" element={ <CatalogPage/>} />
                    </Routes>

                    <Footer/>
                </div>
            </BurgerMenuContext.Provider>

        </div>
    )
}

export default App
