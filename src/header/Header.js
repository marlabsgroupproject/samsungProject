import React from "react";
import { Link } from "react-router";

class Header extends React.Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div>
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <div className="container">
                                <ul className="nav navbar-nav">
                                    <li><Link to="/">MOBILE</Link></li>
                                    <li><Link to="/">TV & AUDIO</Link></li>
                                    <li><Link to="/">COMPUTING</Link></li>
                                    <li><Link to="/">APPLIANCES</Link></li>
                                </ul>
                                <span><img src="http://pngimg.com/uploads/samsung_logo/samsung_logo_PNG4.png?i=1" style={{width:200, height:30, marginTop:10, marginLeft:50}}/></span>
                                <ul className="nav navbar-nav navbar-right">
                                    <li><Link to="/">SUPPORT</Link></li>
                                    <li><Link to="/">BUSINESS</Link></li>
                                    <li><Link to="/">LOG IN / SIGN UP</Link></li>
                                    <li><Link to="/"><span className="glyphicon glyphicon-search"></span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="glyphicon glyphicon-shopping-cart"></span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

module.exports = Header;
