import React from 'react';
import Hero from "../components/Hero/Hero";
import Menu from "../components/Menu/Menu";
import Bicycle from "../components/Bicycle/Bicycle";
import Team from "../components/Team/Team";
import Popular from "../components/Popular/Popular";
import Instruction from "../components/Instruction/Instruction";
import Map from "../components/Map/Map";

const Home = () => {
    return (
        <main className="main">

            <Hero/>
            <Menu/>

            <div className="container bicycle__container">
                <div className="backgroundContainer">

                    <Bicycle/>
                    <Team/>
                    <Popular/>
                    <Instruction/>
                    <Map/>

                </div>
            </div>
        </main>
    );
};

export default Home;