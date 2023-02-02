import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import '../App/App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
  };

  addFeedback = event => {
    if (event.target === event.currentTarget) {
      const activeBtn = event.currentTarget.textContent;
      this.changeFeedbackOptions(activeBtn);
    }
  };

  changeFeedbackOptions = feedback => {
    this.setState({
      [feedback]: this.state[feedback] + 1,
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prev => ({ total: prev.total + 1 }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prev => ({
      percentage: Math.round((prev.good / prev.total) * 100 * 100) / 100,
    }));
  };

  render() {
    const optionsForButtons = Object.keys(this.state).filter(
      option => option === 'good' || option === 'neutral' || option === 'bad'
    );
    const { good, neutral, bad, total, percentage } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={optionsForButtons}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percentage}
            />
          ) : (
            <Notification title="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
