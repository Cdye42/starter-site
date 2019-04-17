import React, { Component } from "react";
import CSSModules from "react-css-modules";

import autoLogin from "../../../process/users/auth/auto-login";
import css from "./index.css";
import * as axiosWrapper from "../../../utilities/axios/wrapper";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creatorOfTheDay: ""
    };
  }
  componentDidMount() {
    axiosWrapper
      .get("/creator")
      .then(response => {
        console.log("here is the about page response", response);
        this.setState({ creatorOfTheDay: response.data.message.dailyMessage });
      })
      .catch(err => {
        console.log("Error fetching daily creator");
      });
  }

  render() {
    const { creatorOfTheDay } = this.state;

    return (
      <div styleName="about-us-container">
        <div styleName="daily-creator">{creatorOfTheDay}</div>
      </div>
    );
  }
}

export default autoLogin(CSSModules(AboutUs, css));
