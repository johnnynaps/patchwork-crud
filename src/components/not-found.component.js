import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
    render() {
        return (
            <div className="home-page-container">
                <h1>Sorry that page isn't a thing..</h1>
                <p>I wish it was though.</p>
                <Link to="/" className="go-home">Try this</Link>
                <div className="footer">
                    <Link to={"https://v5.reactrouter.com/web/guides/quick-start"}>React Router</Link>
                    <Link to={"https://react-redux.js.org/"}>React Redux</Link>
                    <Link to={"https://axios-http.com/docs/intro"}>Axios</Link>
                    <Link to={"https://expressjs.com/"}>Express</Link>
                    <Link to={"https://sequelize.org/"}>Sequelize</Link>
                </div>
            </div>
        )
    }
}

export default NotFound;