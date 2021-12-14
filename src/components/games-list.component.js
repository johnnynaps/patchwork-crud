import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveGames, findGamesByTitle } from "../actions/games";
import { Link } from "react-router-dom";

class GamesList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveGame = this.setActiveGame.bind(this);
    this.findByTitle = this.findByTitle.bind(this);

    this.state = {
      currentGame: null,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveGames();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle,
    });
  }

  refreshData() {
    this.setState({
      currentGame: null,
      currentIndex: -1,
    });
  }

  setActiveGame(game, index) {
    this.setState({
      currentGame: game,
      currentIndex: index,
    });
  }

  findByTitle() {
    this.refreshData();

    this.props.findGamesByTitle(this.state.searchTitle);
  }

  render() {
    const { searchTitle, currentGame, currentIndex } = this.state;
    const { games } = this.props;

    return (
      <div className="list-container parent">
        <div className="search-container btn-container parent">
          <div className="search-container btn-container child nice-line">
            <input
              type="text"
              className="form-control input-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="form-control btn-container">
              <button
                className="search-btn"
                type="button"
                onClick={this.findByTitle}
              >
                Search
              </button>
              <button className="account-link-button"><Link to="/add" className="btn-link">New Game</Link></button>
            </div>
          </div>
        </div>
        <div className="list-container child">
          <h2>Games:</h2>

          <ul className="list-group">
            {games &&
              games.map((game, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveGame(game, index)}
                  key={index}
                >
                  {game.title}
                </li>
              ))}
          </ul>

        </div>
        <div className="result-container-parent">
          {currentGame ? (
            <div className="result-container-child">
              <h3>Selected Game: </h3>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {currentGame.title}
              </div>
              <div>
                <label>
                  <strong>Current Patch:</strong>
                </label>{" "}
                {currentGame.currentPatch}
              </div>
              <div>
                <label>
                  <strong>Server Status:</strong>
                </label>{" "}
                {currentGame.serverStatus}
              </div>
              <div className="remote-links">
                <a href={ currentGame.urlHome } target="_blank" rel="noreferrer">Home</a>
                <a href={ currentGame.urlNews } target="_blank" rel="noreferrer">News</a>
                <a href={ currentGame.urlSupport } target="_blank" rel="noreferrer">Support</a>
                <a href={ currentGame.urlServer } target="_blank" rel="noreferrer">Server Status</a>
                <a href={ currentGame.urlTwitter } target="_blank" rel="noreferrer">Twitter</a>
              </div>
              <div className="btn-container">
                <Link to={"/games/" + currentGame.id} className="list-btn">Edit</Link>
                <Link to={"/sub"} className="list-btn">Sub</Link>
              </div>
            </div>
          ) : (
            <div className="beep">
              <br />
              <p>Select a game for details.</p>
            </div>
          )}
        </div>
        <div className="footer">
          <Link to={"https://v5.reactrouter.com/web/guides/quick-start"}>React Router</Link>
          <Link to={"https://react-redux.js.org/"}>React Redux</Link>
          <Link to={"https://axios-http.com/docs/intro"}>Axios</Link>
          <Link to={"https://expressjs.com/"}>Express</Link>
          <Link to={"https://sequelize.org/"}>Sequelize</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.games,
  };
};

export default connect(mapStateToProps, { retrieveGames, findGamesByTitle })(GamesList);