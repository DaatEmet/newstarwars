import React from 'react';
import Navigation from "./Navigation";

const Header = props => {
    return (
        <div>
            <header>
               <Navigation changePage = {props.changePage}/>
                <h1 className="text-center py-3">Luke Skywalker</h1>
            </header>
        </div>
    );
};

export default Header;