import React from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import Home from "./Home";
import AboutMe from "./About me";
import StarWars from "./StarWars";
import Contact from "./Contact";
import {aboutMePage, contactPage, starWarsPage} from "../utils/Constants";

const Main = (props) => {
    switch (props.page) {
        case aboutMePage : return <AboutMe/>
        case starWarsPage : return <StarWars/>
        case contactPage : return <Contact/>
        default : return <Home/>
    }

};

export default Main;