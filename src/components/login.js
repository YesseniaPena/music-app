import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from '@material-ui/icons/Menu';
import Dashboard from "./Dashboard";

class Login extends Component {
  state = {
    loggedIn: false
  };

  render() {
    return this.state.loggedIn ? (
      <Dashboard />
    ) : (
      <div className="login-container">
        <div className="logIn">
          <TextField className="user" label="username">
            User Name
          </TextField>

          <TextField className="password" label="password">
            Password
          </TextField>

          <Button
            classes={{ label: "login-button" }}
            onClick={() => {
              this.setState({ loggedIn: true });
            }}
          >
            Login
          </Button>
        </div>
      </div>
    );
  }
}

export default Login;
