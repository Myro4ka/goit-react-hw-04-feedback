import { Component } from 'react';
import css from '../App/App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
  };

  addGoodFeed = () => {
    this.setState({
      good: this.state.good + 1,
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  addNeutralFeed = () => {
    this.setState({
      neutral: this.state.neutral + 1,
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  addBadFeed = () => {
    this.setState({
      bad: this.state.bad + 1,
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  countTotalFeedback = () => {
    this.setState(prev => ({ total: prev.total + 1 }));
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(prev => ({
      percentage: (prev.good / prev.total) * 100,
    }));
  };

  render() {
    return (
      <div>
        <h1 className={css.title}>Please leave feedback</h1>
        <div className={css.button_array}>
          <button className={css.feedback_button} onClick={this.addGoodFeed}>
            Good
          </button>
          <button className={css.feedback_button} onClick={this.addNeutralFeed}>
            Neutral
          </button>
          <button className={css.feedback_button} onClick={this.addBadFeed}>
            Bad
          </button>
        </div>
        <h2 className={css.statistics_list_title}>Statistics</h2>
        <ul className={css.statistics_list}>
          <li className={css.statistics_list_item}>Good: {this.state.good}</li>
          <li className={css.statistics_list_item}>
            Neutral: {this.state.neutral}
          </li>
          <li className={css.statistics_list_item}>Bad: {this.state.bad}</li>
          <li className={css.statistics_list_item}>
            Total: {this.state.total}
          </li>
          <li className={css.statistics_list_item}>
            PositiveFeedback: {this.state.percentage}%
          </li>
        </ul>
      </div>
    );
  }
}
