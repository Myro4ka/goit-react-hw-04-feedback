import PropTypes from 'prop-types';
import css from '../App/App.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.statistics_list}>
      <li className={css.statistics_list_item}>Good: {good}</li>
      <li className={css.statistics_list_item}>Neutral: {neutral}</li>
      <li className={css.statistics_list_item}>Bad: {bad}</li>
      <li className={css.statistics_list_item}>Total: {total}</li>
      <li className={css.statistics_list_item}>
        PositiveFeedback: {positivePercentage}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
