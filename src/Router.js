import React from "react";
import { Router, Route, browserHistory} from "react-router";

import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import ManageAuthorPage from "./components/Authors/manageAuthorPage";

class AppRouter extends React.Component {
        render(){
                return(
                        <Router history={browserHistory}>
                                <Route path="/" component={HomePage}></Route>
                                <Route path="/about" component={AboutPage}></Route>
                                <Route path="/author" component={ManageAuthorPage}></Route>
                        </Router>
                );
        }
}

module.exports = AppRouter;
