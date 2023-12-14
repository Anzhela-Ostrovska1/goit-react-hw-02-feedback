import React from 'react';
import css from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.btnContainer}>
      {options.map(item => (
        <li className={css.item} key={item}>
          <button
            onClick={() => onLeaveFeedback(item)}
            type="button"
            className={css.button}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
