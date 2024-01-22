import css from './Options.module.css';

export const Options = ({ onFeedback, onReset, hasFeedback }) => {
  return (
    <ul className={css.options}>
      <li>
        <button className={css.buttonGood} onClick={() => onFeedback('good')}>
          Good
        </button>
      </li>
      <li>
        <button className={css.buttonNeutral} onClick={() => onFeedback('neutral')}>
          Neutral
        </button>
      </li>
      <li>
        <button className={css.buttonBad} onClick={() => onFeedback('bad')}>
          Bad
        </button>
      </li>
      {hasFeedback && (
        <li>
          <button className={css.buttonReset} onClick={onReset}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};
