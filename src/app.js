import React from "react";
import ReactDOM from "react-dom";

import AppRouter from "./Router";

class App extends React.Component {
    render(){
        return(
            <div className="container-fluid">
                <AppRouter />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
