import React, { useState } from 'react';
import FeedbackOptions from "./FeedbackOptions/feedbackOptions"
import Statistics from "./Statistics/statistics"
import Section from "./Section/section";
import Notification from "./Notification/notification";

 export const App = () => {


 const [state, setState] = useState({good : 0, neutral : 0, bad : 0});

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;

    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {

    const {good} = state;

    const totalCount = countTotalFeedback();
    return totalCount > 0 ? Math.round((good / totalCount) * 100) : 0;
  }

  const handleFeedback = (option) => {
    setState((prevState) => ({ ...prevState, [option]: prevState[option] + 1 }));
  }

  const {good, neutral, bad} = state;
  const totalFeedback = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <Section title="Leave Feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
