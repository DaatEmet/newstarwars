import React from 'react';
import styles from '../css_modules/contact.module.css';
import {checkDate} from "../utils/Constants";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: []
        }
    }

    componentDidMount() {
        const planet = JSON.parse(localStorage.getItem('planets'))
        if (planet) {
            if(checkDate(planet.timestamp)){
                this.getPlanetsName()
            }else {
                this.setState({
                    planets: planet.planets
                })
            }
        } else {
            this.getPlanetsName()
        }
    }

    getPlanetsName = () => {
        fetch('https://sw-info-api.herokuapp.com/v1/planets')
            .then(response => response.json())
            .then(data => data.map((i) => this.state.planets.push(i.name)))
            .then(data => {
                this.setState(this.state = {
                    data,
                    timestamp: new Date()
                });
                localStorage.setItem('planets', JSON.stringify(this.state))
            })
    }


    render() {
        return (
            <div className='container'>
                <form>
                    <label>First Name</label>
                    <input type="text" name="firstname" placeholder="Your name.."/>
                    <label>Last Name</label>
                    <input type="text" name="lastname" placeholder="Your last name.."/>
                    <label>Planet:</label>
                    <select name="planet">
                        {this.state.planets.map((item, index) => <option key={index}>{item}</option>)}
                    </select>
                    <label>Subject</label>
                    <textarea name="subject" placeholder="Write something.."></textarea>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
};

export default Contact;