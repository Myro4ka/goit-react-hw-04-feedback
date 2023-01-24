import PropTypes from 'prop-types';
import css from '../App/App.module.css';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={css.button_array}>
      <button className={css.add_btn} onClick={onLeaveFeedback}>
        Good
      </button>
      <button className={css.neutral_btn} onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button className={css.bad_btn} onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
