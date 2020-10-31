import React from 'react';
import {checkDate} from '../utils/Constants'

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    componentDidMount() {
        let hero = localStorage.getItem('hero');
        hero = JSON.parse(hero);
        if (hero) {
            if (checkDate(hero.timestamp)) {
                this.getHero();
            } else {
                this.setState({
                    name: hero.name,
                    height: hero.height,
                    birth_year: hero.birth_year,
                    gender: hero.gender,
                    mass: hero.mass,
                    hair_color: hero.hair_color,
                    skin_color: hero.skin_color

                })
            }
        } else {
            this.getHero();
        }
    }

    getHero = () => {
        fetch('https://sw-info-api.herokuapp.com/v1/peoples/1')
            .then(response => response.json())
            .then(data => {
                this.setState(this.state = {
                    name: data.name,
                    height: data.height,
                    birth_year: data.birth_year,
                    gender: data.gender,
                    mass: data.mass,
                    hair_color: data.hair_color,
                    skin_color: data.skin_color,
                    eye_color: data.eye_color,
                    timestamp: new Date()
                });
                localStorage.setItem('hero', JSON.stringify(this.state));
            })
    }

    render() {
        return (
            <div>
                <p>Name: {this.state.name}</p>
                <p>Height: {this.state.height}</p>
                <p>Birth date: {this.state.birth_year}</p>
                <p>Gender: {this.state.gender}</p>
                <p>Mass: {this.state.mass}</p>
                <p>Hair color: {this.state.hair_color}</p>
                <p>Skin color: {this.state.skin_color}</p>
                <p>eye color: {this.state.eye_color}</p>
            </div>
        );
    }

};

export default AboutMe;