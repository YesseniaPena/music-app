import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import Slider from "@material-ui/core/Slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

class Dashboard extends Component {
  state = {
    loggedIn: false,
    checkedA: true,
    values: "",
    notifications: []
  };
  handleChange = name => event => {
    if (this.state.checkedA) {
      this.state.notifications.push(
        "Your application is offline. You won't be able to share or stream music to other devices."
      );
    } else {
      let index = this.state.notifications.indexOf(
        "Your application is offline. You won't be able to share or stream music to other devices."
      );
      this.state.notifications.splice(index, 1);
    }
    this.setState({ checkedA: event.target.checked });
  };
  valueText = value => {
    console.log("this", this, "this");
    let index = this.state.notifications.indexOf(
      "Listening to music at a high volume could cause long-term hearing loss."
    );

    if (value > 80 && index === -1) {
      this.state.notifications.push(
        "Listening to music at a high volume could cause long-term hearing loss."
      );
      this.setState({ ...this.state });
    } else if (value <= 80 && index !== -1) {
      this.state.notifications.splice(index, 1);
      this.setState({ ...this.state });
    }
    return `${value}°C`;
  };


  handleSound = event => {
      if(event.target.value === 10){
        this.state.notifications.push("Music quality is degraded. Increase quality if your connection allows it."
        );
      }else{

      }
    this.setState({ values: event.target.value });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Welcome User!</h1>
        </div>
        <div className="dashboard-container">
          <Card className="online-mode">
            <CardContent>
              <Typography variant="h5" component="h2">
                Online-mode
              </Typography>

              <Typography variant="body2" component="p">
                Is this application connected to the internet?
              </Typography>
            </CardContent>
            <CardActions>
              <Switch
                checked={this.state.checkedA}
                onChange={this.handleChange("checkedA")}
                value="checkedA"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </CardActions>
          </Card>

          <Card className="Master-volume">
            <CardContent>
              <Typography variant="h5" component="h2">
                Master Volume
              </Typography>
              <Typography color="textSecondary">adjective</Typography>
              <Typography variant="body2" component="p">
                Overrides all other sound settings in this application
              </Typography>
            </CardContent>
            <CardActions>
              <Slider
                defaultValue={10}
                getAriaValueText={this.valueText}
                aria-labelledby="discrete-slider-small-steps"
                step={10}
                marks
                min={10}
                max={100}
                valueLabelDisplay="auto"
              />
            </CardActions>
          </Card>

          <Card className="Sound-quality">
            <CardContent>
              <Typography variant="h5" component="h2">
                Sound Quality
              </Typography>

              <Typography variant="body2" component="p">
                Manually control the music quality in event of poor connection
              
              </Typography>
            </CardContent>
            <CardActions>
              <Select
                value={this.state.values}
                onChange={this.handleSound}
                displayEmpty
                name="age"
                className="inputSound"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Low</MenuItem>
                <MenuItem value={20}>Normal</MenuItem>
                <MenuItem value={30}>High</MenuItem>
              </Select>
            </CardActions>
          </Card>
        </div>
        <div className="notifications">
          <h1>System Notifications:</h1>
          {this.state.notifications.map(notification => {
            return <p>{notification}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default Dashboard;
