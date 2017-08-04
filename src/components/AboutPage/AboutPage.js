import React from "react";

import Header from "../../header/Header";

class AboutPage extends React.Component {
    render(){
        return(
            <div>
                <Header />
                <div className="container-fluid jumbotron">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <img src="https://image.freepik.com/free-icon/male-user-profile-picture_318-37825.jpg" className="img-thumbnail" style={{width: 200}}></img>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <h3>Name: Parth Pathak</h3>
                            <h3>Company: Marlabs Inc.</h3>
                            <h3>Email: p_pathak@outlook.com</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = AboutPage;
