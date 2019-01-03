import React, { Component } from "react";
import fire from "../../tools/firebase";
import { List, Loader } from "semantic-ui-react";

const NUMBER_OF_TOPS = 5;

class ToppLister extends Component {
  constructor(props) {
    super(props);
    this.ref = fire.database().ref("/restaurants");
    this.state = {
      restaurants: [],
      active: true
    };
  }

  componentDidMount() {
    this.ref
      .orderByChild("score")
      .limitToFirst(NUMBER_OF_TOPS)
      .on("value", snapshot => {
        const data = snapshot.val();
        this.setState({
          restaurants: this.convertToArray(data),
          active: false
        });
      });
  }

  convertToArray = data => {
    const keys = Object.keys(data);
    return keys.map(key => data[key]);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Topp {NUMBER_OF_TOPS} restauranter</h1>
        <Loader active={this.state.active} inline />
        <List>
          {this.state.restaurants.map(r => {
            return (
              <List.Item key={r.name}>
                {r.name} - Score: {r.score}
              </List.Item>
            );
          })}
        </List>
      </div>
    );
  }
}

export default ToppLister;
