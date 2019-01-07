import React, { Component } from "react";
import { IceCream } from "react-kawaii";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.index = 0;
    this.state = {
      mood: "blissful"
    };
    this.startInterval(1200);
    this.interval = null;
  }

  toogleMoods = () => {
    const moods = [
      "sad",
      "shocked",
      "happy",
      "blissful",
      "lovestruck",
      "excited",
      "ko"
    ];
    if (this.index >= moods.length) {
      this.index = 0;
    }
    const mood = moods[this.index];
    this.setState({
      mood
    });
    this.index = this.index + 1;
  };

  startInterval = interval => {
    this.interval = setInterval(this.toogleMoods, interval);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { mood } = this.state;
    return <IceCream size={300} mood={mood} color="#FDA7DC" />;
  }
}

export default Hero;
