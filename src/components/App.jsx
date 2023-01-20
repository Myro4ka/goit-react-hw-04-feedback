import { Component } from 'react';
import { render } from 'react-dom';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGoodFeed = () => {
    this.setState({ good: this.state.good + 1 });
  };
  addNeutralFeed = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };
  addBadFeed = () => {
    this.setState({ bad: this.state.bad + 1 });
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <button onClick={this.addGoodFeed}>Good</button>
          <button onClick={this.addNeutralFeed}>Neutral</button>
          <button onClick={this.addBadFeed}>Bad</button>
        </div>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
        </ul>
      </div>
    );
  }
}
