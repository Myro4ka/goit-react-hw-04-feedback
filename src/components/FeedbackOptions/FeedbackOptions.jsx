import PropTypes from 'prop-types';
import css from '../App/App.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.button_array}>
      {options.map(element => (
        <button
          key={element}
          className={css.feedback_btn}
          onClick={onLeaveFeedback}
        >
          {element}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
