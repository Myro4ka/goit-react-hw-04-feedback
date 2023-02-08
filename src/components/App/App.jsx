import { useEffect, useState } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import '../App/App.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const addFeedback = event => {
    if (event.target === event.currentTarget) {
      const activeBtn = event.currentTarget.textContent;
      changeFeedbackOptions(activeBtn);
    }
  };

  const changeFeedbackOptions = feedback => {
    switch (feedback) {
      case 'bad':
        setBad(bad + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'good':
        setGood(good + 1);
        break;
      default:
        throw new Error('Oops');
    }
  };

  useEffect(() => {
    setTotal(bad + good + neutral);
    setPercentage(Math.round((100 / total) * good * 100) / 100);
  }, [bad, good, neutral, total]);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={addFeedback}
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
};
