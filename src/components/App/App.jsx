import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import css from '../App/App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
  };

  addFeed = event => {
    {
      switch (event.target.textContent.toLowerCase()) {
        case 'good':
          this.addGoodFeed();
          break;
        case 'neutral':
          this.addNeutralFeed();
          break;
        default:
          this.addBadFeed();
      }
    }
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
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.addFeed} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.state.percentage}
          />
        </Section>
      </div>
    );
  }
}
