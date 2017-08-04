import React from "react";
import { Link } from "react-router";
import Header from "../../header/Header";

class HomePage extends React.Component {
    render(){
        return(
            <div>
                <Header />
                <div className="container-fluid text-center jumbotron">
                    <h1>Pluralsight</h1>
                    <p className="text-muted">React, React-Router, Flux, Webpack, Babel...!!!</p>
                </div>
            </div>
        );
    }
}

module.exports = HomePage;
