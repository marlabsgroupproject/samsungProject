import React from "react";
import { Router, Route, browserHistory} from "react-router";

import HomePage from "./components/HomePage/HomePage";

class AppRouter extends React.Component {
        render(){
                return(
                        <Router history={browserHistory}>
                                <Route path="/" component={HomePage}></Route>
                        </Router>
                );
        }
}

module.exports = AppRouter;
