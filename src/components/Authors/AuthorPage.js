import React from "react";
import Header from "../../header/Header";
import AuthorList from "./AuthorList";

class AuthorPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            authors : [
                {
                    id : "cory-house",
                    firstName : "Cory",
                    lastName : "House"
                },
                {
                    id : "parth-pathak",
                    firstName : "Parth",
                    lastName : "Pathak"
                },
                {
                    id : "manan-modi",
                    firstName : "Manan",
                    lastName : "Modi"                
                }
            ]
        }
    }

    render(){
        return(
            <div>
                <Header />
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
}

module.exports = AuthorPage;
