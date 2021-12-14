import React, { Component } from "react";
import { connect } from "react-redux";
import { createAccount } from "../actions/accounts";
import { Link } from "react-router-dom";

class AddAccount extends Component {
    constructor(props) {
      super(props);
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangeFname = this.onChangeFname.bind(this);
      this.onChangeLname = this.onChangeLname.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.saveAccount = this.saveAccount.bind(this);
      this.newAccount = this.newAccount.bind(this);
  
      this.state = {
        id: null,
        email: "",
        fname: "",
        lname: "",
        username: "",
        password: "",
  
        submitted: false,
      };
    }
  
    onChangeUsername(e) {
      this.setState({
        username: e.target.value,
      });
    }
  
    onChangeEmail(e) {
      this.setState({
        email: e.target.value,
      });
    }

    onChangeFname(e) {
        this.setState({
          fname: e.target.value,
        });
    }

    onChangeLname(e) {
        this.setState({
          lname: e.target.value,
        });
    }

    onChangePassword(e) {
        this.setState({
          password: e.target.value,
        });
    }
  
    saveAccount() {
      const { email } = this.state;
  
      this.props
        .createAccount(email)
        .then((data) => {
          this.setState({
            id: data.id,
            email: data.email,
            fname: data.fname,
            lname: data.lname,
            username: data.username,
            password: data.password,
  
            submitted: true,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  
    newAccount() {
      this.setState({
        id: null,
        email: "",
        fname: "",
        lname: "",
        username: "",
        password: "",
  
        submitted: false,
      });
    }
  
    render() {
      return (
        <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newAccount}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                name="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                required
                value={this.state.username}
                onChange={this.onChangeUsername}
                name="username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                className="form-control"
                id="fname"
                required
                value={this.state.fname}
                onChange={this.onChangeFname}
                name="fname"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lname"
                required
                value={this.state.lname}
                onChange={this.onChangeLname}
                name="lname"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                required
                value={this.state.password}
                onChange={this.onChangePassword}
                name="password"
              />
            </div>

            <button onClick={this.saveAccount} className="btn btn-success">
              Submit
            </button>
            <button className="account-link-button"><Link to={"/"} className="btn-link">Back</Link></button>
            
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

export default connect(null, { createAccount })(AddAccount);