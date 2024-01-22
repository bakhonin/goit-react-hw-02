import { useState, useEffect } from 'react';
import { Description } from '../Description/Description';
import { Feedback } from '../Feedback/Feedback';
import { Options } from '../Options/Options';
import css from './App.module.css';

export const App = () => {
  const [feedbackStats, setFeedbackStats] = useState(() => {
    const storedStats = JSON.parse(window.localStorage.getItem('feedbackStats'));
    if (storedStats !== null) {
      return storedStats;
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem('feedbackStats', JSON.stringify(feedbackStats));
  }, [feedbackStats]);

  const handleFeedback = type => {
    setFeedbackStats(prevStats => ({
      ...prevStats,
      [type]: prevStats[type] + 1,
    }));
  };

  const handleReset = () => {
    setFeedbackStats({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedbackStats.good + feedbackStats.neutral + feedbackStats.bad;
  const positivePercentage = Math.round(
    ((feedbackStats.good + feedbackStats.neutral) / totalFeedback) * 100
  );

  return (
    <div className={css.container}>
      <Description />
      <Options
        onFeedback={type => handleFeedback(type)}
        onReset={handleReset}
        hasFeedback={totalFeedback > 0}
      />
      <Feedback
        feedbackStats={feedbackStats}
        totalFeedback={totalFeedback}
        positivePercentage={positivePercentage}
      />
    </div>
  );
};
