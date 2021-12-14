import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
    render() {
        return (
            <div className="home-page-container">
                <h1>Welcome to Patchwork</h1>
                <p>
                    This is a minorly functional prototype of a web app designed by John Napoline. 
                    The original idea was to have a website where you could "subscribe" to different games 
                    and have a singular location with all news/updates/patch notes. 
                    The scope of this project was a little much, with a lot more back-end needed than I had time,
                    and a slightly steeper learning curve for the front-end than i expected. 
                    I'll hopefully have time to fully develop this in the future.
                </p>
                <p>
                    I used React for the front-end and Node.js for the back-end.
                    The page is being hosted by GitHub Pages. I am communicating 
                    with an Amazon RDS Database for MySQL.
                </p>
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

export default HomePage;