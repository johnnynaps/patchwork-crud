import React, { Component } from "react";
import { connect } from "react-redux";
import { updateGame, deleteGame } from "../actions/games";
import GameDataService from "../services/games.service";
import { Link } from "react-router-dom";

class Game extends Component {
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
      this.updateContent = this.updateContent.bind(this);
      this.removeGame = this.removeGame.bind(this);

    this.state = {
      currentGame: {
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
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getGame(this.props.match.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        currentGame: {
          ...prevState.currentGame,
          title: title,
        },
      };
    });
  }

  onChangeHome(e) {
    const urlHome = e.target.value;

    this.setState((prevState) => ({
      currentGame: {
        ...prevState.currentGame,
        urlHome: urlHome,
      },
    }));
  }
  
  onChangeSupport(e) {
    const urlSupport = e.target.value;

    this.setState((prevState) => ({
      currentGame: {
        ...prevState.currentGame,
        urlSupport: urlSupport,
      },
    }));
  }

  onChangeNews(e) {
    const urlNews = e.target.value;

    this.setState((prevState) => ({
      currentGame: {
        ...prevState.currentGame,
        urlNews: urlNews,
      },
    }));
  }

  onChangeServer(e) {
    const urlServer = e.target.value;

    this.setState((prevState) => ({
      currentGame: {
        ...prevState.currentGame,
        urlServer: urlServer,
      },
    }));
  }

  onChangeTwitter(e) {
    const urlTwitter = e.target.value;

    this.setState((prevState) => ({
      currentGame: {
        ...prevState.currentGame,
        urlTwitter: urlTwitter,
      },
    }));
  }

  onChangeServerStatus(e) {
    const serverStatus = e.target.value;

    this.setState((prevState) => ({
      currentGame: {
        ...prevState.currentGame,
        serverStatus: serverStatus,
      },
    }));
  }

  onChangeDeveloper(e) {
    const developer = e.target.value;

    this.setState((prevState) => ({
      currentGame: {
        ...prevState.currentGame,
        developer: developer,
      },
    }));
  }

  onChangePatch(e) {
    const currentPatch = e.target.value;

    this.setState((prevState) => ({
      currentGame: {
        ...prevState.currentGame,
        currentPatch: currentPatch,
      },
    }));
  }

  getGame(id) {
    GameDataService.get(id)
      .then((response) => {
        this.setState({
          currentGame: response.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateContent() {
    this.props
      .updateGame(this.state.currentGame.id, this.state.currentGame)
      .then((reponse) => {
        
        this.setState({ message: "The Game was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  removeGame() {
    this.props
      .deleteGame(this.state.currentGame.id)
      .then(() => {
        this.props.history.push("/games");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentGame } = this.state;

    return (
      <div className="submit-form">
        {currentGame ? (
          <div className="submit-form">
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentGame.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="serverStatus">Server Status</label>
                <input
                  type="text"
                  className="form-control"
                  id="serverStatus"
                  value={currentGame.serverStatus}
                  onChange={this.onChangeServerStatus}
                />
              </div>
              <div className="form-group">
                <label htmlFor="currentPatch">Current Patch</label>
                <input
                  type="text"
                  className="form-control"
                  id="currentPatch"
                  value={currentGame.currentPatch}
                  onChange={this.currentPatch}
                />
              </div>
              <div className="form-group">
                <label htmlFor="developer">Developer</label>
                <input
                  type="text"
                  className="form-control"
                  id="developer"
                  value={currentGame.developer}
                  onChange={this.developer}
                />
              </div>
              <div className="form-group">
                <label htmlFor="urlHome">Home URL</label>
                <input
                  type="text"
                  className="form-control"
                  id="urlHome"
                  value={currentGame.urlHome}
                  onChange={this.urlHome}
                />
              </div>
              <div className="form-group">
                <label htmlFor="urlSupport">Support URL</label>
                <input
                  type="text"
                  className="form-control"
                  id="urlSupport"
                  value={currentGame.urlSupport}
                  onChange={this.urlSupport}
                />
              </div>
              <div className="form-group">
                <label htmlFor="urlNews">News URL</label>
                <input
                  type="text"
                  className="form-control"
                  id="urlNews"
                  value={currentGame.urlNews}
                  onChange={this.urlNews}
                />
              </div>
              <div className="form-group">
                <label htmlFor="urlServer">Server Status URL</label>
                <input
                  type="text"
                  className="form-control"
                  id="urlServer"
                  value={currentGame.urlServer}
                  onChange={this.urlServer}
                />
              </div>
              <div className="form-group">
                <label htmlFor="urlTwitter">Twitter URL</label>
                <input
                  type="text"
                  className="form-control"
                  id="urlTwitter"
                  value={currentGame.urlTwitter}
                  onChange={this.urlTwitter}
                />
              </div>
            </form>
            <button
              className="btn btn-success"
              onClick={this.removeGame}
            >
              Delete
            </button>
            <button
              type="submit"
              className="btn btn-success"
              onClick={this.updateContent}
            >
              Update
            </button>
            <p>{this.state.message}</p>
            <div className="footer">
              <Link to={"https://v5.reactrouter.com/web/guides/quick-start"}>React Router</Link>
              <Link to={"https://react-redux.js.org/"}>React Redux</Link>
              <Link to={"https://axios-http.com/docs/intro"}>Axios</Link>
              <Link to={"https://expressjs.com/"}>Express</Link>
              <Link to={"https://sequelize.org/"}>Sequelize</Link>
            </div>
          </div>
        ) : (
          <div>
            <br />
            <p>Click...</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateGame, deleteGame })(Game);