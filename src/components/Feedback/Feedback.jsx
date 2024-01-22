import { ImWink, ImAngry, ImWondering, ImStatsDots, ImCheckmark2 } from 'react-icons/im';
import css from './Feedback.module.css';

export const Feedback = ({
  feedbackStats: { good, neutral, bad },
  totalFeedback,
  positivePercentage,
}) => {
  return (
    <div className={css.feedbackStats}>
      {totalFeedback > 0 ? (
        <ul className={css.feedbackList}>
          <li className={css.feedbackItem}>
            <p className={css.feedbackText}>
              <ImWink /> : {good}
            </p>
          </li>
          <li className={css.feedbackItem}>
            <p className={css.feedbackText}>
              <ImWondering /> : {neutral}
            </p>
          </li>
          <li className={css.feedbackItem}>
            <p className={css.feedbackText}>
              <ImAngry /> : {bad}
            </p>
          </li>
          <li className={css.feedbackItem}>
            <p className={css.feedbackText}>
              <ImCheckmark2 /> : {totalFeedback}
            </p>
          </li>
          <li className={css.feedbackItem}>
            <p className={css.feedbackText}>
              <ImStatsDots /> : {positivePercentage}%
            </p>
          </li>
        </ul>
      ) : (
        <p className={css.noFeedbackText}>No feedback yet.</p>
      )}
    </div>
  );
};
