import React, { Component } from "react";
import { connect } from "react-redux";
import { createGame } from "../actions/games";
import { Link } from "react-router-dom";

class AddGame extends Component {
    constructor(props) {
      super(props);
      this.onChangeTitle = this.onChangeTitle.bind(this);
      this.onChangeHome = this.onChangeHome.bind(this);
      this.onChangeSupport = this.onChangeSupport.bind(this);
      this.onChangeNews = this.onChangeNews.bind(this);
      this.onChangeServer = this.onChangeServer.bind(this);
      this.onChangeTwitter = this.onChangeTwitter.bind(this);
      this.onChangeServerStatus = this.onChangeServerStatus.bind(this);
      this.onChangeDeveloper = this.onChangeDeveloper.bind(this);
      this.onChangePatch = this.onChangePatch.bind(this);
      this.saveGame = this.saveGame.bind(this);
      this.newGame = this.newGame.bind(this);
  
      this.state = {
        id: null,
        urlHome: "",
        urlSupport: "",
        urlNews: "",
        urlServer: "",
        urlTwitter: "",
        serverStatus: "",
        developer: "",
        currentPatch: "",
        title: "",
  
        submitted: false,
      };
    }

    onChangeTitle(e) {
        this.setState({
          title: e.target.value,
        });
    }

    onChangeHome(e) {
        this.setState({
          urlHome: e.target.value,
        });
    }

    onChangeSupport(e) {
      this.setState({
        urlSupport: e.target.value,
      });
    }

    onChangeNews(e) {
        this.setState({
          urlNews: e.target.value,
        });
    }

    onChangeServer(e) {
        this.setState({
          urlServer: e.target.value,
        });
    }

    onChangeTwitter(e) {
        this.setState({
          urlTwitter: e.target.value,
        });
    }

    onChangeServerStatus(e) {
        this.setState({
          serverStatus: e.target.value,
        });
    }

    onChangeDeveloper(e) {
        this.setState({
          developer: e.target.value,
        });
    }

    onChangePatch(e) {
        this.setState({
          currentPatch: e.target.value,
        });
    }
  
    saveGame() {
      const { title, urlHome, urlSupport, urlNews, urlServer, urlTwitter, serverStatus, developer, currentPatch } = this.state;
  
      this.props
        .createGame(title, urlHome, urlSupport, urlNews, urlServer, urlTwitter, serverStatus, developer, currentPatch)
        .then((data) => {
          this.setState({
            id: data.id,
            title: data.title,
            urlHome: data.urlHome,
            urlSupport: data.urlSupport,
            urlNews: data.urlNews,
            urlServer: data.urlServer,
            urlTwitter: data.urlTwitter,
            serverStatus: data.serverStatus,
            developer: data.developer,
            currentPatch: data.currentPatch,
  
            submitted: true,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  
    newGame() {
      this.setState({
        id: null,
        title: "",
        urlHome: "",
        urlSupport: "",
        urlNews: "",
        urlServer: "",
        urlTwitter: "",
        serverStatus: "",
        developer: "",
        currentPatch: "",
  
        submitted: false,
      });
    }
  
    render() {
      return (
        <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newGame}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="urlHome">Home URL</label>
              <input
                type="text"
                className="form-control"
                id="urlHome"
                required
                value={this.state.urlHome}
                onChange={this.onChangeHome}
                name="urlHome"
              />
            </div>

            <div className="form-group">
              <label htmlFor="urlSupport">Support URL</label>
              <input
                type="text"
                className="form-control"
                id="urlSupport"
                required
                value={this.state.urlSupport}
                onChange={this.onChangeSupport}
                name="urlSupport"
              />
            </div>

            <div className="form-group">
              <label htmlFor="urlNews">News URL</label>
              <input
                type="text"
                className="form-control"
                id="urlNews"
                required
                value={this.state.urlNews}
                onChange={this.onChangeNews}
                name="urlNews"
              />
            </div>

            <div className="form-group">
              <label htmlFor="urlServer">Server URL</label>
              <input
                type="text"
                className="form-control"
                id="urlServer"
                required
                value={this.state.urlurlServerHome}
                onChange={this.onChangeServer}
                name="urlServer"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="urlTwitter">Twitter URL</label>
              <input
                type="text"
                className="form-control"
                id="urlTwitter"
                required
                value={this.state.urlTwitter}
                onChange={this.onChangeTwitter}
                name="urlTwitter"
              />
            </div>

            <div className="form-group">
              <label htmlFor="developer">Developer</label>
              <input
                type="text"
                className="form-control"
                id="developer"
                required
                value={this.state.developer}
                onChange={this.onChangeDeveloper}
                name="developer"
              />
            </div>

            <div className="form-group">
              <label htmlFor="serverStatus">Server Status</label>
              <input
                type="text"
                className="form-control"
                id="serverStatus"
                required
                value={this.state.serverStatus}
                onChange={this.onChangeServerStatus}
                name="serverStatus"
              />
            </div>

            <div className="form-group">
              <label htmlFor="currentPatch">Current Patch</label>
              <input
                type="currentPatch"
                className="form-control"
                id="currentPatch"
                required
                value={this.state.currentPatch}
                onChange={this.onChangePatch}
                name="currentPatch"
              />
            </div>

            <button onClick={this.saveGame} className="btn btn-success">
              Submit
            </button>
            <div className="footer">
              <Link to={"https://v5.reactrouter.com/web/guides/quick-start"}>React Router</Link>
              <Link to={"https://react-redux.js.org/"}>React Redux</Link>
              <Link to={"https://axios-http.com/docs/intro"}>Axios</Link>
              <Link to={"https://expressjs.com/"}>Express</Link>
              <Link to={"https://sequelize.org/"}>Sequelize</Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { createGame })(AddGame);